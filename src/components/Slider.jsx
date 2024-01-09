import { Swiper, SwiperSlide } from "swiper/react";

function Slider({detailedTripData}) {

   return (
      <>
        <div className="sliderContainer">
            <Swiper
               slidesPerView={1}
               pagination={{clickable: true}}
               autoplay={true}
               navigation               
            >
               {detailedTripData.sliderIMG?.map(item => (
                  <SwiperSlide key={item} className="sliderItem">
                     <img src={item} alt=""/>
                  </SwiperSlide>
               ))}
            </Swiper>
        </div>
      </>
   );
   
};

export default Slider;