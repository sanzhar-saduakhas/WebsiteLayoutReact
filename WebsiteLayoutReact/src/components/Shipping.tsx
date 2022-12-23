import { useState } from "react";
import ShippingMethod from "./ShippingMethod";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Shipping = () => {
  const data = [
    {
      idx: 1,
      pos: 1,
      active: true,
      img: "./train.png",
      title: "ЖД перевозки",
      text: "Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры текст.",
    },
    {
      idx: 2,
      pos: 2,
      active: true,
      img: "./automobile.png",
      title: "Автомобильные перевозки",
      text: "Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры текст.",
    },
    {
      idx: 3,
      pos: 3,
      active: true,
      img: "./airplane.png",
      title: "Авиаперевозки (только из КНР)",
      text: "Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры текст.",
    },
  ];

  const [cards, setCards] = useState(data);
  const [animation] = useAutoAnimate<HTMLDivElement>(); 

  const handlePrevClick = () => {
    const prevState = [...cards];
    // 3 -> 2, 2 -> 1, 1 -> 3
    let temp = prevState[1];
    prevState[1] = prevState[2];
    let temp2 = prevState[0];
    prevState[0] = temp;
    prevState[2] = temp2;
    console.log(prevState);
    setCards(prevState);
  };

  const handleNextClick = () => {
    const prevState = [...cards];
    // 1 -> 2, 2 -> 3, 3 -> 1
    let temp = prevState[1];
    prevState[1] = prevState[0];
    let temp2 = prevState[2];
    prevState[2] = temp;
    prevState[0] = temp2;
    setCards(prevState);
  };

  const card = cards.map((item) => (
    <ShippingMethod
      key={item.idx}
      img={item.img}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <div
      id="SHIPPING"
      className="mx-auto flex flex-col items-center mt-[79.29px]"
    >
      <img className="mb-[32.53px]" src="./transition.png" alt="" />
      <h1 className="uppercase font-medium text-[34px] mb-[49.76px]">
        Направления деятельности
      </h1>
      <div className="flex mx-[75px] space-x-[32px]" ref={animation}>{card}</div>
      <div className="flex mt-[35.11px] space-x-[17.74px]">
        <button onClick={() => handlePrevClick()} className="">
          <img className="" src="./button1.png" alt="" />
        </button>
        <img src="./shipping-helper2.png" alt="" />
        <button onClick={() => handleNextClick()}>
          <img src="./button2.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Shipping;
