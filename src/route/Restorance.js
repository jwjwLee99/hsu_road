import React from "react";
import { Link, Route } from "react-router-dom";
import ResPost from "./ResPost";
import data from "../images/res.json";

const Restorance = ({ match }) => {
  return (
    <div>
      <h2 className="tabName">식당</h2>
      <ul>
        {data.names.map((name) => (
          <li key={name.id} className="etcList">
            <Link to={`${match.url}/${name.name}`}>{name.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <br />
        <br />
        <br /> 다른 식당 메뉴판 준비중
      </div>
      <Route path={`${match.url}/:name`} component={ResPost}></Route>
    </div>
  );
};

export default Restorance;
