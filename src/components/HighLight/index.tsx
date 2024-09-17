import * as S from "./styles";

type HighLightProps = {
  title: string;
  subtitle: string;
};

export function HighLight({ title, subtitle }: HighLightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
