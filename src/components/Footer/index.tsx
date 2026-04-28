import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
//import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import {
  Copyright,
  FooterSection,
  //Extra,
  Para,
  Language,
  NewLink,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Me")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <Para> 
                <NewLink href="mailto:wellingtonwong@gmail.com">
                  {t("wellingtonwong@gmail.com")}
                </NewLink>
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Location")}</Language>
              <Para>Quezon City, Philippines</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Availability")}</Language>
              <Para>9 AM – 6 PM (GMT+8)</Para>
              <Para>Flexible for US EST overlap</Para>
            </Col>
          </Row>
          <Row justify="space-between" className="copyright-wrapper">
            <Col lg={22} md={22} sm={22} xs={22} offset={1}>
              <Copyright>© 2026 Wellington Webpages</Copyright>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      {/*<Extra>
          <TawkMessengerReact
            propertyId="69d40991b0cccb1c3b0d06e6"
            widgetId="1jlnah6r7"/>
      </Extra>*/}
    </>
  );
};

export default withTranslation()(Footer);
