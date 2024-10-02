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

interface Services {
  id: string;
  heading: string;
  paragraph: string;
  picture: {
    data: {
      id: string;
      attributes: {
        url: string;
        alternativeText: string | null;
        // width: number;
        // height: number;
      };
    };
  };
}

interface ServiceProps {
  data: {
    id: string;
    services: Services[];
    buttons: Button;
  };
}

export default function Service({ data }: ServiceProps) {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.services.map((service, index) => (
          <div key={service.id} className="text-center">
            <div className="md:mb-6">
              <img
                src={getStrapiMedia(service.picture.data.attributes.url) || ""}
                alt={
                  service.picture.data.attributes.alternativeText ||
                  service.heading
                }
              />
            </div>
            <div className="text-start md:px-14">
              <h2 className="lg:text-32 md:text-[18px]font-bold my-16">{service.heading}</h2>
              <p className="lg:text-32 md:text-[18px] ">{service.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}

      <div className="mx-12 mt-32">
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
  );
}
