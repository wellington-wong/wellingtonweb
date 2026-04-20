import { useContext } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useOnInView } from "react-intersection-observer";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { LinkedinFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { AppContext } from "../../context/AppContext";
import { Content, ContactContainer, ContactContent, FormGroup, Link, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  const { setContextData } = useContext(AppContext);
  const trackingRef = useOnInView((inView, entry)=>{
    if (inView) {
      setContextData({ inViewId: id });
    }
  })

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24} ref={trackingRef}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          <ContactContent className="contact-info">
            <Content><LinkedinFilled style={{ color: '#005B96 ' }} /> <Link href="https://www.linkedin.com/in/wellingtonwong" target="_blank">LinkedIn.com/in/wellingtonwong</Link></Content>
            <Content><MailFilled style={{ color: '#005B96 ' }} /> <Link href="mailto:wellingtonwong@gmail.com" target="_blank">wellingtonwong@gmail.com</Link></Content>
            <Content><PhoneFilled style={{ color: '#005B96 ' }} /> <Link href="tel:+639497692556" target="_blank">+63 949 769 2556</Link></Content>
          </ContactContent>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
          <ContactContent className="contact-header">
          </ContactContent>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
