import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
//import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
//import { Gallery } from "react-grid-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  galleryItems: {
    original: string;
  }[];
  t: TFunction;
  id: string;
}

export interface ReactImageGalleryItem extends GalleryItem {
  link?: string;
  mobile?: string;
}

const MiddleBlock = ({ title, content, button, t, id, galleryItems }: MiddleBlockProps) => {

  const images2: ReactImageGalleryItem[] = galleryItems;
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <ImageGallery
                items={images2.sort(()=>Math.random() - .8)}
                //renderItem={()=><Content>{t(content)}</Content>}
              />
              <Content>{t(content)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
