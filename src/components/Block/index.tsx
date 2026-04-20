import { useContext } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { useOnInView } from "react-intersection-observer";
import { Container, TextWrapper, Content } from "./styles";
import { AppContext } from "../../context/AppContext";

interface Props {
  title: string;
  content: string;
  t: TFunction;
  id: string;
}

const Block = ({ title, content, t, id }: Props) => {

  const { setContextData } = useContext(AppContext);
  const trackingRef = useOnInView((inView, entry)=>{
    if (inView) {
      setContextData({ inViewId: id });
    }
  })

  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
      <Content ref={trackingRef} />
    </Container>
  );
};

export default withTranslation()(Block);
