import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import FullButton from "../Buttons/FullButton";
// Assets

import AddImage1 from "../../assets/img/about-company/Depositphotos_196567260_L.jpg"
import AddImage2 from "../../assets/img/about-company/minimalism-devushka-shlyapa-chb-temnii-teni-119298.jpeg"
import AddImage3 from "../../assets/img/about-company/hi-tech-fotoapparat-ruka-chb-118804.jpeg"
import AddImage4 from "../../assets/img/about-company/man-wearing-smart-glasses-virtual-scanning-technology-glitch-effect.jpg";

export default function Services() {
  return (
    <>
      <div className="lightBg" style={{ padding: "10px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
    <Wrapper id="about">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">Про компанію</h2>
                <p className="font12">
                  Наше детективне агентство має досвід роботи, надаючи послуги приватного детектива по всій території України. Враховуючи специфіку надаваних нами послуг, в команді нашого детективного агентства працюють тільки професіонали і знавці своєї справи. Кожен фахівець пройшов багаторічну перевірку роботою. Головне завдання кожного з нас і всієї команди в цілому полягає в тому, щоб з великим відсотком успіху вирішити поставлене завдання і допомогти знайти вихід з безвихідних ситуацій.
                  <br /><br />Крім того, що послуги детектива передбачають пошук необхідної інформації про партнерів у бізнесі, розшук необхідних людей,  ми також проводимо свою діяльність і в інших напрямках.
                  <br /><br />Наша компанія дозволить встановити, чи ведеться за Вами відео-, аудіо- спостереження, чи інші дії , що посягають на Ваше приватне життя з боку інших людей. Наше детективне агентство досить швидко перевірить ваш офіс або будинок на наявність прослуховуваних пристроїв. У нас є всі можливості, щоб перевірити особу на детекторі брехні, перевірити його минуле життя (кредити, судимості, судові рішення, тощо). Важливо відмітити, що враховуючи відсутність певних пунктів у законодавстві нашої держави, детективне агентство не може бути офіційно зареєстровано, як детективне агентство. У зв'язку з цим кожен наш приватний детектив працює як співробітник засобів масової інформації і проводить відповідні журналістські розслідування.
                  <br /><br />Для кожного клієнта, який звернувся до нас, наша компанія розробляє індивідуальний робочий план. При цьому всі наші співробітники працюють у відповідності з правилами конфіденційності, які є негласним керівництвом кожного детектива. Звернувшись до нас, ви можете бути впевнені в повній конфіденційності та захисті Ваших персональних даних та Ваших інтересів. Хочемо наголосити, що ми спочатку попереджаємо про можливі результати своєї роботи, якими б вони не були. Вартість наших послуг в кожному випадку обговорюється в індивідуальному порядку.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
