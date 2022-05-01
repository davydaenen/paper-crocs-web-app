import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = ({}) => {
  return (
    <div className="h-44 relative">
      <Image
        src="/static/media/paperdrop.jpg"
        alt="paperdrop"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 75%"
      />
    </div>
  );
};

export default Banner;
