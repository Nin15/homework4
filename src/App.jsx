// // 1) შექმენით თუდუ აპის მსგავსი მინიმალისტური კომპონენტი. უნდა გქონდეთ ინფუთი და ბათონი,
// //  ისევე როგორც ლექციაზე გაჩვენეთ და როდესაც დააწვებით ენთერს
// //   ან ამ ბათონს ინფუთში ჩაწერილი ტექსტი უნდა გადამაპოთ და გამოაჩინოთ.

// 2) უნდა გააკეთოთ dark/light სვიჩერი(ბათონი) რომელსაც თუ დააჭერთ ბადის შეეცვალოს ფერი შავად
//  და შემდეგ თეთრათ ანუ გააკეთე dark/light theme toggle.

// 3)  გააკეთეთ ქაუნთერის კომპონენტი სადაც გექნებათ ქაუნთი,
// increment, decrement როდესაც დააწვებით შესაბამის ბათონებს გაიზარდოს და შემცირდეს ეს ქაუნთი.

// 4) გააკეთეთ ქარდის კომპონენტი რომელსაც ექნება თაითლის,
//  იმიჯის და დესქრიფშენის ფროფსები და ბათონი რომელზე ქლიქის დროსაც, გაქრეს,
//  და შემდეგ ქლიქზე ისვ გამოჩნდეს ამ ქარდის თაითლი.

import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.js";
import Card from "./components/Card";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [bg, setBg] = useState("black");
  const [border1, setBorder1] = useState("solid 3px white");
  const [count, setCount] = useState(0);
    

    

  

  const bodyHandle = () => {
    setBg((prevBg) => (prevBg === "white" ? "black" : "white"));
    setBorder1((prevBorder) =>
      prevBorder === "solid 3px white" ? "solid 3px black" : "solid 3px white"
    );
  };

  const handleTodo = () => {
    setTodo([...todo, inputValue], setInputValue(""));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTodo();
    }
  };

  return (
    <body style={{ backgroundColor: bg, width: "100vw" }}>
      <div className="div1">
        <button onClick={bodyHandle}>Dark/Light</button>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <h4>{count}</h4>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <div className="div3">
        <div className="div2" style={{ border: border1 }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleTodo}>Add</button>
          <div className="div2" style={{ border: border1 }}>
            {todo.map((todo) => (
              <li key="1" style={{ color: "gray" }}>
                {todo}
              </li>
            ))}
          </div>
        </div>
      </div>
      {data.map((el) => (
        <>
          <Card
            key={el.id}
            title1={el.name}
            desc={el.description}
            img={el.imgname}
          ></Card>
        </>
      ))}
    </body>
  );
}

export default App;
