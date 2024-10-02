import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
 
interface PictureAttributes {
  url: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
}
 
interface PictureData {
  id: number;
  attributes: PictureAttributes;
}
 
interface Picture {
  data: PictureData[];
}
 
interface OurClientsProps {
  heading: string;
  picture: Picture;
}
 
export default function OurClients({ data }: { data: OurClientsProps }) {
 
  return (
    <div className="py-10 bg-black">
      <div className="container mx-auto text-center">
        <h2 className=" text-32 text-center pb-6">
          {data.heading}
        </h2>
 
        <div className=" grid lg:grid-cols-6 grid-cols-3 lg:px-32 px-10">
          {data.picture.data.map((image: PictureData) => {
            const imageUrl = getStrapiMedia(image.attributes.url);
            return (
              <div key={image.id} className="m-4">
                <Image
                  src={imageUrl || ""}
                  alt={image.attributes.alternativeText || "Client logo"}
                  width={image.attributes.width}
                  height={image.attributes.height}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

