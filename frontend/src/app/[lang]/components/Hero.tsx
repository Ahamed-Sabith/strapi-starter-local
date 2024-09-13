import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

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

interface HeroProps {
  data: {
    id: string;
    title: string;
    text: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section
      className="container  dark:bg-black dark:text-gray-100 bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${imgUrl || ""})`,
        backgroundPosition: "50% top",
      }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12">
        <div className="flex flex-col justify-start p-6 rounded-lg">
          {/* <HighlightedText
            text={data.title}
            tag="h1"
            className="text-5xl font-bold leading-none sm:text-6xl mb-8"
            color="dark:text-violet-400"
          /> */}
          {/* <h1 className="text-222">{data.title}</h1> */}
          <div className="text-hero mb-5">
            <h1 className="text-green ">DESIGN</h1>
            <h1 className="text-secondary">DEVELOP</h1>
            <h1 className="text-secondary">MENT </h1>
            <h1 className="text-primary">AUGMENT</h1>
            <h1 className="text-primary">ATION </h1>
          </div>
          {/* <HighlightedText
            text={data.text}
            tag="p"
            className="tmt-6 mb-8 text-lg sm:mb-12 text-end"
            color="dark:text-violet-400"
          /> */}
          <div className="mb-10 flex justify-end">
            <p className=" w-7/12 text-32 text-right font-semibold">{data.text}</p>
          </div>
          <div className=" flex lg:justify-end justify-center">
            <div className="px-2 py-4 border-4 border-green rounded-55 ">
              {data.buttons.map((button: Button, index: number) => (
                <Link
                  key={index}
                  href={button.url}
                  target={button.newTab ? "_blank" : "_self"}
                  className={renderButtonStyle(button.type)}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
