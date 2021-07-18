import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import GetRandomColor from "../logic/GetRandomColor";
import GetRandomQuote from "../logic/GetRandomQuote";
import Quote from "./Quote";

const Panel = ({ handleColorChange }) => {
  let { quo } = GetRandomQuote();
  let col = GetRandomColor();

  let [color, setColor] = useState("purple");
  let [quote, setQuote] = useState(quo);

  useEffect(() => {
    handleColorChange(color);

    // eslint-disable-next-line
  }, [color]);

  const handleSubmit = () => {
    setQuote(quo);
    setColor(col);
  };

  let textColor = `text-${color}-500`;
  let bgColor = `bg-${color}-500`;
  return (
    <div
      className="flex items-center justify-center shadow-md p-5 rounded-md bg-white max-w-md mx-5 flex-col space-y-5 min-w-md"
      id="quote-box"
    >
      {quo && <Quote textColor={textColor} quote={(quote = quo)} />}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start space-x-2">
          <a href="#" className={`text-white p-2.5 rounded-sm ${bgColor}`}>
            <IconContext.Provider value={{ className: "h-5 w-5" }}>
              <FaFacebookF />
            </IconContext.Provider>
          </a>
          <a
            href="twitter.com/intent/tweet"
            className={`text-white p-2.5 rounded-sm ${bgColor}`}
            id="tweet-quote"
          >
            <IconContext.Provider value={{ className: "h-5 w-5" }}>
              <FaTwitter />
            </IconContext.Provider>
          </a>
        </div>
        <button
          id="new-quote"
          onClick={handleSubmit}
          className={`text-white font-bold px-3 py-2 rounded-sm ${bgColor}`}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Panel;
