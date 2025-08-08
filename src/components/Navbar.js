// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/login">로그인</Button>
        <Button color="inherit" component={Link} to="/signup">회원가입</Button>
        <Button color="inherit" component={Link} to="/mypage">마이페이지</Button>
        <Button color="inherit" component={Link} to="/item1">항목1</Button>
        <Button color="inherit" component={Link} to="/item2">항목2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
