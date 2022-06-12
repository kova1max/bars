import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import logo1 from "../../assets/svg/advantages/satellite-solid.svg";
import logo2 from "../../assets/svg/advantages/shield-halved-solid.svg";
import logo3 from "../../assets/svg/advantages/shuttle-space-solid.svg";
import logo4 from "../../assets/svg/advantages/user-secret-solid.svg";

export default function ClientSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle style={{ width: '100%' }} src={logo1} alt="client logo" />
          <div style={{ textAlign: 'center', fontWeight: 'bold' }} >Великі можливості</div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle style={{ width: '100%' }} src={logo2} alt="client logo" />
          <div style={{ textAlign: 'center', fontWeight: 'bold' }} >Конфіденційність</div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle style={{ width: '100%' }} src={logo3} alt="client logo" />
          <div style={{ textAlign: 'center', fontWeight: 'bold' }} >Оперативність</div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle style={{ width: '100%' }} src={logo4} alt="client logo" />
          <div style={{ textAlign: 'center', fontWeight: 'bold' }} >Професіоналізм</div>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
