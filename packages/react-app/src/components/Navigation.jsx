import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import logo from '../assets/img/logo.png'


const Navigation = () => {
   const [isMobile, setMobile] = useState(false);
   const isShow = false;
   const showMenu = () => {
      setMobile(true);
   }
   const closeMenu = () => {
      setMobile(false);
   }
   return (
      <NavigationStyled>
         <div className="logo">
            <a href='/'>
               <img src={logo} alt="" />
            </a>
         </div>

         <ul className='desktop-nav'>
            <li>
               <Link to="header" spy={true} smooth={true}>HOME</Link>
            </li>
            <li>
               <Link to="aboutus" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li>
               <Link to="roadmap" spy={true} smooth={true}>ROADMAP</Link>
            </li>
            <li>
               <Link to="team" spy={true} smooth={true}>TEAM</Link>
            </li>
         </ul>
         <button className='mobile-menu' onClick={showMenu}>&#9776;</button>
         {isMobile && <div className="sidepanel">
            <button className="closebtn" onClick={closeMenu}>&times;</button>
            <li>
               <Link to="header" spy={true} smooth={true}>HOME</Link>
            </li>
            <li>
               <Link to="aboutus" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li>
               <Link to="roadmap" spy={true} smooth={true}>ROADMAP</Link>
            </li>
            <li>
               <Link to="team" spy={true} smooth={true}>TEAM</Link>
            </li>
         </div>}
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   top: 0;
   left: 0;
   background: black;
   z-index: 10000;
   position: fixed;
   width: 100%;
   padding: 1% 10%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;

   img{
      width: 150px;
   }
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }

   .mobile-menu {
      display: none;
   }

   .sidepanel {
      width: 300px;
      position: fixed;
      z-index: 1;
      height: 250px;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: #3d3d3d;
      overflow-x: hidden;
      transition: 0.5s;
      padding: 30px;
      li {
         margin: 20px 0;
      }
      .closebtn {
         position: fixed;
         padding: 0 33px;
         font-size: 35px;
         background: #3d3d3d;
         border: none;
         color: white;
      }
   }

   @media screen and (max-width: 1000px) {
      padding: 1% 5%;
      .desktop-nav {
         display: none;
      }
      .wallet_btn {
         display: none;
      }
      .mobile-menu {
         display: block;
         font-size: 30px;
         color: white;
         background: black;
         border: none;
      }
   }
   
`
const PrimaryButton = styled.button`
   padding: 0.7rem 2rem;
   background-color: #848484;
   border: none;
   outline: none;
   border-radius: 18px;
   color: inherit;
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;

`

export default Navigation
