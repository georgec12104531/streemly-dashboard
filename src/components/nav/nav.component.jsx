import React from "react";
import { connect } from "react-redux";
import { navChange } from "../../redux/action-creators/nav-actions";
import { Link } from "react-router-dom";
import avatar from "../../icons/avatar.png";
import "./nav.style.css";

const Nav = ({ navItems, navChange }) => {
  return (
    <div className="nav-main-container">
      <img
        className="logo"
        alt="logo"
        src="https://streemly-marketing-assets.s3-us-west-2.amazonaws.com/logo.png"
      ></img>
      <div className="nav-sub-container">
        {navItems.map(({ name, path, id, selected }) => (
          <Link
            key={id}
            onClick={() => navChange(id)}
            className={selected ? "selected" : "unselected"}
            to={`/${path}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="user-container">
        <img alt="avatar" src={avatar}></img>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  navItems: state.navItems,
});

const mapDispatchToProps = (dispatch) => ({
  navChange: (id) => dispatch(navChange(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
