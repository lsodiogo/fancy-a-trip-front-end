import { Swiper, SwiperSlide } from "swiper/react";

const data = [
   {
      img: "/images/madrid.png"
   },
   {
      img: "/images/luzerne.png"
   },
   {
      img: "/images/porto.png"
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