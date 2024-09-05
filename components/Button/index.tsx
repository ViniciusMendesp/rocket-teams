import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
};

export function Button({ title, type = "primary", ...rest }: ButtonProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
