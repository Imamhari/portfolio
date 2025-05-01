"use client";

import { useSwiper } from "swiper/react";
import { TbArrowBigRightLine, TbArrowBigLeftLine } from "react-icons/tb";

function ProjectSliderButtons({ containerStyles, btnStyles, iconStyles }: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;}) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={`${btnStyles} active:scale-95 transition-transform duration-100`}>
        <TbArrowBigLeftLine className={iconStyles} onClick={() => swiper.slidePrev() }/>
      </button>
      <button className={`${btnStyles} active:scale-95 transition-transform duration-100`}>
        <TbArrowBigRightLine className={iconStyles} onClick={() => swiper.slideNext() }/>
      </button>
    </div>
  );
}

export default ProjectSliderButtons;
