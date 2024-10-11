import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <aside className="menu">
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </aside>
  );
};

export default Menu;
