import { useEffect, useState, useRef } from "react";
import "./App.css";

function handleNoClick(noCount, setNoCount, noText, setMusic, setImg) {
  setNoCount(noCount + 1);
  let add = noCount + 1;
  if (noCount >= noText.length - 1) {
    setNoCount(0);
    add = 0;
  }

  switch (add) {
    case 0:
      setMusic("henesys");
      break;
    case 2:
      setMusic("sleepywood");
      setImg('https://i.pinimg.com/originals/34/3f/18/343f18190d7d7b6e607534071eda6967.gif');
      break;
    case 3:
      setMusic("cygnusgarden");
      setImg('https://media1.tenor.com/m/JbT4JqfvxyEAAAAd/dudu-cry-hay-nako-reika.gif');
      break;
    default:
      break;
  }

}

function handleYesClick(setImg, setText, setMusic, setClickedYes) {
  setImg("./src/assets/images/us.png");
  setText('I LOVE YOU MY VALENTINE!!! 💛');
  setMusic('amoria');
  setClickedYes(true);
}

function App() {
  const noText = [
    "no",
    "HECK no",
    "say yes",
    "please say yes",
    "why aren't u saying yes",
    "be my valentine",
    "joke's over say yes now",
    "haha you're sooo funny",
    "not",
    "you think this keeps going forever don't you",
    "what if this was my last straw?",
    "my 13th reason?",
    "wow i can't believe you still clicked it",
    "please be my valentine :(",
    "T_T",
  ];


  const [noCount, setNoCount] = useState(0);
  const [music, setMusic] = useState("henesys");
  const [img, setImg] = useState(
    "https://i.pinimg.com/originals/ae/f5/00/aef5000829c04e91f0259d58727459a3.gif"
  );
  const [text, setText] = useState('will u 🐝 my valentine?');
  const [clickedYes, setClickedYes] = useState(false);

  return (
    <>
      <div className="container">
        <img src={img} />
        <h1>{text}</h1>

        <div className="btns-container" style={clickedYes ? {display:'none'} : {display:'block'}}>
          <button
            className="btn-yes"
            onClick={() => handleYesClick(setImg, setText, setMusic, setClickedYes)}
          >
            YES!!!
          </button>
          <button
            className="btn-no"
            onClick={() => handleNoClick(noCount, setNoCount, noText, setMusic, setImg)}
          >
            {noText[noCount]}
          </button>
        </div>
          <p className="letter" style={clickedYes ? {display:'block'} : {display:'none'}}>
            My Dearest Bub (and now Valentine),<br></br><br></br>
You are the light of my life. The sole reason I exist. Without you, I would be dust.
  But because of you, I am able to be the Pap to the one spesho Liddo Bub in Da Bub World.
  And now that you're my Valentine, you will get all of Da Spesho Treatment including but not limited to: hwugs, kwisses, cwuddles, pwats, masswages, fwoodies, and da more!!! Thank you for being my Valentine this year, and most of all the person who loves me like no one else.<br></br><br></br>
  Happy Valentines Baby!!!
          </p>
        <audio
          src={`./src/assets/audio/${music}.mp3`}
          autoPlay
          controls
          playsInline
        />
      </div>
    </>
  );
}

export default App;
