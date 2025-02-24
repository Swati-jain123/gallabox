import React, { useState } from "react";
// ResponsiveHeader Component
// Renders a header that adapts to screen size with menu and dropdown functionality
const ResponsiveHeader = () => {
  // State to manage whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the currently active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);
  // Toggles the menu open/closed state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Dropdown data for the header menu is defined here.
  const dropdownOptions = {
    // Features dropdown data
    Features: [
      {
        name: "WhatsApp Flows",
        description:
          "Facilitate Meaningful Customer Interactions with WhatsApp Flows",
        icon: "https://gallabox.com/nav-icons/whatsapp-flows.svg",
        href: "https://gallabox.com/whatsapp-flows",
        isNew: true, // Indicates if this option is a new feature
      },
      {
        name: "Gallabox Gen AI",
        description: "Harness the power of AI within WhatsApp",
        icon: "https://gallabox.com/nav-icons/ai.svg",
        href: "https://gallabox.com/whatsapp-ai-chatbot",
        isNew: true,
      },
      {
        icon: "https://gallabox.com/nav-icons/API.svg",
        name: "WhatsApp Business API",
        description: "Reach customers on their preferred messaging channel",
        href: "https://gallabox.com/whatsapp-business-api",
      },
      {
        icon: "https://gallabox.com/nav-icons/Inbox.svg",
        alt: "Shared Team Inbox icon",
        name: "Shared Team Inbox",
        description: "Collaborate with team members effectively",
        href: "https://gallabox.com/whatsapp-shared-inbox",
      },
      {
        icon: "https://gallabox.com/nav-icons/Bot.svg",
        name: "WhatsApp Chatbot",
        description: "Scale customer experiences, not your team size",
        href: "https://gallabox.com/whatsapp-chatbot",
        isNew: true,
      },
      {
        icon: "https://gallabox.com/nav-icons/Drip-Marketing.svg",
        name: "Drip Marketing",
        description: "Send sequence of messages at intervals on WhatsApp",
        href: "https://gallabox.com/whatsapp-drip-marketing",
      },

      {
        icon: "https://gallabox.com/nav-icons/Broadcast.svg",
        name: "WhatsApp Broadcast",
        description: "Launch marketing campaigns at scale",
        href: "https://gallabox.com/whatsapp-broadcast",
      },
      {
        icon: "https://gallabox.com/nav-icons/wa-ads.svg",
        name: "Click to WhatsApp Ads",
        description: "Convert leads to deals using CTWA",
        href: "https://gallabox.com/click-to-whatsapp-ads",
      },
      {
        icon: "https://gallabox.com/nav-icons/payments.svg",
        name: "WhatsApp Payments",
        description: "Automate payment collections on WhatsApp",
        href: "https://gallabox.com/whatsapp-payments",
      },
      {
        icon: "https://gallabox.com/nav-icons/catalogs.svg",
        name: "WhatsApp Shop",
        description:
          "Setup Product Catalogs and start selling on WhatsApp in no time",
        href: "https://gallabox.com/build-your-shop-on-whatsapp",
        isNew: true,
      },
    ],
    // Industries dropdown data
    Industries: [
      {
        icon: "https://gallabox.com/nav-icons/Education.svg",
        name: "Education",
        description: "Real-time communication solutions for better learning",
      },
      {
        icon: "https://gallabox.com/nav-icons/Real-Estate.svg",
        name: "Real Estate",
        description: "Recommend, promote and showcase listings more..",
        isNew: true,
      },
      {
        icon: "https://gallabox.com/nav-icons/Travel.svg",
        name: "Travel",
        description: "Boost travel agency bookings on WhatsApp",
      },
      {
        icon: "https://gallabox.com/nav-icons/E-commerce.svg",
        name: "E-commerce",
        description:
          "Engaging customers in real-time and creating interactive..",
      },
      {
        icon: "https://gallabox.com/nav-icons/BFSI.svg",
        name: "BFSI",
        description:
          "Secure customer support & sales solutions for your business",
      },
      {
        icon: "https://gallabox.com/nav-icons/healthcare.svg",
        name: "Healthcare",
        description: "Automate and manage appointment bookings efficiently",
      },
    ],
    // Integrations dropdown dATA
    Integrations: [
      {
        icon: "https://gallabox.com/nav-icons/odoo.svg",
        name: "Odoo",
        description: "Connect Odoo with Your WhatsApp Automation Platform",
        isNew: true,
      },
      {
        icon: "https://gallabox.com/nav-icons/Zoho.svg",
        name: "Zoho",
        description:
          "Engage your Zoho contacts more efficiently with WhatsApp workflows.",
      },

      {
        icon: "https://gallabox.com/nav-icons/hubspot-icon.svg",
        name: "Hubspot",
        description:
          "Unify communication by integrating HubSpot with your WhatsApp Business account",
      },
      {
        icon: "https://gallabox.com/nav-icons/Razorpay.svg",
        name: "Razorpay",
        description:
          "Close deals faster by making payments on WhatsApp easy with Razorpay",
      },
      {
        icon: "https://gallabox.com/nav-icons/zoho-books.svg",
        name: "Zoho Books",
        description:
          "Speed Up Your Payment Collection by Automating Zoho Book Workflows",
      },
    ],
    // Resources dropdown data
    Resources: [
      {
        icon: "https://gallabox.com/nav-icons/blog.svg",
        name: "Blog",
        description: "Reach customer on their preferred messaging channel",
      },
      {
        icon: "https://gallabox.com/nav-icons/docs.svg",
        name: "Docs",
        description:
          "A quick overview of Gallabox to help you understand & automate your business",
      },

      {
        icon: "https://gallabox.com/nav-icons/Bot-Template.svg",
        name: "Bot Templates",
        description: "Build no-code bots to serve customers 24/7",
      },
      {
        icon: "https://gallabox.com/nav-icons/Case-Study.svg",
        name: "Case studies",
        description:
          "Learn how Gallabox is helping businesses meet business goals",
      },
      {
        icon: "https://gallabox.com/nav-icons/Case-Study.svg",
        name: "Ebooks",
        description: "Your one-stop shop for all deep dives",
      },
      {
        icon: "https://gallabox.com/nav-icons/how-to-guide.svg",
        name: "How-To Guides",
        description:
          "A step-by-step resource to master essential tasks effortlessly.",
      },
      {
        icon: "https://gallabox.com/nav-icons/WhatsAppMessageTemplateGenerator.svg",
        name: "Whatsapp message templates",
        description: "500 Free messages by industry and use case",
      },
    ],
    // Free Tools Dropdown data
    "Free Tools": [
      {
        icon: "https://gallabox.com/nav-icons/free-tool-menu/ai-template-generator.svg",
        name: "AI Template Generator",
        description: "Create AI-generated templates with a text prompt",
      },
      {
        icon: "https://gallabox.com/nav-icons/free-tool-menu/chat-widget.svg ",
        name: "Chat Widget",
        description:
          "Add a chat button to your website so visitors can connect",
      },
      {
        icon: "https://gallabox.com/nav-icons/free-tool-menu/link-generator.svg",
        name: "Link Generator",
        description:
          "Connect with Your Customers Instantly Using WhatsApp Links",
      },
      {
        icon: "https://gallabox.com/nav-icons/free-tool-menu/qr-code.svg",
        name: "QR Code",
        description:
          "Get More Leads and Sales with a WhatsApp QR Code Generator",
      },
      {
        icon: "https://gallabox.com/nav-icons/free-tool-menu/wa-pricing-calci.svg",
        name: "Pricing Calculator",
        description: "Estimate your WhatsApp messaging cost for free",
      },
    ],
    // Partners dropdown data
    Partners: [
      {
        icon: "https://gallabox.com/nav-icons/Reseller.svg",
        name: "Become a Partner",
        description: "Amplify your earning potential with Gallabox",
      },
      {
        icon: "https://gallabox.com//nav-icons/Partner.svg",
        name: "Become an Affiliate",
        description:
          "A quick overview of Gallabox to help you understand & automate your business",
      },
    ],

    // Add other dropdown items similarly
  };
  // function for dropdown
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed z-50 w-full">
      {/* Container for navigation content */}
      <div className="mx-auto flex justify-between p-4 lg:flex-row 2xl:mx-[150px]">
        {/* Gallabox Logo  Left side*/}
        <a href="#" className="flex items-center mb-4 lg:mb-0">
          <img
            src="https://gallabox.com/gallabox-logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-0 text-gray-500 rounded-lg lg:hidden focus:outline-none mt-[-10px]"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {/* Screen reader text for accessibility */}
          <span className="sr-only">Open main menu</span>
          {/* Conditional rendering of menu icon based on state */}
          {isMenuOpen ? (
            // Close icon
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger menu icon
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center justify-center space-x-4 2xl:space-x-4">
          {/* Dynamic rendering of top-level menu items */}
          {[
            "Features",
            "Industries",
            "Integrations",
            "Resources",
            "Free Tools",
            "Partners",
          ].map((menu, index) => (
            <div
              key={index}
              className="relative group"
              // open dropdown on hover
              onMouseEnter={() => toggleDropdown(menu)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              {/* Top-level menu button */}
              <button className="text-gray-700 font-medium text-[14px] 2xl:text-[14px] dark:text-white flex items-center">
                {menu}
                {/* Downward arrow icon */}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {activeDropdown === menu && (
                <ul // use different layout for free tools and partners dropdown (according to website)
                  className={`absolute left-0 mt-2 ${
                    menu === "Free Tools" || menu === "Partners"
                      ? "w-[300px]" // Reduced width for Free Tools and Partners
                      : "w-[600px]" // Reduced width for other menus
                  } bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 group-hover:block hidden`}
                >
                  <div
                    className={`grid ${
                      menu === "Free Tools" || menu === "Partners"
                        ? "grid-cols-1"
                        : "grid-cols-2"
                    } gap-2 p-4`}
                  >
                    {/* Render dropdown options dynamically */}
                    {dropdownOptions[menu]?.map((option, index) => (
                      <div key={index}>
                        <ul>
                          <li>
                            <div className="mt-2">
                              {/* Dropdown option link */}
                              <a
                                href={option.href}
                                className="block text-gray-700 hover:bg-gray-100 px-2 py-0 rounded dark:text-gray-200 dark:hover:bg-gray-700"
                              >
                                <div className="flex items-center">
                                  {/* Option icon */}
                                  <img
                                    src={option.icon}
                                    alt={`${option.name} Logo`}
                                    className="w-8 h-8 mr-2"
                                  />
                                  <span className="font-medium text-[16px]">
                                    {/* Option name */}
                                    {option.name}
                                  </span>
                                  {/* Badge for new options */}
                                  {option.isNew && (
                                    <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5">
                                      New
                                    </span>
                                  )}
                                </div>
                              </a>
                              {/* Option description */}

                              <p className="ml-[50px] text-left text-[12px] leading-relaxed text-gray-600 dark:text-gray-400 whitespace-normal">
                                {option.description}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* Right Side Links */}
        <div className="hidden lg:flex items-center space-x-6 ">
          {/* Pricing Link */}

          <a
            href="#"
            className="text-gray-700 hover:underline dark:text-white text-[14px] 2xl:text-[16px] font-medium"
          >
            Pricing
          </a>
          {/* Contact Link */}
          <a
            href="#"
            className="text-gray-700 dark:text-white text-[14px] 2xl:text-[16px] font-medium"
          >
            Login
          </a>
          {/* Call to Action Button */}
          <a
            href="#"
            className="px-2 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-[14px] 2xl:text-[16px] font-medium"
          >
            Start Free Trial
          </a>
        </div>
      </div>

      {/* Mobile Menu (Header for small screen)*/}
      {isMenuOpen && (
        <div
          className="lg:hidden bg-white border-t border-gray-200 dark:border-gray-700 h-screen overflow-y-auto "
          id="mobile-menu"
        >
          <ul className="space-y-2 p-4">
            {[
              "Features",
              "Industries",
              "Integrations",
              "Resources",
              "Free Tools",
              "Partners",
            ].map((menu, index, array) => (
              <li
                key={index}
                className={`relative ${
                  index !== array.length
                    ? "border-b border-gray-200 dark:border-gray-700"
                    : ""
                }`}
              >
                {/* Main Button */}
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex justify-between  items-center w-full py-2 px-2 text-black text-xl font-medium"
                >
                  {menu}
                  {/* Toggle Arrow */}
                  {/* Single Arrow Icon with Rotation Animation */}
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-400 ${
                      activeDropdown === menu ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7" // Up to Down Arrow
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                {activeDropdown === menu && dropdownOptions[menu] && (
                  <ul className="mt-2 space-y-4 ">
                    {dropdownOptions[menu]?.map((option, optionIndex) => (
                      <li className="bg-[#F6FAFD] p-4 rounded-lg flex space-x-4 ">
                        {/* Logo */}
                        <img
                          src={option.icon}
                          alt={`${option.name} Logo`}
                          className="w-12 h-12 object-contain"
                        />

                        {/* Content */}
                        <div className="flex flex-col">
                          {/* Name and Badge */}
                          <div className="flex items-center text space-x-2">
                            <span className="text-base font-semibold text-gray-800 dark:text-white">
                              {option.name}
                            </span>
                            <div>
                              {option.isNew && (
                                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5">
                                  New
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="tracking-tigher text-left text-[15px] text-gray-600 dark:text-gray-400 mt-1 whitespace-normal ">
                            {option.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* Pricing Anchor Tag */}
          <div className="px-4 ml-2">
            <a
              href="#pricing"
              className="block py-2 text-left text-black dark:text-white text-xl font-medium font-mediumrounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Pricing
            </a>
          </div>

          {/* Horizontal Buttons */}
          <div className="mt-4 flex justify-left items-center space-x-4 px-4">
            <a
              href="#login"
              className="py-2 px-12 bg-gray-100 text-xl text-gray-500 font-medium rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Login
            </a>
            <a
              href="#start-free-trial"
              className="py-2 px-4 bg-blue-500 text-xl text-white font-medium rounded hover:bg-blue-600"
            >
              Start Free Trial
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 py-4">
            {/* Footer Text */}
            <span className="text-gray-400 text-xs tracking-wide text-center">
              © 2025 Gallabox Inc. All rights reserved.
            </span>

            {/* Robot GIF */}
            <img
              alt="robot gif"
              loading="lazy"
              width="66"
              height="66"
              decoding="async"
              srcSet="https://assets.gallabox.com/gb-home/footer_robot.gif?w=96&q=75 1x, https://assets.gallabox.com/gb-home/footer_robot.gif?w=256&q=75 2x"
              src="https://assets.gallabox.com/gb-home/footer_robot.gif?w=256&q=75"
              className="w-[66px] h-[66px]"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveHeader;
