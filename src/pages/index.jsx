import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import IconSearchSource from '../images/search.svg';
import IconLineSource from '../images/icon-line.svg';
import ProductCard from '../components/ProductCard';
import Rating from '../components/Rating';
import IconPlusSource from '../images/icon-plus.svg';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      sofaImage: file(relativePath: {eq: "sofa.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      chairs2Image: file(relativePath: {eq: "chairs2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      sofa2Image: file(relativePath: {eq: "sofa2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      chairsImage: file(relativePath: {eq: "chairs.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      back1Image: file(relativePath: {eq: "back1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      back2Image: file(relativePath: {eq: "back2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      back3Image: file(relativePath: {eq: "back3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      human1Image: file(relativePath: {eq: "human1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 48
            width: 48
          )
        }
      }
      human2Image: file(relativePath: {eq: "human2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 48
            width: 48
          )
        }
      }
      human3Image: file(relativePath: {eq: "human3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 48
            width: 48
          )
        }
      }
      products: allProduct(filter: {featured: {eq: true}}) {
        nodes {
          title
          price
          rating
          type
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                height: 250
              )
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="text-white pt-40 pb-96 relative">
        <div className="absolute inset-0">
          <Image
            image={getImage(data.heroImage)}
            className="h-full w-full"
          />
        </div>
        <div className="container-lg relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold leading-snug">
              Make your interior more minimalistic & modern
            </h1>
            <p className="typo-blockquote mt-4 max-w-xl mx-auto leading-relaxed">
              Turn your room with panto into a lot more minimalist and modern with ease and speed
            </p>
          </div>
          <div className="max-w-sm mt-10 mx-auto">
            <div className="bg-white bg-opacity-20 border border-white border-opacity-60 rounded-full p-2 pl-5 flex justify-between items-center">
              <input type="text" placeholder="Search furniture" className="bg-transparent placeholder:text-white border-0 outline-none" />
              <button className="bg-orange-400 h-10 w-10 block rounded-full">
                <div className="flex justify-center items-center">
                  <img src={IconSearchSource} alt="Search Icon"/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-28">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full md:col-6 lg:col-3">
              <h2 className="typo-h2">
                Why Choosing Us
              </h2>
            </div>
            <div className="col-full md:col-6 lg:col-3 mt-10 md:mt-0">
              <h3 className="typo-h3">
                Luxury facilities
              </h3>
              <p className="typo-body mt-5">
                The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="text-orange-400 text-sm">
                  More Info
                </a>
                <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-3 mt-10 md:mt-24 lg:mt-0">
              <h3 className="typo-h3">
                Affordable Price
              </h3>
              <p className="typo-body mt-5">
                You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="text-orange-400 text-sm">
                  More Info
                </a>
                <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-3 mt-10 md:mt-14 lg:mt-0">
              <h3 className="typo-h3">
                Many Choices
              </h3>
              <p className="typo-body mt-5">
                We provide many unique work space choices so that you can choose the workspace to your liking.
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="text-orange-400 text-sm">
                  More Info
                </a>
                <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container-lg">
          <h2 className="typo-h2 text-center">
            Best Selling Product
          </h2>
          <div className="text-center mt-8 flex justify-center">
            <div className="p-1.5 rounded-full bg-gray-200 flex justify-between">
              <div className="py-2 px-5 hover:bg-white text-lg rounded-full">
                Chair
              </div>
              <div className="py-2 px-5 hover:bg-white text-lg rounded-full">
                Beds
              </div>
              <div className="py-2 px-5 hover:bg-white text-lg rounded-full">
                Sofa
              </div>
              <div className="py-2 px-5 hover:bg-white text-lg rounded-full">
                Lamp
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row">
            {data.products.nodes.map((product) => (
              <div className="col-full md:col-6 lg:col-3 mt-20">
                <ProductCard
                  title={product.title}
                  category={product.type}
                  image={getImage(product.image)}
                  rating={product.rating}
                  price={product.price}
                />
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a href="#" className="inline-flex flex-row text-orange-400">
              View All
              <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-60">
        <div className="container-lg">
          <div className="row md:flex-nowrap items-center">
            <div className="col-full md:col-6 md:-ml-1/12">
              <Image
                image={getImage(data.sofaImage)}
              />
            </div>
            <div className="col-full md:col-6 md:ml-1/12 mt-10 md:mt-0">
              <span className="typo-h5 text-orange-400">
                experiences
              </span>
              <h2 className="typo-h2 mt-5">
                We provide you the best experience
              </h2>
              <p className="typo-intro mt-5">
                You don’t have to worry about the result because all of these interiors are made by people who
                are professionals in their fields with an elegant and lucurious style and with premium quality materials
              </p>
              <div className="flex mt-6 text-sm text-orange-400">
                <a href="#" className="">
                  More Info
                </a>
                <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-60">
        <div className="container-lg">
          <div className="row md:flex-nowrap items-center">
            <div className="col-full md:col-6 md:ml-1/12 md:order-2">
              <div className="row">
                <div className="col-4">
                  <Image
                    image={getImage(data.chairs2Image)}
                  />
                  <Image
                    image={getImage(data.sofa2Image)}
                  />
                </div>
                <div className="col-8">
                  <Image
                    image={getImage(data.chairsImage)}
                  />
                </div>
              </div>
            </div>
            <div className="col-full md:col-6 mt-5 md:mt-0">
              <span className="typo-h5 text-orange-400">Materials</span>
              <h2 className="typo-h2 mt-5">
                Very serious materials for making furniture
              </h2>
              <p className="typo-intro mt-5">
                Because panto was very serious about designing furniture for our environment, using a very expensive
                and famous capital but at a relatively low price
              </p>
              <div className="flex mt-6 text-sm text-orange-400">
                <a href="#" className="">
                  More Info
                </a>
                <img src={IconLineSource} alt="Line Icon" className="ml-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-32 md:my-60 text-center">
        <div className="container-lg">
          <div className="text-center">
            <span className="typo-h5 text-orange-400">
              Testimonials
            </span>
            <h2 className="typo-h2 mt-5">
              Our Client Reviews
            </h2>
          </div>
          <div className="row">
            <div className="col-full md:col-6 lg:col-4 mt-14">
              <div className="relative pt-52 pb-5 px-5 rounded-3xl h-full">
                <div className="absolute inset-0">
                  <Image
                    image={getImage(data.back1Image)}
                    className="h-full w-full rounded-3xl"
                  />
                </div>
                <div className="bg-white pb-5 px-12 rounded-3xl relative h-full">
                  <Image
                    image={getImage(data.human1Image)}
                    className="rounded-full -mt-8 border-8 border-white"
                  />
                  <p className="typo-h6">
                    Bang Upin
                  </p>
                  <p className="text-xs opacity-60 mt-1">
                    Pedagang Asongan
                  </p>
                  <p className="text-sm mt-6 opacity-80">
                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“
                  </p>
                  <Rating className="mt-6 justify-center" stars={1} />
                </div>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-14">
              <div className="relative pt-52 pb-5 px-5 rounded-3xl h-full">
                <div className="absolute inset-0">
                  <Image
                    image={getImage(data.back2Image)}
                    className="h-full w-full rounded-3xl"
                  />
                </div>
                <div className="bg-white pb-5 px-12 rounded-3xl relative h-full">
                  <Image
                    image={getImage(data.human2Image)}
                    className="rounded-full -mt-8 border-8 border-white"
                  />
                  <p className="typo-h6">
                    Ibuk Sukijan
                  </p>
                  <p className="text-xs mt-2 opacity-60">
                    Ibu Rumah Tangga
                  </p>
                  <p className="text-sm mt-6 opacity-80">
                    “Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“
                  </p>
                  <Rating className="mt-6 justify-center" stars={4} />
                </div>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-14">
              <div className="relative pt-52 pb-5 px-5 rounded-3xl h-full">
                <div className="absolute inset-0">
                  <Image
                    image={getImage(data.back3Image)}
                    className="h-full w-full rounded-3xl"
                  />
                </div>
                <div className="bg-white pb-5 px-12 rounded-3xl relative h-full">
                  <Image
                    image={getImage(data.human3Image)}
                    className="rounded-full -mt-8 border-8 border-white"
                  />
                  <p className="typo-h6">
                    Mpok Ina
                  </p>
                  <p className="text-xs mt-2 opacity-60">
                    Karyawan Swasta
                  </p>
                  <p className="text-sm mt-6 opacity-80">
                    “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
                  </p>
                  <Rating className="mt-6 justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
