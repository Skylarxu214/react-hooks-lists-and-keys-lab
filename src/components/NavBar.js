import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const itemList = links.map((item) =>(
           <a key = {item} href = {"#" + item} >{item}</a>
  ))
return <nav>{itemList}</nav>
  
}

export default NavBar;
