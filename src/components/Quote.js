import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ textColor }) => {
  return (
    <div
      className={`${textColor} font-semibold text-lg flex justify-center flex-col space-y-2`}
    >
      <p id="text" className="text-center">
        <span className="inline-block mr-2">
          <FaQuoteLeft />
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        tempora nulla praesentium expedita nam quisquam aliquid consequuntur
        quis? Vel laudantium eos aliquam impedit. Aliquid, ut ipsa autem at
        earum blanditiis!
      </p>
      <span id="author" className="text-sm font-light uppercase text-right">
        - Abdullahi
      </span>
    </div>
  );
};

export default Quote;
