import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import Header from "./components/shared/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
