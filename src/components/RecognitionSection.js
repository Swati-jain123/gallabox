// const RecognitionSection = () => {
//     return (
//       <section className="lg:pt-14 lg:pb-24 pt-10 pb-20">
//         <div className="lg:max-w-7xl lg:mx-auto px-5 w-full flex lg:flex-row flex-col lg:gap-8 gap-7 lg:justify-between lg:items-center">
//           <div className="flex flex-col">
//             <p className="text-base font-semibold text-[#3364FA]">RECOGNITION</p>
//             <h2 className="lg:text-6xl text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Degular Display' }}>
//               <span>Highly rated <br />by industry leaders</span>
//             </h2>
//           </div>
//           <div className="flex flex-col items-center lg:gap-6 gap-4">
//             <img 
//               alt="rating" 
//               loading="lazy" 
//               width="221" 
//               height="20" 
//               className="color-transparent"
//               srcSet="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2Frating.png&w=640&q=75"
//               src="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2Frating.png&w=640&q=75"
//             />
//             <div className="flex lg:gap-6 gap-5">
//               {[
//                 "best-support.png",
//                 "small-business-leader.png",
//                 "high-performer.png",
//                 "best-roi.png"
//               ].map((image, index) => (
//                 <div key={index} className="lg:w-full lg:h-28 w-16 h-20">
//                   <img 
//                     alt="award-logo" 
//                     loading="lazy" 
//                     width="100" 
//                     height="120" 
//                     className="color-transparent"
//                     srcSet={`/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2F${image}&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2F${image}&w=256&q=75 2x`}
//                     src={`/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2F${image}&w=256&q=75`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default RecognitionSection;
  
const RecognitionSection = () => {
    return (
      <section className="lg:pt-14 lg:pb-24 pt-10 pb-20">
        <div className="w-full flex lg:flex-row flex-col lg:gap-8 gap-7 lg:justify-between lg:items-center">
          <div className="flex flex-col text-left mx-5 2xl:mx-[130px]">
            <p className="text-base font-semibold text-[#3364FA]">RECOGNITION</p>
            <h2 className="lg:text-6xl text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Degular Display' }}>
              <span>Highly rated <br />by industry leaders</span>
            </h2>
          </div>
          <div className="flex flex-col items-center lg:gap- gap-4 lg:mr-5">
            <img 
              alt="rating" 
              loading="lazy" 
              width="221" 
              height="20" 
              className="color-transparent"
              src="https://gallabox.com/_next/image?url=https%3A%2F%2Fassets.gallabox.com%2Fgb-home%2Fnew-landing%2Fawards%2Frating.png&w=640&q=75"
            />
            <div className="flex lg:gap-6 gap-5">
              {[
                "best-support.png",
                "small-business-leader.png",
                "high-performer.png",
                "best-roi.png"
              ].map((image, index) => (
                <div key={index} className="lg:w-full lg:h-28 w-16 h-20">
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