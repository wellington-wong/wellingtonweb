import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { Image } from "../../common/Image";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import {Cloud} from 'react-icon-cloud'

const ContentBlock = ({
  icon,
  image,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const icons = [
    {path: '/img/logos/laravel.png', url: 'https://laravel.com'},
    {path: '/img/logos/wordpress.png', url: 'https://wordpress.org'},
    {path: '/img/logos/react.png', url: 'https://react.dev'},
    {path: '/img/logos/jquery.png', url: 'https://jquery.com'},
    {path: '/img/logos/mysql.png', url: 'https://www.mysql.com'},
    {path: '/img/logos/bootstrap.png', url: 'https://getbootstrap.com'},
    {path: '/img/logos/woocommerce.png', url: 'https://woocommerce.com'},
    {path: '/img/logos/drupal.png', url: 'https://new.drupal.org/home'},
    {path: '/img/logos/mongodb.png', url: 'https://www.mongodb.com'},
    {path: '/img/logos/photoshop.png', url: 'https://www.adobe.com/ph_en/products/photoshop.html'},
    {path: '/img/logos/html5.png', url: 'https://en.wikipedia.org/wiki/HTML5'},
    {path: '/img/logos/css3.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
  ].sort(()=>Math.random() - .8).map((logo) => {
   return <a
      href={logo.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        height="108"
        width="108"
        alt=""
        src={logo.path}
      />
    </a>
  })

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {/*<SvgIcon src={icon} width="100%" height="100%" />*/}
            
            {id==='mission'?<Cloud options={{ wheelZoom: false, initial: [0.018, 0.018], freezeActive: true, outlineMethod: 'none' }}>{ icons }</Cloud>:<Image src={image} width="100%" height="100%" />}
            
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("mission")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
