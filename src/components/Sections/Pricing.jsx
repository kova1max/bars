import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="services">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Наші послуги</h1>
            <p className="font13">
              Наше детективне агентство надає досить широкий перелік високоякісних послуг, тут ви зможете 
              <br />ознайомитися детальніше про види послуг, та підібрати ті, які Вас зацікавили! 
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                title="Стеження"
                offers={[
                  { name: "GPS-маяк для контролю за тваринами", cheked: true },
                  { name: "Ведення стеження за людиною", cheked: true },
                  { name: "Відеоспостеження за приватним будинком", cheked: true },
                  { name: "Зовнішнє спостереження", cheked: true },
                  { name: "Приховане спостереження", checked: true },
                ]}
                action={() => global.location.href = '#contact'}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                title="Пошук"
                offers={[
                  { name: "Пошук зниклих безвісті людей", cheked: true },
                  { name: "Пошук людей за номером телефону", cheked: true },
                  { name: "Пошук свідків", cheked: true },
                  { name: "Встановлення абонента за IP-адресою", cheked: true },
                  { name: "Відновлення втраченої на телефоні інформації", cheked: false },
                  { name: "Збір інформації", checked: true },
                ]}
                action={() => global.location.href = '#contact'}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                title="Перевірка"
                offers={[
                  { name: "Перевірка документів", cheked: true },
                  { name: "Перевірка на детекторі брехні", cheked: true },
                  { name: "Перевірка на прослуховування", cheked: true },
                  { name: "Перевірка на угон автомобіля", cheked: true },
                  { name: "Перевірка персоналу", checked: true },
                  { name: "Перевірка способу життя дітей", checked: true },
                ]}
                action={() => global.location.href = '#contact'}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="printer"
                title="Інші послуги"
                offers={[
                  { name: "Психологічна підтримка", cheked: true },
                  { name: "Розслідування злочинів", cheked: true },
                  { name: "Складання генеалогічного дерева", cheked: true },
                  { name: "Встановлення біологічних батьків", cheked: true },
                  { name: "Охорона об'єкта чи особи", checked: true },
                  { name: "Колекторські послуги", checked: true },
                  { name: "Юридична допомога", checked: true },
                ]}
                action={() => global.location.href = '#contact'}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 24%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




