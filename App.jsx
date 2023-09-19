import Main from "./Main";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
