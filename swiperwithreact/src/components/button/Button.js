import React from "react";

const Button=({children,handleclick=()=>{}})=>(
    <button onClick={handleclick}>{children}</button>
);
export default  Button