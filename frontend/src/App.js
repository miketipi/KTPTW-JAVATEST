import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [user, setUser] = React.useState(null);
async function login(user = null) {// default user to null
setUser(user);
}
async function logout() {
setUser(null);
}
  return (
    <div className="App"> 
      <Navbar bg="light" expand="lg"> 
        <Navbar.Brand href="#home">Điện máy 1005</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="me-auto"> 
              <Nav.Link href="#home">Trang chủ</Nav.Link> 
              <Nav.Link href="#product">Sản phẩm</Nav.Link>
              <Nav.Link href="#cart">Giỏ hàng</Nav.Link>
              <Nav.Link href="#promotion">Khuyến mãi</Nav.Link>
              <Nav.Link> 
                {user ? (
                <a onClick={logout}>Đăng xuất</a>
                ):(
                  <Link to={"/login"}>Đăng nhập</Link>
                )}</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
</div>
  );
}

export default App;
