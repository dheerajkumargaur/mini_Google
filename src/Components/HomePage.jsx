import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.css";
export const HomePage = () => {
  const navigate = useNavigate();
  const deepak = (event) => {
    if (event.key === "Enter") {
      if (searchIt == "") {
        navigate("/");
      } else {
        navigate(`/search?q=${searchIt}`);
        setSearchIt("");
      }
    }
  };

  const [searchIt, setSearchIt] = useState("");

  return (
    <div className="HomePage">
      <div className="container">
        <div className="logo">
          <span className="G">G</span>
          <span className="o">o</span>
          <span className="o2">o</span>
          <span className="g">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </div>
        <input
          className="search-box"
          type="text"
          value={searchIt}
          onKeyDown={deepak}
          onChange={(e) => {
            setSearchIt(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
