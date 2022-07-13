import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import logo from "../../assets/img/leopard.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg" style={{ backgroundColor: '#101010' }}>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
            <img width="60" src={logo} alt="logo" />  
            <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Приватне детективне агентство «БАРС»
              </h1>
            </Link>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              <b>На початок</b> 
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
