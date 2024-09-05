import * as S from "./styles";
import LogoImg from "./../../assets/images/logo.png";

export function Header() {
  return (
    <S.Container>
      <S.BackIcon />
      <S.Logo source={LogoImg} />
    </S.Container>
  );
}
