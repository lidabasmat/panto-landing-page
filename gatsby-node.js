const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const { toKebabCase } = require('./src/utils/toKebabCase');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
      type Product implements Node {
        slug: String
        title: String
        type: String
        image: File @fileByRelativePath
        rating: Int
        price: Int
        featured: Boolean
        content: Mdx
      }
    `,
  ];

  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
        createNodeField({
            name: 'sourceName',
            node,
            value: parent.sourceInstanceName,
        });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'products') {
      const productContent = {
        slug: `/products${createFilePath({ node, getNode })}`,
        title: node.frontmatter.title,
        type: node.frontmatter.type,
        image: node.frontmatter.image,
        rating: node.frontmatter.rating,
        price: node.frontmatter.price,
        featured: node.frontmatter.featured,
        content: node,
      };

      createNode({
        id: createNodeId(`product-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Product',
          contentDigest: createContentDigest(productContent),
        },
        ...productContent,
      })
    }
  }
};
