import Image from "next/image";
import pic from "../assets/FMP.png";
import "../style/project.scss";

interface Projects {
  id: number;
  projectHeading: string;
  description: string;
  tags: string;
  picture: {
    data: {
      id: string;
      attributes: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
}
interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface ProjectProps {
  data: {
    id: number;
    heading: string;
    buttons: Button;
    projects: Projects[];
  };
}

export default function Projects({ data }: ProjectProps) {

  return (
    <>
      <div className="mb-10">
        <h2 className="text-[64px] font-bold mx-12 pb-2">{data.heading}</h2>
        <div className="project-card mx-5 flex relative overflow-hidden">
          <div className="pic-card">
            <Image src={pic} alt="" />
          </div>
          <div className="details-btn bg-green text-black flex items-center ms-4 ">
            FMP
          </div>
        </div>
      </div>
    </>
  );
}
