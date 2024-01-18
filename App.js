import { StatusBar } from "react-native";
import colors from "./src/misc/colors";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.LIGHT} barStyle="dark-content" />
      <Routes />
    </>
  );
}
