import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../icons/avatar.png";
import "./nav.style.css";

const useStyles = makeStyles({
  button: {
    color: "white",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "#008080",
    },
  },
});

const Nav = () => {
  const classes = useStyles();
  let navItems = [
    { name: "Home", id: 1 },
    { name: "New Request", id: 2 },
    { name: "Recent Request", id: 3 },
    { name: "All Request", id: 4 },
    { name: "Workflow", id: 5 },
  ];

  return (
    <div className="nav-main-container">
      <img
        className="logo"
        alt="logo"
        src="https://streemly-marketing-assets.s3-us-west-2.amazonaws.com/logo.png"
      ></img>
      <div className="nav-sub-container">
        {navItems.map(({ name, id }) => (
          <Button className={classes.button} variant="outlined" key={id}>
            {name}
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
