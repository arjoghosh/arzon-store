import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
            <div class="topnav" id="myTopnav">
  <a href="#home">Products</a>
  <a href="#news">Brands</a>
  <a href="#contact">Deals</a>
  <a href="#about">Services</a>
  <a class="active right" href="#about">&#128104; Account</a>
  <a class="right" href="#about">&#128197; Shopping History</a>
  <a class="right" href="#about">&#9203; Order Status</a>
  <a class="right" href="#about">&#128190; Saved Items</a>
  <a href="javascript:void(0);" class="icon" onClick={mobileMenu}>
  &#8801;</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">&#128269;</button>
    </form>
  </div>
  
</div>
            
        )
    }
}
function mobileMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

export default Navbar