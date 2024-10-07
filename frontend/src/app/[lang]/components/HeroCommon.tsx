import Link from "next/link";
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

interface HeroCommonProps {
  data: {
    id: string;
    heading: string;
    description: string;
    picture: Picture;
    buttons: Button;
  };
}
export default function HeroCommon({ data }: HeroCommonProps) {
  const imageUrl = getStrapiMedia(data.picture.data.attributes.url);
  return (
    <>
      <section
        className="container  dark:bg-black dark:text-gray-100 bg-no-repeat bg-cover overflow-hidden pb-60"
        style={{
          backgroundImage: `url(${imageUrl || ""})`,
          backgroundPosition: "50% top",
        }}
      >
        <div className="container flex flex-col justify-center md:p-3 md:mt-20  mx-auto sm:py-12 md:m-0 mt-16">
          <div className="flex flex-col justify-start p-6 rounded-lg">
            <div className="text-hero mb-5">
              <h2 className="uppercase">{data.heading}</h2>
            </div>
            <p className="text-32  leading-[77px]">{data.description}</p>

            <div className="mt-10">
              <div className="flex lg:justify-start justify-center">
                <div className="primary-btn ">
                  <Link
                    href={data.buttons.url}
                    target={data.buttons.newTab ? "_blank" : "_self"}
                    className={renderButtonStyle(data.buttons.type)}
                  >
                    {data.buttons.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
