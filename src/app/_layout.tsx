import theme from "@/theme";
import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            statusBarStyle: "auto",
            statusBarTranslucent: true,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
