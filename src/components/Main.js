import { useState } from "react";
import Panel from "./Panel";

const Main = () => {
  const [color, setColor] = useState(null);

  const handleColorChange = (color) => setColor(color);

  let bgColor = `bg-${color}-500`;
  return (
    <div className={`flex items-center justify-center h-screen ${bgColor}`}>
      <Panel handleColorChange={handleColorChange} />
    </div>
  );
};

export default Main;
