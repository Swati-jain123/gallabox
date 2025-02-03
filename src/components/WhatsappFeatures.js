import { useState, useEffect } from 'react';

// Slider component to display a carousel of slides
const Slider = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State to determine the number of slides visible at a time
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 slides for desktop

  // Slide data containing image, title, description, and link
  const slides = [
    {
      imgSrc: 'https://assets.gallabox.com/gb-home/new-landing/feature/ctwa-new.png',
      title: 'Click-to-WhatsApp Ads',
      description: 'Get your audience from Facebook and Instagram ads to WhatsApp in a single tap.',
      link: 'https://gallabox.com/click-to-whatsapp-ads',
    },
    {
      imgSrc: 'https://assets.gallabox.com/gb-home/new-landing/feature/flows-new.png',
      title: 'WhatsApp Flows',
      description: 'Build forms to collect data for surveys and drive outcomes like appointment booking and registrations.',
      link: 'https://gallabox.com/whatsapp-flows',
    },
    {
      imgSrc: 'https://assets.gallabox.com/gb-home/new-landing/feature/payments.png',
      title: 'WhatsApp Payments',
      description: 'Enable payment workflows to ease your customers’ checkout experience on WhatsApp.',
      link: 'https://gallabox.com/whatsapp-payments',
    },
    {
      imgSrc: 'https://assets.gallabox.com/gb-home/new-landing/feature/catalog.png',
      title: 'Product Catalogs',
      description: 'Set up a virtual shop by showcasing your products inside WhatsApp.',
      link: 'https://gallabox.com/build-your-shop-on-whatsapp',
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Effect to handle responsive slides display based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1); // Show only 1 slide on small screens
      } else {
        setSlidesToShow(3); // Show 3 slides on desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="lg:py-20 py-16 bg-gradient-to-r from-[#396AFF] to-[#000] overflow-hidden mt-12">
      <div className="lg:max-w-7xl lg:mx-auto px-5 w-full flex flex-col lg:gap-12 gap-8">
        {/* Header section */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-5xl text-3xl font-semibold text-white lg:max-w-5xl text-left" style={{ fontFamily: 'Degular Display' }}>
              Keep prospects close and customers closer with features that make the most of WhatsApp
            </h2>
          </div>
          {/* Navigation buttons for desktop */}
          <div className="lg:flex hidden text-white">
            <button onClick={prevSlide} className="cursor-pointer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM146.83,90.83,109.66,128l37.17,37.17a4,4,0,0,1-5.66,5.66l-40-40a4,4,0,0,1,0-5.66l40-40a4,4,0,1,1,5.66,5.66Z"></path>
              </svg>
            </button>
            <button onClick={nextSlide} className="cursor-pointer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Slider container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }} // Adjust for mobile vs desktop
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="lg:w-[500px] w-full flex-shrink-0 px-2 overflow-hidden"
              >
                <div className="flex flex-col gap-0 rounded">
                  <div className="w-full rounded-t-lg overflow-hidden lg:h-64 h-44">
                    <img alt={slide.title} loading="lazy" className="w-full h-full object-cover" src={slide.imgSrc} />
                  </div>
                  <div className="w-full lg:h-44 h-52 bg-white p-6 rounded-b-lg flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                    <p className="text-base mb-3">{slide.description}</p>
                    <div className="flex-grow"></div>
                    <a className="text-base font-medium flex gap-2 w-fit text-[#3364FA]" target="_blank" href={slide.link}>
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons for mobile */}
        <div className="lg:hidden mx-auto flex gap-1 text-white">
          <button onClick={prevSlide} className="cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
              <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM146.83,90.83,109.66,128l37.17,37.17a4,4,0,0,1-5.66,5.66l-40-40a4,4,0,0,1,0-5.66l40-40a4,4,0,1,1,5.66,5.66Z"></path>
            </svg>
          </button>
          <button onClick={nextSlide} className="cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
              <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;