import { getStrapiMedia } from "../utils/api-helpers";

interface Project {
  id: number;
  attributes: {
    hero: {
      heading: string;
      tags: string;
      richText: string;
      button: {
        newTab: boolean;
        text: string;
        type: string;
        url: string;
      };
      picture: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

export default function detailsPage({ data }: { data: Project }) {
  console.log(data.attributes.hero.heading);
  const imageUrl = getStrapiMedia(data.attributes.hero.picture.data.attributes.url)
  console.log(imageUrl);
  
  return (
    <>
      <p>hey</p>
    </>
  );
}
