import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, t }: InputProps) => (
  <StyledContainer>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);
//<Label htmlFor={name}>{t(name)}</Label>

export default withTranslation()(TextArea);
