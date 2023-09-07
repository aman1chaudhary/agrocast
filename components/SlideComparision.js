import React, { useCallback } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";
import Img1 from "../public/images/compare-slider/original.jpg"
import Img2 from "../public/images/compare-slider/compare.jpg"
import Image from "next/image";

export const CustomHandle = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
            color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
          src={Img1.src}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src={Img2.src}
          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        ...style
      }}
    />
  );
};

export const SlideComparision = () => (
  <div>
    <CustomHandle position={50} />
  </div>
);

