import React, { useState } from 'react';

const Footer = () => {
  // State to manage open/close of mobile dropdowns
  const [openMenus, setOpenMenus] = useState({});

  // Function to toggle a menu
  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Data for mobile dropdowns
  const mobileMenuItems = {
    Features: ['WhatsApp Flows', 'WhatsApp AI Chatbot', 'WhatsApp Shop', 'WhatsApp Business API', 'WhatsApp Chatbot', 'WhatsApp Broadcast', 'Click to WhatsApp Ads', 'Shared Team Inbox', 'Drip Marketing', 'WhatsApp Payments'],
    Integration: ['Calendly', 'Zoho CRM', 'LeadSquared', 'Odoo', 'MoEngage', 'Shopify', 'Zapier', 'Hubspot', 'RazorPay', 'Google Sheets'],
    Industry: ['Education', 'Travel', 'Real Estate', 'Finance', 'Healthcare', 'ecommerce'],
    Compare: ['with Wati', 'with Aisensy', 'with Rasayel', 'with Zoko', 'with Verloop', 'with Interakt', 'with Infobip', 'with GetChat'],
    Resources: ['Documentation', 'Developer APIs', 'Blog', 'eBooks', 'Videos', 'Case Study', 'How-To Guides'],
    Company: ['About', 'Customers', 'Careers', 'Contact Us', 'Partner with us'],
    Support: ['FAQ', 'Raise a ticket'],
  };

  return (
    <footer className="bg-black text-gray-100">
      {/* Top Section */}
      <div style={{ background: 'linear-gradient(90deg, #0E1018 0%, #282A30 100%)' }} className="w-full">
        <div className="lg:max-w-7xl lg:mx-auto px-5 w-full flex lg:flex-row flex-col items-center justify-center lg:gap-14 gap-3 text-xl font-medium text-white lg:py-4 py-5">
          <div style={{ height: '20px' }}>
            <img alt="meta partner logo" loading="lazy" width="220" height="20" decoding="async" style={{ color: 'transparent' }} src="https://assets.gallabox.com/gb-home/new-landing/footer/meta-partner-light.svg" />
          </div>
          <p style={{ height: '26px' }} className="lg:block hidden">|</p>
          <p style={{ height: '20px' }} className="lg:text-xl text-sm">Powered by WhatsApp Business API</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="hidden lg:block 2xl:max-w-[1300px] lg:mx-auto px-5 w-full pt-20 pb-12">
        <div className="flex flex-col gap-16">
          <div className="w-full flex flex-row gap-5">
            {/* Features */}
            <div className="flex flex-col gap-5 w-1/3">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Features</h6>
              <div className="flex flex-col gap-4 pb-6">
                {mobileMenuItems.Features.map((feature, index) => (
                  <a key={index} className="text-[16px] hover:underline cursor-pointer text-gray-400 text-left" href={`/${feature.toLowerCase().replace(/ /g, '-')}`}>{feature}</a>
                ))}
              </div>
            </div>

            {/* Integration */}
            <div className="flex flex-col gap-5 w-1/4">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Integration</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Integration.map((integration, index) => (
                  <a key={index} className="text-[16px] hover:underline cursor-pointer text-gray-400" href={`/${integration.toLowerCase().replace(/ /g, '-')}`}>
                    {integration}
                    {['Calendly', 'Zoho CRM', 'Odoo'].includes(integration) && <span className="text-xs ml-3 px-2 py-1 rounded-2xl text-white font-semibold" style={{ background: '#3364FA' }}>NEW</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="flex flex-col gap-5 w-1/4">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Industry</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Industry.map((industry, index) => (
                  <a key={index} className="text-[16px] hover:underline cursor-pointer text-gray-400" href={`/${industry.toLowerCase().replace(/ /g, '-')}`}>
                    {industry}
                    {industry === 'Real Estate' && <span className="text-xs ml-3 px-2 py-1 rounded-2xl text-white font-semibold" style={{ background: '#3364FA' }}>NEW</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Compare */}
            <div className="flex flex-col gap-5 w-1/4">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Compare</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Compare.map((compare, index) => (
                  <a key={index} className="text-[16px] hover:underline cursor-pointer text-gray-400" href={`/${compare.toLowerCase().replace(/ /g, '-')}`}>{compare}</a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-5 w-1/4">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Resources</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Resources.map((resource, index) => (
                  <a key={index} className="text-[16px] hover:underline cursor-pointer text-gray-400" href={`/${resource.toLowerCase().replace(/ /g, '-')}`} target="_blank" rel="noreferrer">{resource}</a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-5 w-1/4">
              <h6 className="text-[16px] text-gray-100 font-semibold text-left">Company</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Company.map((company, index) => (
                  <a key={index} className="text-[16px] cursor-pointer text-gray-400 hover:underline" href={`/${company.toLowerCase().replace(/ /g, '-')}`}>
                    {company}
                    {company === 'Partner with us' && <span className="text-xs ml-3 px-2 py-1 rounded-2xl text-white font-semibold" style={{ background: '#3364FA' }}>NEW</span>}
                  </a>
                ))}
              </div>
              <h6 className="text-xl text-gray-100 font-semibold text-left">Support</h6>
              <div className="flex flex-col gap-4 pb-6 text-left">
                {mobileMenuItems.Support.map((support, index) => (
                  <a key={index} className="cursor-pointer text-gray-400" href={`/${support.toLowerCase().replace(/ /g, '-')}`} target="_blank" rel="noreferrer">{support}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="lg:hidden flex flex-col w-full">
        {/* Mobile Accordion Menus */}
        {Object.keys(mobileMenuItems).map((menu, index) => (
          <div key={index} className="tab w-full overflow-hidden px-7 py-4 border-b border-solid border-gray-800">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleMenu(menu)}
            >
              <h6 className="text-lg font-semibold text-white">{menu}</h6>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="white"
                className={`expand-toggle-icon transition-transform ${openMenus[menu] ? 'rotate-45' : ''}`}
                style={{ color: 'white' }}
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
              </svg>
            </div>
            <div
              className={`tab-content overflow-hidden transition-all duration-300 ${openMenus[menu] ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="flex flex-col gap-7 text-sm py-4">
                {mobileMenuItems[menu].map((item, idx) => (
                  <a key={idx} className="text-[15px] hover:underline cursor-pointer text-gray-400 text-left" href={`/${item.toLowerCase().replace(/ /g, '-')}`}>
                    {item}
                    {['Calendly', 'Zoho CRM', 'Odoo', 'Real Estate', 'Partner with us'].includes(item) && (
                      <span className="text-xs ml-3 px-2 py-1 rounded-2xl text-white font-semibold" style={{ background: '#3364FA' }}>NEW</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* Download App Section */}
<div className="2xl:max-w-[1300px] lg:mx-auto px-5 w-full border-b border-solid border-gray-700 flex lg:justify-between lg:flex-row flex-col gap-20 lg:pt-0 pt-16 lg:pb-20 pb-16">
  <div className="w-64 flex flex-col text-inherit text-sm">
    <h6 className="my-0 font-medium tracking-wider text-2xl text-left">Download the App</h6>
    <div className="flex items-center justify-center lg:justify-start">
      <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/gallabox/id1542957177">
        <img
          alt="Download on the App Store"
          loading="lazy"
          decoding="async"
          width="300px"
          height="100%"
          style={{ color: 'transparent' }}
          src="https://gallabox.com/appstore-badge.svg"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.mangoleap.gallabox&amp;utm_source=Landing%20Page" className="ml-2">
        <img
          alt="Get it on Google Play"
          loading="lazy"
          width="350px"
          height="100%"
          decoding="async"
          style={{ color: 'transparent' }}
          src="https://gallabox.com/_next/image?url=https%3A%2F%2Fplay.google.com%2Fintl%2Fen_us%2Fbadges%2Fstatic%2Fimages%2Fbadges%2Fen_badge_web_generic.png&w=384&q=75"
        />
      </a>
    </div>
  </div>



        {/* Connect with Us Section */}
        <div className="flex flex-col justify-start gap-3">
  <h6 className="my-0 font-semibold tracking-wider text-2xl leading-5 text-left">Connect with us</h6>
  <div className="flex gap-4 text-transparent text-gray-400">
    {['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube', 'WhatsApp'].map((social, index) => (
      <a key={index} target="_blank" rel="noreferrer" href={`https://www.${social.toLowerCase()}.com/gallabox`} aria-label={social}>
        <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 448 512" height="36" width="36" xmlns="http://www.w3.org/2000/svg">
          {social === 'Facebook' && (
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          )}
          {social === 'Instagram' && (
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          )}
          {social === 'Twitter' && (
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.27-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-40.286 60.943-69.926 83.806 53.041 63.675 128.7 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-40.286 60.943-69.926 83.806z"></path>
          )}
          {social === 'Linkedin' && (
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.3 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          )}
          {social === 'Youtube' && (
            <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path>
          )}
          {social === 'WhatsApp' && (
            <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
          )}
        </svg>
      </a>
    ))}
  </div>
</div>
</div>

      {/* Gallabox Logo Section */}
      <h2 style={{ fontFamily: 'Degular Display' }} className="lg:hidden block text-7xl font-bold text-white text-center py-10">Gallabox</h2>
      <div className="lg:block hidden 2xl:max-w-[1300px] lg:mx-auto px-5 w-full py-20">
        <img alt="gallabox" loading="lazy" decoding="async" style={{ color: 'transparent' }}src="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Ffooter%2Fgallabox-name.png&w=3840&q=75" />
      </div>

      {/* Bottom Section */}
      <div style={{ backgroundColor: '#0E1018' }} className="py-6">
        <div className="2xl:max-w-[1300px] lg:mx-auto px-5 w-full flex lg:justify-between lg:flex-row flex-col gap-4">
          <span className="text-white text-[13px] lg:text-[18px] tracking-wide lg:text-left text-center lg:w-full w-64 lg:mx-0 mx-auto">© 2025 Gallabox Global Inc. All rights reserved.</span>
          <div className="w-full flex flex-row gap-5 text-[13px] lg:text-[18px] text-gray-200 lg:justify-end justify-center">
            {['Cookie Policy', 'Privacy Policy', 'Terms & Conditions'].map((policy, index) => (
              <a key={index} target="_blank" rel="noreferrer" href={`/${policy.toLowerCase().replace(/ /g, '-')}`}>{policy}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
