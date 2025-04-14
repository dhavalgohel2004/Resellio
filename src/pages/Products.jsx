import React, { useRef, useState, useEffect } from 'react';
import AuroraBackground from '../assets/animationComponent/AuroraBackground'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=1' },
  { id: 2, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=2' },
  { id: 3, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=3' },
  { id: 4, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=4' },
  { id: 5, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=5' },
  { id: 6, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=6' },
  { id: 7, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=7' },
  { id: 8, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=8' },
  { id: 9, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=9' },
  { id: 10, name: 'slide', price: '100', location: 'demo',url: "#", image: 'https://picsum.photos/800/300?random=10' },
]


const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    price: '$999',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    price: '$799',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'MacBook Pro 14"',
    price: '$1,999',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    price: '$349',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Lenovo ThinkPad X1',
    price: '$1,299',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    name: 'Apple Watch Series 8',
    price: '$399',
    image: 'https://picsum.photos/200/300',
  },
];

function Products() {

  const sliderRef = useRef(null); // ✅ Hook called inside function component
  const [activeSlide, setActiveSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveSlide(newIndex);
  };

  useEffect(() => {
    const active = document.querySelector(
      ".product-slider .slick-slide.slick-active.slick-center.slick-current"
    );
  
    if (!active) return;
  
    // Clear previous custom classes
    document.querySelectorAll(".slick-slide").forEach((slide) => {
      slide.classList.remove("slick-left", "slick-right", "slick-center-custom");
    });
  
    const prev = active.previousElementSibling;
    const next = active.nextElementSibling;
  
    // Add custom class to active for custom styling (optional)
    active.classList.add("slick-center-custom");
  
    // Add left and right
    if (prev) prev.classList.add("slick-left");
    if (next) next.classList.add("slick-right");
  }, [activeSlide]);
  

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <>
      {/* hero section  */}
      <AuroraBackground>
        <div className="custom-container px-4 md:py-44 py-20 flex flex-col items-center justify-center gap-7">
          <h1 className='text-white text-center text-2xl font-bold md:text-6xl font-baskerville'>Explore Top Deals</h1>
          <p className='text-center text-gray-50'>Browse the latest tech & gadgets at unbeatable prices.</p>
          <div className="btn-wrapper flex justify-center">
            <a href="#section2" className='custom-animated-btn py-3 px-8 font-outfit font-medium text-white'>Expolore</a>
          </div>
        </div>
      </AuroraBackground>


      {/* products  */}
      <section className='bg-[#5454C5]' id="section2">
        <div className="custom-container px-4 py-14">
        <h2 className='text-5xl font-baskerville font-bold text-center text-white'>Our Products</h2>
        <div className="filture-tab flex flex-col lg:flex-row justify-between items-center gap-4 py-7">
          {/* Left Filters */}
          <div className="filture-left w-full lg:w-1/2 flex gap-4">
            <form className="font-outfit w-1/2 relative">
              <select className="bg-[#342056] text-white text-sm rounded-lg w-full py-3 px-4 pr-10 appearance-none focus:outline-none">
                <option value="none">Sort by Price</option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
                <option value="tr">Top Rated</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-white">
                ▼
              </div>
            </form>

            <form className="font-outfit w-1/2 relative">
              <select className="bg-[#342056] text-white text-sm rounded-lg w-full py-3 px-4 pr-10 appearance-none focus:outline-none">
                <option value="none">Sort by Date</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-white">
                ▼
              </div>
            </form>
          </div>

          {/* Right Filters */}
          <div className="filture-right w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
            <form className="font-outfit w-full sm:w-1/2 relative">
              <select className="bg-[#342056] text-white text-sm rounded-lg w-full py-3 px-4 pr-10 appearance-none focus:outline-none">
                <option value="none">Select City</option>
                <option value="jetpur">Jetpur</option>
                <option value="gondal">Gondal</option>
                <option value="rajkot">Rajkot</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-white">
                ▼
              </div>
            </form>

            <form className="w-full sm:w-1/2 relative">
              <input
                type="search"
                className="block w-full py-3 px-4 ps-10 text-sm text-white rounded-lg bg-[#342056] border-none focus:outline-none placeholder:text-gray-300"
                placeholder="Search Products"
                required
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="absolute end-1 bottom-1 bg-[#5454C5] text-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
              >
                Search
              </button>
            </form>
          </div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-7">
            {products.map((product) => (
              <div key={product.id} className="bg-[#342056] overflow-hidden rounded-lg shadow-sm">
                  <a href="#">
                      <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="px-5 pb-5 pt-6">
                      <a href="#">
                          <h5 className="text-xl font-normal tracking-tight text-gray-900 dark:text-white font-outfit">{product.name}</h5>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3 font-outfit">5.0</span>
                      </div>
                      <div className="flex items-center justify-between">
                          <span className="text-3xl font-normal text-gray-900 dark:text-white font-outfit">{product.price}</span>
                          <a href="#" className="text-white custom-animated-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center">View More</a>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slider  */}
      <section className='bg-[#639CD9]'>
        <div className="py-14 px-4">
          <h2 className='text-5xl font-baskerville font-bold text-center text-white'>Featured Products</h2>
          <div className="px-6 py-10 product-slider relative">
            <Slider {...settings} ref={sliderRef} beforeChange={handleBeforeChange}>
              {slides.map((slide) => (
              <div key={slide.id} className="px-2 products-slide h-full">
                <div
                  className="flex h-full flex-col items-start ps-9 pb-11 justify-end bg-cover bg-center bg-no-repeat rounded-3xl"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <h3>{slide.name}</h3>
                  <p>{slide.location}</p>
                  <p>{slide.price}</p>
                  <a href={slide.url}></a>
                </div>
              </div>
              ))}
            </Slider>

            {/* Custom Arrows */}



            {/* Custom Dots */}
            <div className="flex justify-center mt-4 gap-2 relative mt-6">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="absolute top-1/2 left-1/3 transform -translate-y-1/2 text-3xl font-extrabold text-white p-2 rounded-full z-10"
              >
                ←
              </button>

              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSlide ? "bg-[#220E24]" : "bg-[#5454C5]"
                  }`}
                  onClick={() => sliderRef.current?.slickGoTo(index)}
                ></button>
              ))}

              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="absolute top-1/2 right-1/3 transform -translate-y-1/2 text-3xl font-extrabold text-white p-2 rounded-full z-10"
              >
                →
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Products