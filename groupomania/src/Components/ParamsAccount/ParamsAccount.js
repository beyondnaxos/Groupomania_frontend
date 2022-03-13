import * as React from 'react';
import ProfilModal from '../ProfilModal/ProfilModal';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import './ParamsAccount.css';
import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';

export default function PositionedMenu(props) {
  const setPosts  = props.setPosts
  const  username = props.username
  const  token = props.token
  const userId = props.userId
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    e.preventDefault()
    props.setIsLoggedIn(false)
    console.log(props.setIsLoggedIn)
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('id')
    window.location.replace('/')  
    }

  

  return (
    <div className='menuUser'>
      <Button
        
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <p id='simpleMenu'>Dashboard</p>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem ><ProfilModal setPosts={setPosts}  userId={userId} username={username} token={token}/></MenuItem>
        <MenuItem id='logout' onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}