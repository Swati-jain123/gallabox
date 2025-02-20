export default function FooterHeroSection() {
    return (
      <section
        className="lg:py-20 py-10"
        style={{
          background:
            "linear-gradient(101deg, #102565 -0.21%, #0A3FE7 38.51%, #0A3FE7 59.13%, #010E36 99.99%)",
        }}
      >
        <div className="lg:mx-auto w-full flex flex-col">
          <div className="lg:mb-24 mb-16 text-left mx-5 2xl:ml-[130px]">
            <h2 className="lg:text-6xl text-4xl font-semibold text-white lg:mb-6 mb-7" style={{ fontFamily: "Degular Display" }}>
              Turn connections into conversions
            </h2>
            <p className="text-lg text-white lg:mb-9 mb-7">
              Be among the first to ride the WhatsApp automation wave
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-6">
              <a
                className="py-4 px-6 text-lg font-semibold leading-6 cursor-pointer flex gap-2 justify-center rounded bg-black text-white"
                href="https://app.gallabox.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start for free
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
          <div className="flex lg:flex-row flex-col lg:gap-14 gap-12 2xl:ml-[130px]">
            <StatCard value="200M+" label="Conversations powered" />
            <StatCard value="40M+" label="Chatbot-driven conversations" />
            <StatCard value="20K+" label="Global active users" />
          </div>
        </div>
      </section>
    );
  }
  
  function StatCard({ value, label }) {
    return (
      <div className="text-white flex flex-col lg:gap-6 gap-5 lg:w-1/3 w-auto text-left mx-5">
        <p className="text-6xl font-bold md:text-8xl" style={{ fontFamily: "Degular Variable" }}>
          {value}
        </p>
        <p className="text-xl">{label}</p>
      </div>
    );
  }
  