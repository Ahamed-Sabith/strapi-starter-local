import arrowIcon from "../assets/arrowup-iocn.png";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Logo {
  id: string;
  picture: {
    data: {
      id: string;
      attributes: {
        url: string;
        alternativeText: string | null;
        width: number;
        height: number;
      };
    };
  };
}

interface TechnologyProps {
  data: {
    id: number;
    heading: string;
    technologies: string;
    logos: Logo[];
  };
}

export default function Technology({ data }: TechnologyProps) {
  return (
    <>
      <div className="bg-[#1F1F1F] pb-20">
        <div className="md:mx-32 mx-14">
          <div className="py-20 grid grid-cols-12">
            <div className="md:col-span-6 col-span-12">
              <p className="lg:text-36 md:text-[20px] text-15">{data.heading}</p>
            </div>
            <div className="flex justify-end md:col-span-6">
              <Image src={arrowIcon} alt="icon" className="hidden lg:block" />
            </div>
          </div>

          <div className="grid grid-cols-6 mb-14">
            {data.logos.map((logo) => {
              const { url, alternativeText, width, height } =
                logo.picture.data.attributes;
              return (
                <div key={logo.id} className="flex justify-center">
                  <Image
                    src={getStrapiMedia(url) || ""}
                    alt={alternativeText || "Logo"}
                    width={width}
                    height={height}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-10">
            <div className="col-span-10">
              <p className="text-center md:text-[20px] text-10 leading-[33px]">
                {data.technologies}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
