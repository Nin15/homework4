import { useState } from "react";


export default function ({title1,img, desc, style}) {
  const [title, setTitle] = useState("block");
     

  return (
    <div>
      <h1 style={{ display: title }}>{title1}</h1>
      <img src={img} alt="Image" />
      <p>{desc}</p>
      <button onClick={ ()=> setTitle((prevTitle) => (prevTitle === "block" ? "none" : "block"))}>Hide/Show Title</button>
    </div>
  );
}



