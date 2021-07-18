import { useEffect, useState } from "react";
import useGetQuote from "./useGetQuote";

const GetRandomQuote = () => {
  const { quotes, isLoading } = useGetQuote();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(quotes);
  }, [quotes]);

  let rand = () => {
    if (!isLoading) {
      return parseInt(Math.random() * quotes.length);
    }
  };

  let randNum = rand();
  let quo = data[randNum];

  return { quo: quo, isLoading: isLoading };
};

export default GetRandomQuote;
