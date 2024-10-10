import { useEffect, useState } from "react";

const allImages = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/300?grayscale"
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/id/1/200/300"
  }
];

export const RemoveImage = () => {
  const [state, setState] = useState([]);

  const handleClick = (img: string) => {
    setState(state.filter((el: string) => el !== img));
  }

  useEffect(() => {
        setState(allImages);
      }, []);

  return (
    <div>
      {state.map((img: string) => (
        <div>
          <img src={img}/>
          <button onClick={() => {handleClick(img)}}>X</button>
        </div>
      ))}
    </div>
  );
};