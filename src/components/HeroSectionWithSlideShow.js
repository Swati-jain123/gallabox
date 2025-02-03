import React from "react";

// HeroSection component: Main header section of the landing page
const HeroSection = () => {
  // Array of client logos to be displayed in the "Trusted by" section
  const logos = [
    "https://assets.gallabox.com/gb-home/new-landing/client-logos/pickyourtrail.svg",
    "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fclient-logos%2Ffootprint.png&w=256&q=75",
    "https://assets.gallabox.com/gb-home/new-landing/client-logos/QIC.svg",
    "https://assets.gallabox.com/gb-home/new-landing/client-logos/shiprocket.svg",
    "https://assets.gallabox.com/gb-home/new-landing/client-logos/vakil-search.svg",
    "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fclient-logos%2Fshams.png&w=96&q=75",
    "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fclient-logos%2Faecc.png&w=256&q=75",
    "https://assets.gallabox.com/gb-home/new-landing/client-logos/apollo_hospitals.svg",
    "https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fclient-logos%2Fmarg.png&w=256&q=75",
  ];

  return (
    <header className="lg:max-w-7xl lg:mx-auto px-5 w-full flex flex-col lg:py-16 pb-16 gap-16">
      {/* Main content section with text and video */}
      <div className="flex flex-col lg:flex-row lg:py-5 lg:gap-0 gap-8">
        {/* Left Section: Heading, description, and call-to-action (CTA) buttons */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start lg:gap-0 gap-4">
          {/* Main heading */}
          <h1
            className="lg:text-[60px] mt-12 lg:mt-0 lg:leading-[1.1] text-4xl text-left font-open-sans font-extrabold"
            style={{
              fontWeight: 800,
              wordBreak: "break-word", // Prevent text overflow for responsiveness
            }}
          >
            Go from <br /> leads to deals <br /> on WhatsApp
          </h1>

          {/* Supporting paragraph */}
          <p className="text-xl font-normal leading-8 lg:w-3/4 text-left lg:mt-12">
            Empower your sales and marketing teams to capture, qualify, and
            convert more leads, faster than ever before.
          </p>

          {/* Call-to-action button */}
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-6 mt-12">
            <a
              className="py-4 px-6 text-lg font-semibold leading-6 cursor-pointer flex gap-2 justify-center rounded"
              style={{ backgroundColor: "#3364FA", color: "white" }}
              href="https://app.gallabox.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try for free
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

          {/* Ratings and additional info */}
          <div className="flex items-center lg:gap-5 gap-4 lg:mt-5 mt-0">
            <div className="flex items-center gap-2">
              <img
                alt="g2 logo"
                loading="lazy"
                width="24"
                height="24"
                src="https://assets.gallabox.com/gb-home/new-landing/hero-section/g2-logo.svg"
              />
              <p className="text-sm">Rated 4.6/5 on G2</p>
            </div>
            <p className="text-sm">|</p>
            <p className="text-sm">No credit card required</p>
          </div>
        </div>

        {/* Right Section: Promotional video */}
        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
          <div className="rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://assets.gallabox.com/gb-home/new-landing/hero-section/poster.png"
              className="rounded-lg object-contain"
              style={{ maxHeight: "550px" }}
            >
              <source
                src="https://assets.gallabox.com/gb-home/new-landing/hero-section/hero-right-section.webm"
                type="video/webm"
              />
              <source
                src="https://assets.gallabox.com/gb-home/new-landing/hero-section/hero-right-section.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* "Trusted by" section */}
      <div className="w-full">
        <h3 className="text-base text-center font-normal py-2">
          Trusted by 5,000+ businesses
        </h3>

        {/* Desktop view: Scrolling client logos */}
        <div className="relative overflow-hidden w-full h-[90px] bg-white lg:block hidden">
          <div className="absolute flex animate-scroll">
            {logos.concat(logos).map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[153px] h-[90px] ml-12"
              >
                <img alt={`client-logo-${index}`} src={src} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view: Grid of client logos */}
        <div className="lg:hidden grid grid-cols-2 gap-6 justify-center items-center">
          {logos.slice(0, 8).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-solid border-gray-200 px-3 py-2 rounded"
              style={{ height: "88px" }}
            >
              <img alt="img" loading="lazy" src={logo} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
