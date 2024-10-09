"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";
import Project from "../views/project-list";
import Loader from "../components/Loader";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}
export default function Portfolio() {
  const [meta, setMeta] = useState<Meta | undefined>();
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
          hero: {populate: "*" },
          button: {populate: "*" }
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      console.log("responseData", responseData.data);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }
  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;
  
  return (
    <>
      <div className="mb-10">
        <Project data={data}>
          {meta!.pagination.start + meta!.pagination.limit <
            meta!.pagination.total && (
            <div className="flex justify-center">
              <button
                type="button"
                className="md:px-16 px-2 py-2 lg:text-lg md:text-15 text-12 font-semibold  border-4 border-grey rounded-3xl hover:underline"
                onClick={loadMorePosts}
              >
                Load more posts...
              </button>
            </div>
          )}
        </Project>
      </div>
    </>
  );
}
