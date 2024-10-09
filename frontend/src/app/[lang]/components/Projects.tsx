"use client";
import Image from "next/image";
import pic from "../assets/FMP.png";
import "../style/project.scss";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";
import Project from "../views/project-list";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface ProjectsProps {
  data: {
    id: number;
    heading: string;
    buttons: Button;
  };
}

export default function Projects({ data }: ProjectsProps) {
  
  const [data1, setData1] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/project-lists`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          test: { populate: "*" },
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      setData1(responseData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  return (
    <>
      <div className="mb-10">
        <h2 className="text-[64px] font-bold mx-12 pb-2 uppercase">Recent Work</h2>

        <Project data={data1} />

        <div className="flex  justify-center my-32 ">
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
    </>
  );
}
