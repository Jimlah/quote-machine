import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Quote from "./Quote";

const Panel = ({ handleColorChange }) => {
  const [color, setColor] = useState("purple");
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getQuote();
  }, [quote]);

  const getQuote = async () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    let response = await fetch(url);
    let result = await response.json();
    setQuote(result);
    console.log(result);
  };

  useEffect(() => {
    handleColorChange(color);
  });

  let textColor = `text-${color}-500`;
  let bgColor = `bg-${color}-500`;
  return (
    <div
      className="flex items-center justify-center shadow-md p-5 rounded-md bg-white max-w-md mx-5 flex-col space-y-5"
      id="quote-box"
    >
      <Quote textColor={textColor} />
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start space-x-2">
          <a href="#" className={`text-white p-2 ${bgColor}`}>
            <IconContext.Provider value={{ className: "h-5 w-5" }}>
              <FaFacebookF />
            </IconContext.Provider>
          </a>
          <a
            href="twitter.com/intent/tweet"
            className={`text-white p-2 ${bgColor}`}
            id="tweet-quote"
          >
            <IconContext.Provider value={{ className: "h-5 w-5" }}>
              <FaTwitter />
            </IconContext.Provider>
          </a>
        </div>
        <button
          id="new-quote"
          className={`text-white font-bold px-3 py-2 ${bgColor}`}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Panel;
