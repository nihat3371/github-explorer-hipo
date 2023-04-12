import HomeScreen from "./pages/Home/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Results from "./components/Results/Results";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route path=":userName" element={<Results />} />
    </Routes>
  );
}

export default App;
