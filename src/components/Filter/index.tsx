import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type FilterProps = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...rest }: FilterProps) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
