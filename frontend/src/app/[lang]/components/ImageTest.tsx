import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface ImageTestProps {
    data: {
        id: string;
        text: string;
        picture: {
            data: {
                id: string;
                attributes: {
                    url: string;
                }
            }
        }
    }
}

export default function ImageTest ({data}: ImageTestProps) {
    const imageUrl = getStrapiMedia(data.picture.data.attributes.url)
    console.log(imageUrl);
     return (
        <div>
             <Image
            src={imageUrl ?? ""}
            // alt={picture.data?.attributes.alternativeText || "none provided"}
            className="inline-block h-28  rounded-full"
            width={200}
            height={200}
            alt=""
          />
        </div>
     )
}