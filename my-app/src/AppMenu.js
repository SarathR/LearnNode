import React from 'react';
import {Button, Menu, MenuItem}  from '@material-ui/core';
import {Link} from 'react-router-dom';

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = item => (event) => {
    setAnchorEl(null);
  };
  return (
  <>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Pages Menu
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose()}><Link to='/game'>Game</Link></MenuItem>
      <MenuItem onClick={handleClose()}><Link to='/reactAsync'>React</Link></MenuItem>
    </Menu>
  </>
  );
}

export default AppMenu;