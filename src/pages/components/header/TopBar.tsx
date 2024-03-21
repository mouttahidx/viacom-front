import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-transparent hidden px-2 lg:flex absolute top-0 items-center border-b border-gray-600 max-w-6xl left-0 right-0 mx-auto h-14 z-10 ">
      {/* social media icons */}
      <a href="facebook.com" className="mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="fill-white w-4 h-4"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            className="bg-blend-normal"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M17.525,9h-3.525v-2c0,-1.032 0.084,-1.682 1.563,-1.682h1.868v-3.18c-0.909,-0.094 -1.823,-0.14 -2.738,-0.138c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-3v4l3,-0.001v9.001h4v-9.003l3.066,-0.001z"></path>
            </g>
          </g>
        </svg>
      </a>
      <a href="linkedin.com">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="fill-white w-5 h-5"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            className="mix-blend-normal"
          >
            <g transform="scale(8,8)">
              <path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path>
            </g>
          </g>
        </svg>
      </a>

      {/* Call us */}
      <span className="text-white text-xs ml-6">
        DES QUESTIONS? APPELEZ-NOUS :{" "}
        <a href="tel:+1418-825-2323" className="font-bold">418-825-2323</a>
      </span>

      <a href="/outien.viacommunication.com" className="uppercase text-white text-xs font-medium ml-auto">Connexion</a>
    </div>
  );
}
