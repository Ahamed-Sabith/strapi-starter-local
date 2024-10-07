import { getStrapiMedia, formatDate } from "../utils/api-helpers";
import { useState, useEffect, useCallback } from "react";
import "../style/project.scss";
import { BiPlusMedical } from "react-icons/bi";

interface Logo {
  id: string;
  name: string;
  picture: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface Work {
  id: number;
  attributes: {
    projectName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    smallDescription: string;
    tags: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
export default function projectList({
  data: works,
  children,
}: {
  data: Work[];
  children?: React.ReactNode;
}) {
  return (
    <section id="WorkItem">
      {works.map((work, index) => {
        const imagUrl = getStrapiMedia(
          work.attributes.cover.data.attributes.url
        );

        return (
          <div
            className="project-card mx-3 my-14 flex relative overflow-hidden"
            key={work.id}
          >
            <div className="pic-card">
              <img src={imagUrl || ""} alt="" />
            </div>
            <div className="details-btn bg-green text-black flex items-center ms-4">
              <BiPlusMedical className="text-center"/>
            </div>
            <div className="description-card bg-green text-black hidden">
              <h2 className="text-32 font-bold leading-[40px] mb-10">{work.attributes.projectName}</h2>
              <p className="text-[20px] mb-20">{work.attributes.smallDescription}</p>
              <p className="text-[20px] font-bold">{work.attributes.tags}</p>
            </div>
          </div>
        );
      })}
      {children && children}
    </section>
  );
}
