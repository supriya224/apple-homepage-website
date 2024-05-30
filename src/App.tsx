import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./pages";
import Header from "./components/shared/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
