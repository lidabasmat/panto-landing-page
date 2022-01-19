import * as React from 'react';
import IconCartSource from '../images/icon-cart.svg';
import IconMenuSource from '../images/icon-menu.svg';

const Header = () => {
  return (
    <>
      <header className="absolute w-full top-0 text-white z-10">
        <div className="container-lg">
          <div className="row justify-between items-center py-10">
            <div className="col">
              <h1 className="text-2xl md:text-3xl font-bold">
                Panto
              </h1>
            </div>
            <div className="col text-lg hidden md:flex">
              <a href="#" className="">Furniture</a>
              <a href="#" className="ml-16">Shop</a>
              <a href="#" className="ml-16">About Us</a>
              <a href="#" className="ml-16">Contact</a>
            </div>
            <div className="col flex items-center">
              <div className="relative">
                <img src={IconCartSource} className="w-7" alt="cart icon" />
                <span className="bg-orange-600 rounded-full px-1.5 py-1 text-xs absolute top-0 left-4">0</span>
              </div>
              <div className="ml-8">
                <img src={IconMenuSource} className="inline-block md:hidden w-7" alt="menu icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
