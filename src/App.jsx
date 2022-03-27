import "./App.css";
import { HomePage } from "./Components/HomePage";
import { SearchPage } from "./Components/SearchPage";
import { Route, Routes } from "react-router-dom";
function App() {
  <link rel="shortcut icon" type="image/x-icon" href="./google.svg" />;

  document.title = "Mini Google";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
