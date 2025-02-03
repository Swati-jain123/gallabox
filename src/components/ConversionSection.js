import React from "react"; // Import React to create the functional component

/**
 * ConversionSection Component
 * 
 * This component represents a section of a webpage highlighting 
 * the challenges faced in driving conversions at scale. It also 
 * provides a solution-focused call-to-action for businesses.
 * It uses Tailwind CSS for styling and responsive design.
 */
const ConversionSection = () => {
  /**
   * Array of card objects, each representing a challenge.
   * Contains the image source, alt text, and description text.
   */
  const cards = [
    {
      imgAlt: "down-trend", // Alt text for accessibility
      imgSrc: "https://assets.gallabox.com/gb-home/new-landing/spotlight/down-trend.svg", // Image source URL
      text: "Prospects drop off because the lead verification process is manual, lengthy, and chaotic.", // Description text
    },
    {
      imgAlt: "sand-timer", // Alt text for accessibility
      imgSrc: "https://assets.gallabox.com/gb-home/new-landing/spotlight/sand-timer.svg", // Image source URL
      text: "Your team ends up wasting time on qualifying leads with repetitive questions instead of driving sales.", // Description text
    },
    {
      imgAlt: "broken-chain", // Alt text for accessibility
      imgSrc: "https://assets.gallabox.com/gb-home/new-landing/spotlight/broken-chain.svg", // Image source URL
      text: "Leads and conversations are not tracked 24/7 as they lie scattered across multiple channels.", // Description text
    },
  ];

  return (
    <div>
      {/* Section Container: Highlights challenges and their impact */}
      <section className="lg:py-20 py-14" style={{ backgroundColor: "#E6EEFF" }}>
        {/* Content Wrapper: Contains heading and cards */}
        <div className="lg:max-w-7xl lg:mx-auto px-5 w-full flex flex-col gap-12">
          {/* Main Heading for the Challenges Section */}
          <h2
            className="lg:text-5xl text-3xl font-semibold text-gray-900 lg:max-w-4xl text-left"
            style={{ fontFamily: "Schibsted Grotesk,Arial" }}
          >
            Calls, emails, and SMS are not enough to drive conversions at scale
          </h2>

          {/* Cards: Display key challenges in a responsive layout */}
          <div className="flex flex-col lg:flex-row gap-5">
            {cards.map((card, index) => (
              /**
               * Individual Card: Represents a specific challenge with an image and text
               */
              <div
                key={index} // Unique key for each card to avoid React warnings
                className="lg:w-1/3 w-full bg-white rounded-lg p-6 flex flex-col gap-6 items-start"
              >
                {/* Challenge Icon */}
                <img
                  alt={card.imgAlt} // Alt text for better accessibility
                  src={card.imgSrc} // Image source URL
                  loading="lazy" // Lazy loading for performance optimization
                  width="84" // Image width
                  height="84" // Image height
                  decoding="async" // Async decoding for better page rendering
                  style={{ color: "transparent" }} // Ensures a clean transparent background
                />
                {/* Challenge Description */}
                <p className="text-xl font-normal">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <div className="flex flex-col lg:w-4/5 w-auto lg:mx-auto text-left mt-12 mx-5">
  {/* Solution Heading */}
  <h2
    className="lg:text-5xl text-3xl font-semibold text-gray-900"
    style={{ fontFamily: "Degular Display,Arial" }}
  >
    Leverage Gallabox’s AI-powered{" "}
    <span className="hidden lg:block"></span> {/* Adds a line break for large screens */}
    messaging and automation platform
  </h2>
  {/* Solution Subheading */}
  <h3 className="lg:text-2xl text-lg font-medium mt-8 mb-12">
    To convert the curious into customers on WhatsApp.
  </h3>
</div>

    </div>
  );
};

export default ConversionSection; // Export the component for use in other parts of the application
