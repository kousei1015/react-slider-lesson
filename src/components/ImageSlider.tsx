import React, { useState } from "react";

type Props = {
  slides: string[];
};

const ImageSlider: React.FC<Props> = ({ slides }) => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const toPrevImage = () => {
    index === 0 ? setIndex(slides.length - 1) : setIndex(index - 1);
  };
  const toNextImage = () => {
    index === slides.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  return (
    <div>
      <img src={slides[index]} alt="" />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div onClick={toPrevImage}>&larr;</div>
        <div onClick={toNextImage}>&rarr;</div>
      </div>
    </div>
  );
};

export default ImageSlider;
