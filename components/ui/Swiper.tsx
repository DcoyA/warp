/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { FlexBox } from "./atoms";
import Image from "next/image";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation]);

interface DataType {
  url: string;
}
interface Props {
  data?: Array<any>;
  onSlideClick?: any;
  activeIndex?: any;
  setActiveIndex?: any;
  setPlaceCode?: any;
}
const Section = styled.div`
  width: 100%;
  position: absolute;
  bottom: 90px;

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    z-index: 99;
    cursor: pointer;
    width: 100%;
    height: 0;
    padding-bottom: 14%;
  }
  .swiper-slide.active-slide {
    border: 3px solid #ef3e6e;
  }
  .swiper-slide img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .append-buttons {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .append-buttons button {
    cursor: pointer;
  }
`;

const Swipers = ({ data, onSlideClick, activeIndex, setPlaceCode }: Props) => {
  const swiperRef = useRef<any | null>(null);

  const goNext = () => {
    if (swiperRef.current && data) {
      swiperRef.current.slideNext();
      const index = (activeIndex + 1) % data.length;
      const item = data[index];

      onSlideClick(item, index);
    }
  };

  const goPrev = () => {
    if (swiperRef.current && data) {
      swiperRef.current.slidePrev();
      const index = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
      const item = data[index];

      onSlideClick(item, index);
    }
  };

  return (
    <Section>
      <div className="append-buttons">
        <button onClick={goPrev}>
          <Image
            src={"/arrow_left.png"}
            alt="swiper_arrow_left"
            width={92}
            height={87}
          />
        </button>
        <button onClick={goNext}>
          <Image
            src={"/arrow_right.png"}
            alt="swiper_arrow_right"
            width={92}
            height={87}
          />
        </button>
      </div>
      <FlexBox padding="0 97px">
        {data && (
          <Swiper
            spaceBetween={30}
            slidesPerView={3.5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
            loop={true}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data?.map((item, idx) => (
              <SwiperSlide
                key={idx}
                onClick={() => {
                  if (onSlideClick) {
                    onSlideClick(item, idx);
                    setPlaceCode(item.placeId);
                  }
                }}
                className={idx === activeIndex ? "active-slide" : ""}
              >
                <img
                  src={item?.files[0]?.fileName ?? "/warp_logo.png"}
                  alt={"item"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </FlexBox>
    </Section>
  );
};

export default Swipers;
