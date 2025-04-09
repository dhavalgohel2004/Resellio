import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react"; // Make sure this is imported
import sec2img from "/asets/div.png"; 
import sec3img1 from "/asets/buy.png"; 
import sec3img2 from "/asets/car.png"; 
import sec3img3 from "/asets/feedback.png"; 
import sec3img4 from "/asets/new-product.png"; 
import sec3img5 from "/asets/second-hand.png"; 
import sec3img6 from "/asets/sell.png"; 

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const canvasRef = useRef(null);
  const frames = useRef({
    currentIndex: 0,
    maxIndex: 601
  });

  const imagesRef = useRef([]);
  const imagesLoadedRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const preloadImages = () => {
      for (let i = 1; i <= frames.current.maxIndex; i++) {
        const imageUrl = `/second_video_frame/frame_${i.toString().padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
          imagesLoadedRef.current++;
          if (imagesLoadedRef.current === frames.current.maxIndex) {
            loadImage(frames.current.currentIndex);
            startAnimation();
          }
        };

        imagesRef.current.push(img);
      }
    };

    const loadImage = (index) => {
      if (index >= 0 && index <= frames.current.maxIndex) {
        const img = imagesRef.current[index];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max  (scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frames.current.currentIndex = index;
      }
    };

    const startAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".canvas-parent",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });

      tl.to(frames.current, {
        currentIndex: frames.current.maxIndex,
        onUpdate: () => {
          loadImage(Math.floor(frames.current.currentIndex));
        }
      });
    };

    preloadImages();


    gsap.registerPlugin(ScrollTrigger);

    // Get container and sections
    const container = document.querySelector(".canvas-overlay-content");
    const sections = gsap.utils.toArray(".canvas-overlay-content section");
    const totalSections = sections.length;
    const sectionHeight = window.innerHeight;

    // Set total scroll height
    document.body.style.height = `${sectionHeight * totalSections}px`;

    // Initialize: Only the first section is visible
    sections.forEach((section, index) => {
      gsap.set(section, {
        opacity: index === 0 ? 1 : 0,
        display: index === 0 ? "flex" : "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "calc(100vh - 100px)"
      });
    });

    // ScrollTrigger with even section transition
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${sectionHeight * totalSections}`,
      scrub: true,
      onUpdate: (self) => {
        const scrollY = self.scroll(); // Pixels scrolled
        const activeIndex = Math.floor(scrollY / sectionHeight);

        // Clamp the index so it never goes out of bounds
        const clampedIndex = Math.min(activeIndex, totalSections - 1);

        sections.forEach((section, index) => {
          gsap.to(section, {
            opacity: index === clampedIndex ? 1 : 0,
            display: index === clampedIndex ? "flex" : "none",
            duration: 0.1,
            overwrite: "auto",
            ease: 'power1.in'
          });
        });
      },
      invalidateOnRefresh: true
    });
    

  }, []);

  window.addEventListener('load', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

const [index, setIndex] = useState(0);

const images = useMemo(() => [
  sec3img1,
  sec3img2,
  sec3img3,
  sec3img4,
  sec3img5,
  sec3img6,
], []);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 2000); // Change every 2 seconds

  return () => clearInterval(interval); // Cleanup
}, [images.length]);


  return (
    <>
      <div className="home-page-banner">
        <div className="parent canvas-parent">
          <div className="canvar-top">
            <canvas ref={canvasRef} className="" />
            
            <div className="canvas-overlay-content">
              <section className="first-section align-items-center justify-content-center">
                <div className="custom-container max-w-screen-xl mx-auto px-4 items-center justify-center flex flex-col">
                  <div className="flex flex-col justify-start md:text-left">
                    <h1 className="font-baskerville text-3xl md:text-7xl text-center max-w-[812px] mx-auto text-gray-100">
                      Embrace conscious choices for a better future.
                    </h1>
                    <p className="font-outfit text-base md:text-lg mt-9 text-center max-w-[320px] mx-auto text-gray-200">
                      Discover a smarter way to shop — where sustainability meets affordability. Join a growing community that's redefining resale.
                    </p>
                    <div className="flex justify-center">
                      <Link to="/products" className="custom-animated-btn font-outfit py-2.5 px-7 mt-7">
                        Explore Products
                      </Link>
                    </div>
                  </div>                
                </div>
              </section>

              <section className="how-it-works-section">
                <div className="custom-container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 justify-center">
                  
                  {/* Image Content */}
                  <div className="w-full lg:w-5/12">
                    <img src={sec2img} alt="Selling steps illustration" className="w-full hidden md:block object-cover object-center" />
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-baskerville mb-4 text-gray-100 text-end font-bold">
                      Turn Unused Items into Cash 💸
                    </h2>
                    <p className="text-base md:text-lg mb-6 font-outfit text-gray-100 text-end">
                      Resellio is the easiest way to sell second-hand products. Whether it's a phone, jacket, or table — snap, list, and earn.
                    </p>
                    <ul className="space-y-2 text-base font-outfit mb-6 text-gray-300 text-end">
                      <li>📷 Snap a photo</li>
                      <li>🛍️ List your item</li>
                      <li>💬 Chat with buyers</li>
                      <li>🚚 Ship or meet locally</li>
                    </ul>
                  </div>
                </div>
              </section>


              <section className="why-choose-us-section">
                <div className="custom-container px-4 h-full w-full flex justify-center items-center flex-col">
                  <h2 className="text-3xl md:text-4xl font-baskerville text-center mb-6 font-bold text-gray-100">Why Choose Us</h2>
                  <p className="text-center text-gray-300 font-outfit max-w-xl mx-auto mb-12">
                    We’re not just another service provider. We’re a team driven by results, reliability, and real relationships.
                  </p>

                  <div className="image-animation relative w-full h-[300px] md:h-[400px] overflow-hidden">
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Slide ${i + 1}`}
                        className={`absolute inset-0 w-[254px] h-auto mx-auto object-cover object-center transition-opacity duration-1000 ease-in-out ${
                          index === i ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
