// React component for the Recognition section
const RecognitionSection = () => {
    return (
      <section className="lg:pt-14 lg:pb-24 pt-10 pb-20">
        {/* Container with responsive layout for large and small screens */}
        <div className="w-full flex lg:flex-row flex-col lg:gap-8 gap-7 lg:justify-between lg:items-center">

          {/* Left section with title and heading */}
          <div className="flex flex-col text-left mx-5 2xl:mx-[130px]">
            {/* Section label */}
            <p className="text-base font-semibold text-[#3364FA]">RECOGNITION</p>
            {/* Heading with custom font */}
            <h2 className="lg:text-6xl text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Degular Display' }}>
              <span>Highly rated <br />by industry leaders</span>
            </h2>
          </div>

          {/* Right section with rating image and award badges */}
          <div className="flex flex-col items-center lg:gap- gap-4 lg:mr-5">
            {/* Rating image */}
            <img 
              alt="rating" 
              loading="lazy" 
              width="221" 
              height="20" 
              className="color-transparent"
              src="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2Frating.png&w=640&q=75"
            />
            {/* Award badges */}
            <div className="flex lg:gap-6 gap-5">
              {[
                "best-support.png",
                "small-business-leader.png",
                "high-performer.png",
                "best-roi.png"
              ].map((image, index) => (
                <div key={index} className="lg:w-full lg:h-28 w-16 h-20">
                  {/* Dynamically loading award images */}
                  <img 
                    alt="award-logo" 
                    loading="lazy" 
                    width="100" 
                    height="120" 
                    className="color-transparent"
                    src={`https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2F${image}&w=640&q=75`}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  };

export default RecognitionSection;
