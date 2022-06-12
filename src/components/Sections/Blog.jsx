import React from "react";
import styled from "styled-components";
// Components
import PhoneIcon from '../../assets/svg/Services/PhoneIcon'
import TelegramIcon from '../../assets/svg/Services/TelegramIcon'
import ViberIcon from '../../assets/svg/Services/ViberIcon'
import WhatsappIcon from '../../assets/svg/Services/WhatsappIcon'
import EmailIcon from '../../assets/svg/Services/EmailIcon'
import FacebookIcon from '../../assets/svg/Services/FacebookIcon'

export default function Blog() {
  return (
    <section id="contact">
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Контакти</h1>
            <p className="font17">
              <span style={{ display: 'contents', alignItems: 'flex-start' }}>Телефони: <PhoneIcon style={{ margin: '0 5px 0 7px' }} /><a href="tel:+380666775559">+380 66 677 55 59</a>, <PhoneIcon style={{ margin: '0 5px 0 7px' }} /><a href="tel:+380982900448">+380 98 290 04 48</a></span><br />
              <span style={{ display: 'contents', alignItems: 'flex-start' }}>Telegram, WhatsApp, Viber: <a href="https://t.me/+380666775559"><TelegramIcon style={{ margin: '0 5px 0 7px' }} /></a><WhatsappIcon style={{ marginRight: '5px' }} /><ViberIcon style={{ marginRight: '5px' }}/><a href="tel:+380666775559">+380 66 677 55 59</a>, Email: <EmailIcon style={{ margin: '0 5px 0 7px' }} /><a href="mailto:bars.2021@ukr.net">bars.2021@urk.net</a></span><br />
              <span style={{ display: 'contents' }} >Facebook: <FacebookIcon style={{ margin: '0 5px 0 7px' }} /> <a href="https://www.facebook.com/groups/3252504045074174">facebook.com/bars</a></span><br />
              
              <div style={{ display: 'block', width: '100%', height: '1px', backgroundColor: '#ababab', margin: '4vh 0' }} />

              <span><b>Ми знаходимось за адресою: </b> <a href="https://www.google.com/maps/place/River+Park+Lisova+Pisnya/@51.2168808,24.7084129,17z/data=!3m1!4b1!4m8!3m7!1s0x47243b03c8c7a317:0xe5398c8a7bee28f9!5m2!4m1!1i2!8m2!3d51.2168802!4d24.7105518">Волинська обл., м. Ковель, бульвар Лесі Українки, 12/301</a></span>
            </p>
          </HeaderInfo>
        </div>
      </div>
    </section>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
