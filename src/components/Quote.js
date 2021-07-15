import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ textColor, quote }) => {
  return (
    <div
      className={`${textColor} font-semibold text-lg flex justify-center flex-col space-y-2`}
    >
      <p id="text" className="text-center">
        <span className="inline-block mr-2">
          <FaQuoteLeft />
        </span>
        {quote.quote}
      </p>
      <span id="author" className="text-sm font-light uppercase text-right">
        - {quote.author}
      </span>
    </div>
  );
};

export default Quote;
