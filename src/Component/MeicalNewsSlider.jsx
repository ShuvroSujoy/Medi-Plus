import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';

const MeicalNewsSlider = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    let slidesPerView = 3;

    if (isMobile) {
        slidesPerView = 1;
    } else if (isTablet) {
        slidesPerView = 2;
    }

    return (
        <div className="bg-[url('public/img/client-bg.jpg')] bg-no-repeat bg-cover bg-center w-full h-72 ">
            <div className="bg-[#176ABC] bg-opacity-70 w-full h-full px-20 flex items-center justify-center">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img className='h-20 w-44 ' src="public/img/client1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-20 w-44 ' src="public/img/client2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-20 w-44 ' src="public/img/client3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-20 w-44 ' src="public/img/client4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-20 w-44 ' src="public/img/client5.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MeicalNewsSlider;