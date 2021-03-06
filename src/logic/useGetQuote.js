import { useEffect, useState } from "react";

const useGetQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching API");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setQuotes(data.quotes);
      })
      .catch((e) => console.log("Api not loaded"));
    // eslint-disable-next-line
  }, []);

  return { quotes, isLoading };
};

export default useGetQuote;
