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
      <button className={btnStyles}>
        <TbArrowBigLeftLine className={iconStyles} onClick={() => swiper.slidePrev() }/>
      </button>
      <button className={btnStyles}>
        <TbArrowBigRightLine className={iconStyles} onClick={() => swiper.slideNext() }/>
      </button>
    </div>
  );
}

export default ProjectSliderButtons;
