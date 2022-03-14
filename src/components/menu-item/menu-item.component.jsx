/** @format */
import React from "react";
import { withRouter } from "react-router-dom";
import { MenuItemContainer } from "./menu-item.style";
// import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    size={size}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
