import { useState } from "react";

const API_URL = "https://dog.ceo/api/breed/labrador/images/random/6";
const data = {
  message: [
    "https://images.dog.ceo/breeds/labrador/n02099712_129.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_1660.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_2938.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_475.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_5965.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg",
  ],
  status: "success",
};

export const ImageList = () => {
  const [state, setState] = useState(data.message);

  //   const handleClick = (img: string) => {
  //     const newState: string[] = [];

  //     state.forEach(el => {
  //         if(el === img) {
  //             return
  //         }
  //         newState.push(el);
  //     })

  //     setState(newState)
  //   }

  const handleClick = (img: string) => {
    setState(state.filter((el) => el !== img));
  };

  return (
    <div>
      {state.map((img) => (
        <div key={img}>
          <img src={img} />
          <button
            onClick={() => {
              handleClick(img);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
