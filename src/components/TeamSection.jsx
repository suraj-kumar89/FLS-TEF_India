// import React from "react";
// import Slider from "react-slick";
// import "./TeamSection.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";

// import img1 from "../assets/images/Aruneshwar.svg";
// import img2 from "../assets/images/Kashish.svg";
// import img3 from "../assets/images/Riya.svg";
// import img4 from "../assets/images/Tanya.svg";
// import img5 from "../assets/images/Nidhi.svg";
// import img6 from "../assets/images/Mokshika.svg";

// const colors = ["#FFFCE2", "#FFF5A9", "#FFFCE2", "#FFF5A9", "#FFFCE2", "#FFF5A9"];

// const members = [
//   { name: "Aruneshwar", img: img1 },
//   { name: "Kashish", img: img2 },
//   { name: "Riya Mahendru", img: img3 },
//   { name: "Tanya Singh", img: img4 },
//   { name: "Nidhi Gupta", img: img5 },
//   { name: "Mokshika", img: img6 },

// ];

// export default function TeamSection() {

//   const [key, setKey] = useState(0);
//   useEffect(() => {
//     const handleResize = () => setKey(prev => prev + 1);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   // const settings = {
//   //   dots: false,
//   //   arrows: false,
//   //   infinite: true,
//   //   autoplay: true,
//   //   autoplaySpeed: 0,            // continuous autoplay
//   //   speed: 9000,                 // ⭐ SLOW, SMOOTH SPEED (increase to slow more)
//   //   cssEase: "linear",

//   //   slidesToShow: 5,
//   //   slidesToScroll: 1,

//   //   rtl: false,                   // ⭐ RIGHT → LEFT
//   //   swipeToSlide: true,
//   //   draggable: true,             // ⭐ pointer drag
//   //   pauseOnHover: false,

//   // responsive: [
//   //   {
//   //     breakpoint: 1024,
//   //     settings: { slidesToShow: 3 }
//   //   },
//   //   {
//   //     breakpoint: 768,
//   //     settings: { slidesToShow: 1 }   // ⭐ Now mobile tablet shows 1 slide
//   //   },
//   //   {
//   //     breakpoint: 480,
//   //     settings: { slidesToShow: 1 }   // ⭐ Mobile shows 1 slide
//   //   }
//   // ]
//   // };



//  const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,

//   autoplay: true,
//   autoplaySpeed: 3000,
//   speed: 1000,
//   cssEase: "ease",

//   slidesToShow: 5,
//   slidesToScroll: 1,

//   swipe: true,
//   touchMove: true,

//   adaptiveHeight: true,   // ⭐ IMPORTANT
//   waitForAnimate: false,  // ⭐ IMPORTANT

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 2 },
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 1 },
//     },
//   ],
// };



//   //bharti

// //   const settings = {
// //   dots: false,
// //   arrows: false,
// //   infinite: true,
// //   autoplay: true,
// //   autoplaySpeed: 0,
// //   speed: 9000,
// //   cssEase: "linear",

// //   slidesToShow: 5,
// //   slidesToScroll: 1,
// //   variableWidth: false,  

// //   responsive: [
// //     {
// //       breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1
// //         }
// //     },
// //     {
// //       breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1
// //         }
// //     },
// //   {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1
// //         }
// //       }
// //   ]
// // };


//   return (
//     <div className="team-slider">
//       <Slider key={key} {...settings}>
//         {members.map((m, index) => (
//           <div className="team-slide" key={index}>
//             <div className="team-card">
//               <div
//                 className="team-card-top"
//                 style={{ backgroundColor: colors[index] }}
//               >
//                 <img
//                   src={m.img}
//                   alt={m.name}
//                   className={`team-photo ${
//                     m.name === "Mokshika" ? "fix-mokshika" : ""
//                   }`}
//                 />
//               </div>

//               <div
//                 className="team-card-bottom"
//                 style={{ borderColor: colors[index] }}
//               >
//                 <h3 className="team-name">{m.name}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

//working

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import "./TeamSection.css";

import img1 from "../assets/images/Aruneshwar.svg";
import img2 from "../assets/images/Kashish.svg";
import img3 from "../assets/images/Riya.svg";
import img4 from "../assets/images/Tanya.svg";
import img5 from "../assets/images/Nidhi.svg";
import img6 from "../assets/images/Mokshika.svg";

const colors = ["#FFFCE2", "#FFF5A9", "#FFFCE2", "#FFF5A9", "#FFFCE2", "#FFF5A9"];

const members = [
  { name: "Aruneshwar", img: img1 },
  { name: "Kashish", img: img2 },
  { name: "Riya Mahendru", img: img3 },
  { name: "Tanya Singh", img: img4 },
  { name: "Nidhi Gupta", img: img5 },
  { name: "Mokshika", img: img6 },
];

export default function TeamSection() {

   const [emblaRef ,emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
   dragFree: true,
});
useEffect(() => {
  if (!emblaApi) return;

  let interval;

  const start = () => {
    interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
  };

  const stop = () => clearInterval(interval);

  start();

  emblaApi.on("pointerDown", stop);
  emblaApi.on("pointerUp", start);

  return () => {
    stop();
    emblaApi.off("pointerDown", stop);
    emblaApi.off("pointerUp", start);
  };
}, [emblaApi]);




 


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {members.map((m, index) => (
            <div className="embla__slide" key={index}>
              <div className="team-card">
                <div
                  className="team-card-top"
                  style={{ backgroundColor: colors[index] }}
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className={`team-photo ${
                      m.name === "Mokshika" ? "fix-mokshika" : ""
                    }`}
                  />
                </div>
                <div
                  className="team-card-bottom"
                  style={{ borderColor: colors[index] }}
                >
                  <h3 className="team-name">{m.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
