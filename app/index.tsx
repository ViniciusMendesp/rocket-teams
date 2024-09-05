import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Groups } from "@/screens/Groups";

import { Loading } from "@/components/Loading";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return <>{!fontsLoaded ? <Groups /> : <Loading />}</>;
}
