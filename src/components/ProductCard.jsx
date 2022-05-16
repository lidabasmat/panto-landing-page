import React from 'react';
import { GatsbyImage as Image } from 'gatsby-plugin-image';
import Rating from './Rating';
import IconPlusSource from '../images/icon-plus.svg';
import PropTypes from '../utils/PropTypes';

const ProductCard = ({ title, category, image, price, rating }) => {
  const dollarPrice = price / 100;

  return (
    <div className="bg-white rounded-3xl shadow-2xl">
      <div className="bg-gray-100 px-6 pb-8 text-center rounded-t-3xl">
        <Image
          image={image}
          className="-mt-12"
        />
      </div>
      <div className="pt-4 pb-7 px-5">
        <span>
          {category}
        </span>
        <h3 className="typo-h4 mt-2">
          {title}
        </h3>
        <Rating className="mt-1" stars={rating} />
        <div className="flex justify-between items-center mt-10">
          <div className="font-semibold">
            <span className="text-base align-super mr-1">$</span>
            {price && (
              <span className="text-xl">
                {dollarPrice}
              </span>
            )}
            {!price && (
              <span>
                Not available
              </span>
            )}
          </div>
          <button className="w-12 h-12 bg-blue-900 rounded-full flex justify-center items-center">
            <img src={IconPlusSource} alt="Plus Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.shape(PropTypes.object).isRequired,
  rating: PropTypes.number,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  price: 0,
  rating: 0,
};

export default ProductCard;
