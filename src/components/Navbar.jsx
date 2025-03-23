import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);

  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isopen]);

  useEffect(()=>{
    
  })
  return <div>navbar</div>;
};

export default Navbar;
