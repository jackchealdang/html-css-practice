import { useEffect, useState, useRef } from "react";
import "./App.css";

function handleNoClick(noCount, setNoCount, noText, setMusic, curr) {
  setNoCount(noCount + 1);
  if (noCount >= noText.length - 1) {
    setNoCount(0);
  }

  console.log(curr);
  switch (curr) {
    case 0:
      setMusic('henesys');
      break;
    case 1:
      setMusic('sleepywood');
      break;
    case 2:
      setMusic('cygnusgarden');
      break;
    default:
      setMusic('henesys');
  }
    
}

function App() {
  const noText = [
    "no",
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
  ];

  const [noCount, setNoCount] = useState(0);
  const [music, setMusic] = useState("henesys");
  const stateRef = useRef<number>(noCount);
  stateRef.current = noCount;

  return (
    <>
      <div className="container">
        <h1>will u 🐝 my valentine?</h1>

        <div className="btns-container">
          <button className="btn-yes">yes</button>
          <button
            className="btn-no"
            onClick={() => handleNoClick(noCount, setNoCount, noText, setMusic, stateRef.current)}
          >
            {noText[noCount]}
          </button>
        </div>
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
