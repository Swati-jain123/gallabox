import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// Array of client logos with alt text and image URLs
const clientLogos = [
  {
    alt: "Pick you trial logo",
    src: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/pick-your-trial.png",
  },
  {
    alt: "Qatar insurance company logo",
    src: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/qic.png",
  },
  {
    alt: "Dubai housekeeping logo",
    src: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/dubai-housekeeping.png",
  },
  {
    alt: "Footprint Real Estate logo",
    src: "https://assets.gallabox.com/gb-home/new-landing/testimony/client-logos/footprint.svg",
  },
];

// ThumbnailSlider component to display a carousel of client logos
export default function ThumbnailSlider() {
  // Initializing Keen Slider with configuration for 4 slides per view and spacing of 5px
  const [sliderRef] = useKeenSlider({
    slides: { perView: 4, spacing: 5 },
  });

  return (
    // Wrapper div to contain the slider
    <div className="w-full block">
      {/* Keen Slider container */}
      <div ref={sliderRef} className="keen-slider">
        {/* Mapping through clientLogos array to render each logo inside a slider */}
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center cursor-pointer bg-white min-w-[302.5px] max-w-[302.5px]"
          >
            {/* Lazy loading images for performance optimization */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="lg:px-6 lg:py-3 flex-shrink-0"
              loading="lazy"
              width="250"
              height="102"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
