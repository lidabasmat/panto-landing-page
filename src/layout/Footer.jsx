import * as React from 'react';
import IconFacebookSource from '../images/facebook.svg';
import IconTwitterSource from '../images/twitter.svg';
import IconInstagramSource from '../images/instagram.svg';

const Footer = () => {
  return (
    <>
      <footer className="pt-28 pb-14 bg-gray-100">
        <div className="container-lg">
          <div className="row">
            <div className="col-full md:col-5">
              <span className="text-4xl font-bold">Panto</span>
              <p className="typo-intro mt-7 max-w-xs">
                The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
              </p>
            </div>
            <div className="col-full md:col-7">
              <div className="row justify-between">
                <div className="col-6 md:col-4 mt-10 md:mt-0">
                  <div className="flex flex-col">
                    <span className="typo-body text-orange-400">
                      Services
                    </span>
                    <a href="#" className="typo-body mt-5">Email Marketing</a>
                    <a href="#" className="typo-body mt-4">Campaigns</a>
                    <a href="#" className="typo-body mt-4">Branding</a>
                  </div>
                </div>
                <div className="col-6 md:col-4 mt-10 md:mt-0">
                  <div className="flex flex-col">
                    <span className="typo-body text-orange-400">Furniture</span>
                    <a href="#" className="typo-body mt-5">Beds</a>
                    <a href="#" className="typo-body mt-4">Chair</a>
                    <a href="#" className="typo-body mt-4">All</a>
                  </div>
                </div>
                <div className="col-6 md:col-4 mt-10 md:mt-0">
                  <div className="flex flex-col">
                    <span className="typo-body text-orange-400">Follow Us</span>
                    <div className="flex items-center mt-5">
                      <span className="w-5">
                        <img src={IconFacebookSource} alt="Plus Icon" className="mx-auto" />
                      </span>
                      <a href="#" className="typo-body ml-4">Facebook</a>
                    </div>
                    <div className="flex items-center mt-5">
                      <span className="w-5">
                        <img src={IconTwitterSource} alt="Plus Icon" className="mx-auto" />
                      </span>
                      <a href="#" className="typo-body ml-4">Twitter</a>
                    </div>
                    <div className="flex items-center mt-5">
                      <span className="w-5">
                        <img src={IconInstagramSource} alt="Plus Icon" className="mx-auto" />
                      </span>
                      <a href="#" className="typo-body ml-4">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-full mt-10 md:mt-24">
              <div className="row justify-between">
                <div className="col mt-5 md:mt-0">
                  <span className="typo-small">Copyright © 2021</span>
                </div>
                <div className="col mt-5 md:mt-0">
                  <a href="#" className="typo-small">Terms & Conditions</a>
                  <a href="#" className="typo-small ml-10">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
