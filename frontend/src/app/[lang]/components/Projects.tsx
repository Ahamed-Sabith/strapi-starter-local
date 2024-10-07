"use client";
import Image from "next/image";
import pic from "../assets/FMP.png";
import "../style/project.scss";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";
import Project from "../project-list/project-list"

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface ProjectProps {
  data1: {
    id: number;
    heading: string;
    buttons: Button;

  };
}

export default function Projects({ data1 }: ProjectProps) {
  const [data, setData] = useState<any>([]);
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
          console.log('responseData', responseData.data);
          setData(responseData.data);

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
        <h2 className="text-[64px] font-bold mx-12 pb-2">Recent Work</h2>
        
        <Project data={data}/>
      </div>
    </>
  );
}
