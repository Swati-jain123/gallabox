
import React, { useState, useEffect } from 'react';
import ThumbnailSlider from './ClientLogos';

const TestimonialSlider = () => {
  const [loadingProgress, setLoadingProgress] = useState(0); // State for loading progress
  const [paused, setPaused] = useState(false); // State to track if progress is paused

  const testimonials = [
    {
      id: 0,
      logo: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/pick-your-trial.png",
      quote: "With Gallabox's broadcast feature, we're now able to engage with our entire customer base effectively, sharing tailored travel deals and destination updates that actually reach our audience.",
      name: "Meena",
      role: "Senior CRM Associate, Pickyourtrail",
      stats: [
        { value: "77%", label: "Increase in lead generation" },
        { value: "70%", label: "Business growth impact" },
        { value: "40%", label: "Higher team productivity" },
      ],
      image: "https://assets.gallabox.com/gb-home/new-landing/testimony/company-image/pick-your-trial.png",
    },
    {
      id: 1,
      logo: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/qic.png",
      quote: "Gallabox streamlined communication, improved customer service, and increased productivity by 30%. It integrates with CRM, tracks customer interactions, and is user-friendly.",
      name: "Hazim Nazir",
      role: "Quality and Audit Officer, QIC",
      stats: [
        { value: "31%", label: "Increase in employee productivity" },
        { value: "102%", label: "Growth in lead generation" },
        { value: "2x", label: "Improvement in CSAT rates" },
      ],
      image: "https://assets.gallabox.com/gb-home/new-landing/testimony/company-image/qic.png",
    },
    {
      id: 2,
      logo: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/dubai-housekeeping.png",
      quote: "Client communication is not about stopping at a particular interaction. It has to be correlated with what the client has already said, has already been saying, and has said two months back. And Gallabox helped us with consolidating all these.",
      name: "Param Singh",
      role: "CEO, Dubai Housekeeping",
      stats: [
        { value: "25%", label: "Increase in customer retention" },
        { value: "47%", label: "Growth in revenue" },
        { value: "31%", label: "Improvement in customer feedback" },
      ],
      image: "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Ftestimony%2Fcompany-image%2Fdubai-house-keeping-company.png&w=384&q=75",
    },
    {
      id: 3,
      logo: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/footprint.svg",
      quote: "Gallabox provides innovative features that streamline our WhatsApp follow-ups, including sequencing, bots, and Click-to-WhatsApp (CTWA) capabilities—all of which have proven highly effective in our testing.",


      name: "Avinash Babu",
      role: "Sales Director, ABC Corp",
      stats: [
        { value: "77%", label: "Growth in first-time customer conversion" },
        { value: "70%", label: "Increase in Lead Conversion" },
        { value: "40%", label: "Expansion in customer base" },
      ],
      image: "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Ftestimony%2Fcompany-image%2Ffootprint-real-estate.png&w=384&q=75",
    },
  ];



  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setLoadingProgress((prevProgress) => {
          if (prevProgress >= 100) {
            // Reset the progress bar and start from the beginning after a 1-second delay
            return 0;
          }
          return prevProgress + 0.1; // Increment progress by 0.1% for slower loading
        });
      }
    }, 50); // Adjust the interval for slower progress (smaller number for slower loading)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [paused]);




  // Pause progress at milestones and cycle through testimonials
  useEffect(() => {
    if ([25, 50, 75, 100].includes(loadingProgress)) {
      setPaused(true);
      setTimeout(() => {
        setPaused(false);
      }, 1000);
    }
  }, [loadingProgress]);

  // Calculate the current testimonial index
  const currentIndex = Math.floor(loadingProgress / 25) % testimonials.length;
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="fader">
      {/* Progress Bar */}
<div className='mt-12'>
       <div>

       <h2 
         className="lg:text-5xl text-4xl font-semibold text-gray-900 mb-5 text-left 2xl:ml-[8%]  mx-5" 
         style={{ fontFamily: 'Degular Display' }}
       >
         See how we help our customers drive conversions        </h2>
       <a 
        className="text-xl font-medium flex gap-2 w-fit text-[#3364FA] text-left 2xl:ml-[8%] mx-5" 
         href="/case-study" 
         target="_blank" 
         rel="noreferrer"
       >
         View all customer stories
       </a>
     </div>


     </div>

      {/* Current Testimonial */}
      <TestimonialSlide testimonial={currentTestimonial} />
      <div className="w-auto bg-gray-200 rounded-full h-1 mb-4 text-left 2xl:ml-[8%] mx-5 mt-12 lg:mt-0">
        <div className="flex w-auto h-0">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              const progressStart = index * 25;
              const progressEnd = progressStart + 25;
              const isActive = loadingProgress > progressStart && loadingProgress <= progressEnd;

              return (
                <div
                  key={index}
                  className={`h-1 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-200'}`}
                  style={{
                    width: `${Math.min(Math.max(loadingProgress - progressStart, 0), 25)}%`,
                  }}
                ></div>
              );
            })}
        </div>

      </div>
<ThumbnailSlider/>

    </div>
  );
};

const TestimonialSlide = ({ testimonial }) => {
  return (
    <div className="fader__slide w-auto lg:pb-12 pb-0 text-left 2xl:ml-[8%] mx-5 mt-12">
      <div className="lg:hidden block bg-white px-3 py-2 shadow-lg w-fit rounded-lg border border-solid border-gray-50">
        <img
          alt="Client logo"
          loading="lazy"
          width={164}
          height={66}
          src={testimonial.logo}
          className="color-transparent"
        />
      </div>
      <div className="lg:block hidden pb-4">
        <img
          alt="quotation mark"
          loading="lazy"
          width={31}
          height={22}
          src="https://assets.gallabox.com/gb-home/new-landing/testimony/quote.png"
          className="color-transparent"
        />
      </div>
      <div className="w-full flex lg:gap-14 gap-0 lg:pt-0 pt-6">
        <div className="w-full lg:flex-1 flex flex-col lg:gap-11 gap-8">
          <div className="w-full flex flex-col gap-4 text-left">
            <p className="lg:text-xl lg:max-w-3xl text-base font-medium text-black">
              {testimonial.quote}
            </p>
            <div>
              <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-700">{testimonial.role}</p>
            </div>
          </div>
          <div className="w-full flex lg:gap-6 gap-4">
            {testimonial.stats.map((stat, index) => (
              <div
                key={index}
                className="lg:pl-3 pl-3 flex flex-col gap-2 h-auto lg:w-1/3 w-full"
                style={{ borderLeft: '3px solid #3364FA' }}
              >
                <p className="lg:text-6xl text-3xl font-bold" style={{ fontFamily: 'Degular Variable' }}>
                  {stat.value}
                </p>
                <p className="text-base lg:w-full w-20">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-fit w-full">
            <a
              className="py-2 px-3 text-base leading-6 cursor-pointer flex gap-2 justify-center rounded"
              style={{ backgroundColor: 'black', color: 'white', textDecoration: 'none' }}
              href="/case-study/qatar-insurance-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read story
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fontSize="24px"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:flex hidden pt-1" style={{ width: '360px', height: '364px' }}>
          <img
            alt="Client image"
            loading="lazy"
            width={360}
            height={364}
            src={testimonial.image}
            className="color-transparent"
          />
        </div>
      </div>

    </div>
  );
};

export default TestimonialSlider;

