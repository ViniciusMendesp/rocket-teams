import { Groups } from "@/screens/Groups";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
