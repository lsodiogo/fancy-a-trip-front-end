import { Swiper, SwiperSlide } from "swiper/react";

const data = [
   {
      img: "/images/porto.png"
   },
   {
      img: "/images/lisbon.png"
   },
   {
      img: "/images/brussels.png"
   }
];

function Slider() {
   
   return (
      <>
        <div className="sliderContainer">
            <Swiper
               slidesPerView={1}
               pagination={{clickable: true}}
               autoplay={true}
               /* navigation */
            >
               {data.map( (item) => (
                  <SwiperSlide key={item.img} className="sliderItem">
                     <img src={item.img} alt=""/>
                  </SwiperSlide>
               ))}
            </Swiper>
        </div>
      </>
   );
   
};

export default Slider;