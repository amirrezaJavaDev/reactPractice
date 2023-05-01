import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Navigation,Pagination,Scrollbar,A11y, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-fade';
import  './Slider.css';
export const Slider =({slides})=>{
    return(
        
        <Swiper
            modules={[Autoplay,EffectFade,Navigation,Pagination,Scrollbar,A11y]}
            autoplay={{
                delay:2500,
                disableOnInteraction:false
            }}
            spaceBetween={56} 
            loop={true}
            grabCursor={true}
            effect={"fade"}
            slidesPerView={1}
            pagination={{clickable:true}}
            onSlideChange={()=> console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide) =>(
                <SwiperSlide key={slide.image_background}>
                    <img src={slide.image_background} alt={slide.title} />
                    <p>
                        {slide.desciption}
                    </p>
                </SwiperSlide>
            ))}
       </Swiper>  
    );
    
    
}