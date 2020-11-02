import React, { useState,useEffect } from 'react'
import './Nav.css'

function Nav() {
const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{

            if(window.scrollY>100){
                handleShow(true);
            } else{
                handleShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll",handleShow);
        };

    },[]);
    return (
        <div className={`Nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo" />


            <img 
            className="nav__avatar"
            src="http://pbs.twimg.com/media/Dn5cHiDXgAAb2-2.jpg" alt="Netflix avatar"/>

            
        </div>
    )
}

export default Nav
