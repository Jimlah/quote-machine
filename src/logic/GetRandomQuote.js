import useGetQuote from "./useGetQuote";

const GetRandomQuote = () => {
  const { quotes, isLoading } = useGetQuote();

  let rand = () => {
    if (!isLoading) {
      return parseInt(Math.random() * quotes.length);
    }
  };

  if (!isLoading) {
    return quotes[rand()];
  }

  return {
    quote: "",
    author: "",
  };
};

export default GetRandomQuote;
