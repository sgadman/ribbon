import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

import history from "../Utils/history";

const useStyles = makeStyles(() => ({
  ribbon: ({ opened }) => ({
    width: opened ? "100px" : "60px",
    height: "100%",
    backgroundColor: "black",
    color: "white",
    position: "absolute",
    padding: "5px",
  }),
  buttons: {
    width: "100%",
    cursor: "pointer",
    color: "white",
    backgroundColor: "black"
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
  }
}));

const Ribbon = () => {
  const [opened, setOpened] = useState(false);
  const [dropDownOpened, setDropDownOpened] = useState(false);

  const classes = useStyles({ opened });

  const handleMouseEnter = () => {
    setOpened(true);
  };

  const handleMouseLeave = () => {
    setOpened(false);
    setDropDownOpened(false);
  };

  const handleDropDownClicked = () => {
    setDropDownOpened(!dropDownOpened);
  };

  const onRouteChange = route => () => {
    history.push(route);
  };

  const renderDropDown = () => {
    return (
      <div className={classes.dropDown}>
        <button
          type="button"
          className={classes.buttons}
          onClick={onRouteChange("bug")}
        >
          Bug
        </button>
        <button
          type="button"
          className={classes.buttons}
          onClick={onRouteChange("epic")}
        >
          Epic
        </button>
      </div>
    );
  };

  return (
    <div
      className={classes.ribbon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
    >
      <button
        type="button"
        className={classes.buttons}
        onClick={onRouteChange("home")}
      >
        Home
      </button>
      <button
        type="button"
        className={classes.buttons}
        onClick={handleDropDownClicked}
      >
        + {opened && "Create"}
      </button>
      {dropDownOpened && renderDropDown()}
    </div>
  );
};

export default Ribbon;
