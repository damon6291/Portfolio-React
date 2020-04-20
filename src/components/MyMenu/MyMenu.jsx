import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

import styles from "./MyMenu.module.css";

const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem>
          <Link to="Name" smooth={true} duration={600} onClick={handleClose}>
            Name
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="Skills" smooth={true} duration={600} onClick={handleClose}>
            Skills
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="Projects" smooth={true} duration={600} onClick={handleClose}>
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="Hobbies" smooth={true} duration={600} onClick={handleClose}>
            Hobbies
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="Bottom" smooth={true} duration={600} onClick={handleClose}>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MyMenu;
