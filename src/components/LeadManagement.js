import React from "react";

const LeadManagement = () => {
  // Features array containing details for each lead management feature
  const features = [
    {
      title: "Lead capturing",
      subtitle: "Collect verified leads without friction",
      description1: "Ditch those annoying lead forms that cause user drop-offs.",
      description2:"Use Click-to-WhatsApp ads and widgets to drive prospects straight to your WhatsApp business account to make the most of your traffic; get verified numbers without a complicated user experience.",
      buttonText: "Know more",
      buttonLink: "https://gallabox.com/click-to-whatsapp-ads",
      videoSrc: "https://assets.gallabox.com/gb-home/new-landing/key-feature/lead_capturing.webm",
      bgColor: "bg-[#F2FFEA]",
    },
    {
      title: "Lead qualification",
      subtitle: "Use AI chatbots to instantly filter prime prospects",
      description1: "Quit wasting your sales team’s time on low-intent leads.",
      description2:"Build no-code AI chatbots to ask the right questions, collect essential lead info, and then route the prospects to the appropriate agent or sales rep — all on WhatsApp.",
      buttonText: "Know more",
      buttonLink: "https://gallabox.com/whatsapp-chatbot",
      videoSrc: "https://assets.gallabox.com/gb-home/new-landing/key-feature/lead_qualification.webm",
      bgColor: "bg-[#F5EEFF]",
    },
    {
      title: "Lead nurturing",
      subtitle: "Run multi-touch WhatsApp campaigns to create new pipeline",
      description1: "Don’t turn away prospects who may be potential buyers.",
      description2:"Keep your prospects engaged with broadcast and sequence campaigns for every buyer segment. Make your campaigns stand out with interactive buttons, rich media and contextual auto-replies.",
      buttonText: "Know more",
      buttonLink: "https://gallabox.com/whatsapp-broadcast",
      videoSrc: "https://assets.gallabox.com/gb-home/new-landing/key-feature/lead_nurturing.webm",
      bgColor: "bg-[#FFFADF]",
    },
    {
      title: "Lead conversion",
      subtitle: "Close deals faster with full visibility and context",
      description1: "Never lose track of a prospect or customer message.",
      description2:"Enable your sales team to access every WhatsApp conversation in a shared team inbox — with all context intact. Reduce sales cycles with quick responses (and in multiple languages) using Gallabox Gen AI and help them hit your targets every month.",
      buttonText: "Know more",
      buttonLink: "https://gallabox.com/whatsapp-shared-inbox",
      videoSrc: "https://assets.gallabox.com/gb-home/new-landing/key-feature/lead_conversion.webm",
      bgColor: "bg-[#E1FCFF]",
    },
  ];

  return (
    <div>
      
      {/* Section visible on large screens */}
      <div
        className="hidden lg:flex relative mt-[0px] "
        
      >
        {/* Left side: Text content */}
        <div className="w-1/2 hidden lg:block text-left ml-[150px]">
          {features.map((feature, index) => (
            <div key={index} className="h-screen flex flex-col justify-center">
              <h6
                className="text-base font-medium uppercase mb-2 text-left"
                style={{ color: "#3364FA" }}
              >
                {feature.title}
              </h6>
              <h3
                className="text-5xl font-semibold"
                style={{ fontFamily: "Degular Display" }}
              >
                {feature.subtitle}
              </h3>
              <p className="text-xl mt-9">{feature.description1}</p>
              <p className="text-xl mt-4 mb-6">{feature.description2}</p>
              <div className="py-3 w-fit">
                <a
                  href={feature.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 text-base leading-6 cursor-pointer flex gap-2 justify-center rounded"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {feature.buttonText}
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
                    <path d="M7 17L17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Video content */}
        <div className="w-1/2 relative mx-[70px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`box sticky -top-[20%] z-0 ${feature.bgColor} h-screen flex items-center justify-center rounded-lg `}
            >
              <video
                src={feature.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="h-[80vh] object-contain rounded-lg "
              ></video>
            </div>
          ))}
        </div>
      </div>

      {/* Section visible on small screens */}
      <div className="lg:hidden block overflow-hidden">
        <div className="w-auto flex flex-col gap-12 pt-5 pb-10 justify-center items-center text-left mx-5">
          {features.map((feature, index) => (
            <div key={index} className="w-full flex flex-col">
              {/* Text content */}
              <div className="w-full flex flex-col ">
                <h6
                  className="text-base font-medium uppercase mb-2"
                  style={{ color: "#3364FA" }}
                >
                  {feature.title}
                </h6>
                <h3
                  className="text-3xl font-semibold text-gray-900"
                  style={{ fontFamily: "Degular Display" }}
                >
                  {feature.subtitle}
                </h3>
                <p className="text-xl mt-6" style={{ letterSpacing: "0.4px" }}>
                  {feature.description1}
                </p>
                <p className="text-xl my-3" style={{ letterSpacing: "0.4px" }}>
                  {feature.description2}
                </p>
                <div className="py-3 w-fit">
                  <a
                    href={feature.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-base leading-6 cursor-pointer flex gap-2 justify-center rounded"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {feature.buttonText}
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
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Video content */}
              <div
                className={`w-full mx-4 flex items-center mt-5 justify-center px-7 py-8 rounded-lg ${feature.bgColor}`}
              >
                <video
                  autoPlay
                  loop
                  muted
                  className="rounded-lg object-cover overflow-hidden"
                >
                  <source src={feature.videoSrc} type="video/webm" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;