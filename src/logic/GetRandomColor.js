const GetRandomColor = () => {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const randomColor = parseInt(Math.random() * colors.length);

  return colors[randomColor];
};

export default GetRandomColor;
