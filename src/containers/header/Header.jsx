import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Create something extraordinary with GPT-3 from OpenAI.
        </h1>
        <p>
        With GPT-3, you can tap into the most advanced language processing technology available today, allowing you to create content, generate code, and even build conversational interfaces with unparalleled speed and efficiency. 
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

       
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
