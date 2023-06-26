import React,{useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";
import "../CssFiles/Nav.css";

function Nav() {
     const [show, handleShow] = useState(false);

     const transitionNavBar = () =>{
          if(window.scrollY > 100){
                handleShow(true);
            } else {
                handleShow(false);
            }
     };
      useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        
        return () =>{
            window.removeEventListener('scroll',transitionNavBar);
        };
      },[]);
    // useEffect(() => {
    //     window.addEventListener("scroll", () =>{
    //         if(window.scrollY > 100){
    //             handleShow(true);
    //         } 
    //         else handleShow(false);
    //     });
    //     return () =>{
    //         window.removeEventListener('scroll');
    //     };
        
    // }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <NavLink  to="/"><img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            /></NavLink>
            <NavLink  to="/profile">
            <img
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt="Netflix Logo"
                />
            </NavLink>
        </div>
    )
}

export default Nav;
