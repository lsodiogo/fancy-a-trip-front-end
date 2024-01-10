import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from 'swiper/modules';

function Slider({detailedTripData}) {

   return (
      <>
        <div className="sliderContainer">
            <Swiper
               slidesPerView={1}
               autoplay={true}
               pagination={{clickable: true}}
               effect={"cube"}
               cubeEffect={{
                  shadow: false,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
               }}
               modules={[EffectCube, Pagination]}            
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