import React, { useState } from "react";
import { Arrow, ArrowWrapper, Dot, Image } from "./ImageSliderStyles";

type Props = {
  slides: string[];
};

const ImageSlider: React.FC<Props> = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(selectedIndex);

  const toPrevImage = () => {
    selectedIndex === 0
      ? setSelectedIndex(slides.length - 1)
      : setSelectedIndex(selectedIndex - 1);
  };

  const toNextImage = () => {
    selectedIndex === slides.length - 1
      ? setSelectedIndex(0)
      : setSelectedIndex(selectedIndex + 1);
  };

  const toSelectedImage = (slideIndex: number) => {
    setSelectedIndex(slideIndex);
  };

  return (
    <div>
      {slides.map((slide, slideIndex) => {
        return (
          <div>
            {selectedIndex === slideIndex && (
              <Image
                src={slides[selectedIndex]}
                alt=""
                active={selectedIndex === slideIndex}
              />
            )}
          </div>
        );
      })}
      <ArrowWrapper>
        <Arrow onClick={toPrevImage}>←</Arrow>
        <Arrow onClick={toNextImage}>→</Arrow>
      </ArrowWrapper>

      {slides.map((_, slideIndex) => (
        <Dot
        key={slideIndex}
        active={selectedIndex === slideIndex ? true : false}
        onClick={() => toSelectedImage(slideIndex)}
      >
        ●
      </Dot>
      ))}
    </div>
  );
};

export default ImageSlider;
