import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@/components/Loading";

import { Routes } from "@/routes";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return <>{fontsLoaded ? <Routes /> : <Loading />}</>;
}
