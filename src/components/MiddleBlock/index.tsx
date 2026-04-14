import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
//import { Gallery } from "react-grid-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  id: string;
}

/*const images = [
   {
      src: "/img/website-portfolio/0b681689cee183fa5ce5750ac0855aa3f6337a16.png",
      width: 320,
      height: 174,
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
         { value: "Ocean", title: "Ocean" },
         { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
   },
];*/

const images2: GalleryItem[] = [
  {
    original: "/img/website-portfolio/chopinlawfirm.jpg",
    thumbnail: "/img/website-portfolio/chopinlawfirm-thumb.jpg",
    description: "<div></div>"
  },
  {
    original: "/img/website-portfolio/coolairflorida.jpg",
    thumbnail: "/img/website-portfolio/coolairflorida-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/dunlopmotorcycletires.jpg",
    thumbnail: "/img/website-portfolio/dunlopmotorcycletires-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/dunlopprodealer.jpg",
    thumbnail: "/img/website-portfolio/dunlopprodealer-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/dunlopracing.jpg",
    thumbnail: "/img/website-portfolio/dunlopracing-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/flytropic.jpg",
    thumbnail: "/img/website-portfolio/flytropic-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/genious.jpg",
    thumbnail: "/img/website-portfolio/genious-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/kingroofing.jpg",
    thumbnail: "/img/website-portfolio/kingroofing-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/nyccd.jpg",
    thumbnail: "/img/website-portfolio/nyccd-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/ourhome.jpg",
    thumbnail: "/img/website-portfolio/ourhome-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/smxconventioncenter.jpg",
    thumbnail: "/img/website-portfolio/smxconventioncenter-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/sportscentral.jpg",
    thumbnail: "/img/website-portfolio/sportscentral-thumb.jpg",
  },
  {
    original: "/img/website-portfolio/stanleylaw.jpg",
    thumbnail: "/img/website-portfolio/stanleylaw-thumb.jpg",
  },
];

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <ImageGallery
                items={images2.sort(()=>Math.random() - .8)}
              />
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
            {/*<Gallery images={images} enableImageSelection={false} />*/}
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
