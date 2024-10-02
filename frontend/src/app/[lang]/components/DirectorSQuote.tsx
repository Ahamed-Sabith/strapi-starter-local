import { getStrapiMedia } from "../utils/api-helpers";
import "../style/quote.scss";

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
interface DirectorProps {
  data: {
    id: string;
    author: string;
    quote1: string;
    quote2: string;
    picture: Picture;
  };
}
export default function Director({ data }: DirectorProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <div className="lg:h-[1284px] flex justify-center items-center container-quote relative">
      <img
        src={imgUrl || ""}
        alt={data.picture.data.attributes.alternativeText || ""}
        className="absolute inset-0 w-full h-full object-cover img-bg"
      />
      

      <div className="z-10 lg:px-28 md:py-40 lg:my-0 my-10 py-20 px-12 text-center lg:max-w-[1096px] md:max-w-[700px] max-w-[380px] background-blur border-[1px] border-white rounded-[31px] relative">
        <p className="text-black font-bold lg:text-36 sm:text-12 mb-14 text-start">
          {data.quote1}
        </p>
        <p className="text-black font-bold lg:text-36 sm:text-12 text-start">
          {data.quote2}
        </p>
        <p className="text-black font-normal lg:text-36 sm:text-12 mt-6 text-end">
          - {data.author}
        </p>
      </div>
    </div>
  );
}
