import react, { useState, useEffect } from 'react'
import './admin.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Offcanvas, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Dashadmin from './Dashadmin';
import Topnav from './Topnav';
import Footeradmin from './Footeradmin';

export default function Adminpanel() {

  return (
    <>
      <div>
        <Topnav/>
        <Dashadmin/>
        <Footeradmin/>
      </div>
    </>
  )
}