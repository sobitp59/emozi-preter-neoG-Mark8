import "./App.css";
import { useState } from "react";



const emojiDic = {
  '🚗' : 'car',
  '🚑' : 'ambulance',
  '🚚' : 'truck',
  '🚲' : 'bicycle',
  '🛵' : 'scooter',
  '🚀' : 'rocket',
  '🛹' : 'skateboard',
  '🚍' : 'bus',
  '🚁' : 'helicopter',
  '🛫' : 'aeroplane',
  '🚤' : 'boat',
  '🚜' : 'tractor',
}

var emojiLists = Object.keys(emojiDic);

function App() {
  const [text, setText] = useState("");


    const inputChangeHandler = (event) => {
    const text = event.target.value;
    var emojiMeaning = emojiDic[text];

    if(emojiMeaning === undefined){
      emojiMeaning = 'please enter other emojis, not in the bucket right now';
    }

    setText(emojiMeaning);
  };

 const emojiClickHandler = (emoji) =>{
  var emojiMeaning = emojiDic[emoji];
  console.log(emojiMeaning)
  setText(emojiMeaning);
 }

  return (
    <>
    <div className="container">
      <div className="top">
        <h1 className="title"> My Vehicles <i class="fa-solid fa-bus"></i> Emozi</h1>
      </div>

      <div className="middle">
        {/* <h2 className="input-title">enter emoji below to see if I have that vehicle or not</h2> */}
        <input
          placeholder="click the emoji below or enter here"
          onChange={inputChangeHandler}
          type="text"
          name=""
          id="inputText"
        />
        <div className="emojiMeaning">{text}</div>
      </div>

      <div className="bottom">
        <ul className="output">
          {
            emojiLists.map(function(emoji){
              return <li onClick={()=> emojiClickHandler(emoji)} className='emojis' key={emoji}>{emoji}</li>
            })
          }
        </ul>
      </div>

      <div className="bottom-b">
        <h3 className="bottom-made-by">made with <i class="fa-solid fa-code"></i> by <a href="https://sobit-prasad.netlify.app">Sobit</a> </h3>
      </div>

      </div>
    </>
  );
}

export default App;
