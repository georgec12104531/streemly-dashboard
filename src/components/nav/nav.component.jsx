import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../icons/avatar.png";
import "./nav.style.css";

const useStyles = makeStyles({
  button: {
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "#008080",
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
});

const Nav = () => {
  const classes = useStyles();
  let navItems = [
    { name: "Home", path: "home", id: 1 },
    { name: "New Request", path: "new-request", id: 2 },
    { name: "Recent Request", path: "recent-request", id: 3 },
    { name: "All Request", path: "all-request", id: 4 },
    { name: "Workflow", path: "workflow", id: 5 },
  ];

  return (
    <div className="nav-main-container">
      <img
        className="logo"
        alt="logo"
        src="https://streemly-marketing-assets.s3-us-west-2.amazonaws.com/logo.png"
      ></img>
      <div className="nav-sub-container">
        {navItems.map(({ name, path, id }) => (
          <Button className={classes.button} variant="outlined" key={id}>
            <Link className={classes.link} to={`/${path}`}>
              {name}
            </Link>
          </Button>
        ))}
      </div>
      <div className="user-container">
        <img alt="avatar" src={avatar}></img>
      </div>
    </div>
  );
};

export default Nav;
