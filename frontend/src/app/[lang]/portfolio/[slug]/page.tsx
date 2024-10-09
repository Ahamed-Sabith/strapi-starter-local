"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../../utils/fetch-api";
// import Project from "../views/project-list";
// import Loader from "../components/Loader";
import Details from "../../views/detailsPage";

async function getDetailsBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/project-lists`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      test: { populate: "*" },
      hero: { populate: "*" },
      button: { populate: "*" },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData = await fetchAPI(path, urlParamsObject, options);

  return responseData;
}

export default async function DetailsRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getDetailsBySlug(slug);

  return <Details data={data.data[0]} />;
}
