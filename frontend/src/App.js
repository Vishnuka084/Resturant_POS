import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePages from "./pages/HomePages";
import PosPages from "./pages/PosPages";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="/pos" element={<PosPages/>}/>
        </Routes>
    </Router>
  );
}

export default App;
