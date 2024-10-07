import { getStrapiMedia } from "../utils/api-helpers";
import "../style/direction.scss";
import Image from "next/image";
import arrowIcon from "../assets/arrow-pic.png"


interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface DirectionProps {
  data: {
    id: string;
    text1: string;
    text2: string;
    picture: Picture;
  };
}

export default function Direction({ data }: DirectionProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <div>
      <div
        className="lg:pt-20 pt-10 background-img flex justify-between "
        style={{
          backgroundImage: `url(${imgUrl || ""})`
        }}
      >
        <div className="arrow-container w-3/12 lg:ms-32 ms-10">
          <div className="arrow-icon">
            <Image src={arrowIcon} alt="arrow icon" className="lg:ms-[34px] arrow-icon"/>
          </div>
        </div>

        <div className="mb-10 w-8/12 text-right lg:me-32 me-12">
          <p className="lg:text-48 md:text-[19px] sm:text-13 font-bold text-white ">{data.text1}</p>
        </div>
      </div>

      <div className="bg-white">
        <div className="lg:py-20 py-10 lg:pb-40 flex justify-end lg:me-32 me-12">
          <p className="w-8/12 lg:text-32 md:text-[19px] sm:text-13 text-right text-greySecondary">
            {data.text2}
          </p>
        </div>
      </div>
    </div>
  );
}
