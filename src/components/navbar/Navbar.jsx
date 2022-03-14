import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logoDark.png'

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sticky, setSticky] = useState(false);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(scrollY);
    handleSticky();
    console.log(sticky)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const handleSticky = () => {
    if (scrollY >= 10) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  


  return (
    <div className={`guru__navbar ${sticky ? 'sticky' : ''}`}>
      <div className="guru__navbar-container">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar