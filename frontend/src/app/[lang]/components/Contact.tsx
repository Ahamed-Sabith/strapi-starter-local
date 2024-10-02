import Image from "next/image";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";
import { getStrapiMedia } from "../utils/api-helpers";

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

interface ContactProps {
  data: {
    id: string;
    heading: string;
    buttons: Button[];
    picture: Picture;
  };
}

export default function Contact({ data }: ContactProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  return (
    <>
      <div  style={{
          backgroundImage: `url(${imgUrl || ""})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
      <div className="py-20 px-12" >
        <div className="flex justify-center">
          <p className="md:text-[64px] text-[24px] uppercase leading-[66px] mb-14">{data.heading}</p>
        </div>
        <div className="flex  justify-center lg:space-x-72 md:space-x-52 space-x-5 ">
          {data.buttons.map((button) => (
            <div
              key={button.id}
              className="primary-btn"
            >
              <Link
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
