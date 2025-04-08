"use client";

import { useSwiper } from "swiper/react";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

function ProjectSliderButtons({ containerStyles, btnStyles, iconStyles }: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;}) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <ArrowBigLeftDash className={iconStyles} onClick={() => swiper.slidePrev() }/>
      </button>
      <button className={btnStyles}>
        <ArrowBigRightDash className={iconStyles} onClick={() => swiper.slideNext() }/>
      </button>
    </div>
  );
}

export default ProjectSliderButtons;
