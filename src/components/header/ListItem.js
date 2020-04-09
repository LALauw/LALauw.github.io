import React from "react";
import "./Header.css";

const ListItem = (props) => {
  return (
    <ul className="social list-inline">
      {props.items.map((item) => {
        return (
          <li className="list-inline-item" key={item.id}>
            <a href={item.href} target="__blank" rel="noopener">
              <i className={item.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
