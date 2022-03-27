import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  sort_date_desc,
  sort_date_asc,
  sort_asc,
  sort_desc,
} from "../Redux/action";
export const SearchPage = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("q");
  const [searchQuery, setSearchQuery] = useState(name);
  const [results, setresults] = useState([]);

  const searchData = useSelector((store) => store.searchData);

  const dispatch = useDispatch();

  const getResults = () => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data?q=${searchQuery}`)
      .then(({ data }) => {
        setresults(data);
        dispatch(getAll(data));
      });
  };
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="SearchPage">
      <div id="navbar" className="navbar">
        <div className="logo">
          <span className="G">G</span>
          <span className="o">o</span>
          <span className="o2">o</span>
          <span className="g">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </div>
        <input
          type="text"
          className="searchBox"
          defaultValue={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            getResults();
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="sortBox">
        <button
          onClick={() => {
            dispatch(sort_asc(true));
          }}
        >
          {" "}
          Sort A-Z{" "}
        </button>
        <button
          onClick={() => {
            dispatch(sort_desc(true));
          }}
        >
          {" "}
          Sort Z-A{" "}
        </button>
        <button
          onClick={() => {
            dispatch(sort_date_asc(true));
          }}
        >
          {" "}
          Sort Date asc{" "}
        </button>
        <button
          onClick={() => {
            dispatch(sort_date_desc(true));
          }}
        >
          {" "}
          Sort Date desc{" "}
        </button>
      </div>
      <hr />
      <div id="search-result" className="search-result">
        {searchData.map((a) => {
          const deep = a.url;
          return (
            <div className="detailed-result">
              <div className="titleBox ">
                {" "}
                <a href={deep}>{a.title}</a>{" "}
              </div>
              <div className="des"> {a.description}</div>
              <div className="bold"> Creation Date : {a.creation_date}</div>
              <div className="bold">quality : {a.quality}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
