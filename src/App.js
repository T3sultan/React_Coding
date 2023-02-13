import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Menu from "./components/Menu";
import ModalBData from "./components/ModalBData";
import Problem1 from "./components/Problem-1";
import Problem2 from "./components/Problem-2";
import ModalA from "./components/Problem-2/ModalA";
import ModalAData from "./components/Problem-2/ModalAData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
        </Route>
        <Route path="modalA" element={<ModalAData />} />
        <Route path="modalB" element={<ModalBData />} />
      </Routes>
    </>
  );
}

export default App;
