import HomeScreen from "./pages/Home/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Results from "./components/Results/Results";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route path=":userName" element={<Results />} />
      <Route path="*" element={<NotFound />} />
      <Route path="NotFound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
