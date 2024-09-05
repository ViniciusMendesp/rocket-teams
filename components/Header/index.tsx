import * as S from "./styles";
import LogoImg from "./../../assets/images/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={LogoImg} />
    </S.Container>
  );
}
