import React from 'react';

const IntegrationSection = () => {
  const logos = [
    "https://assets.gallabox.com/gb-home/integration-component-logos/razorpay.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/shopify.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/hubspot.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/zapier.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/zoho2.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/leadsquare.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/facebook.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/woocommerce.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/kylas.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/shiprocket.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/googlesheets.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/cashfree.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/payu.png",
    "https://assets.gallabox.com/gb-home/integration-component-logos/webengage.png",
  ];

  return (
    <section className="lg:py-20 py-10" style={{ background: 'linear-gradient(103deg, #EDF4FF 28.71%, #D2DDFF 84.45%, #84A2FF 136.43%)' }}>
      <div className="lg:max-w-7xl lg:mx-auto px-5 w-full flex flex-col lg:gap-20 gap-6">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-10">
          <div className="lg:w-1/2 w-full lg:py-0 py-5">
            <h2 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-5 text-left" style={{ fontFamily: 'Degular Display' }}>
              Connect your favorite tools. In a few clicks.
            </h2>
            <a
              className="text-xl font-medium flex gap-2 w-fit"
              style={{ color: '#3364FA' }}
              target="_blank"
              href="/whatsapp-integrations"
              rel="noreferrer"
            >
              View all Integrations
            </a>
          </div>
          <div className="lg:w-1/2 lg:flex hidden lg:items-center lg:justify-center" style={{ height: '163px' }}>
            <img
              alt="whatsapp icon"
              loading="lazy"
              width="500"
              height="163"
              decoding="async"
              srcSet="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fintegration%2Fintegration.png&w=640&q=75 1x"
            />
          </div>
        </div>
      </div>
      
      {/* Desktop view: Scrolling client logos */}
      <div className="relative overflow-hidden w-full h-[90px] lg:mt-[70px]">
      <div className="absolute flex animate-scroll-slow">
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
    </section>
  );
};

export default IntegrationSection;