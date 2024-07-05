import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMod, setAddMod] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search Icon" />
          <input type="text" placeholder="Search Here" />
        </div>
        <div className="addIcon">
          <img src={addMod ? "./minus.png" : "./plus.png"} alt="Pluss Icon" onClick={() => setAddMod((prev) => !prev)} />
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user avatar" />
        <div className="texts">
          <span>Jone Deo</span>
          <p>Message</p>
        </div>
      </div>

    </div>
  );
};

export default ChatList;
