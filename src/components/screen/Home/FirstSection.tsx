"use client";

import { fetchNews } from "@/services/newService";
import React, { FC, useEffect, useState } from "react";

interface FirstSectionProps {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
}

const FirstSection: FC<FirstSectionProps> = () => {
  const [news, setNews] = useState<any>([]);
  const GetNews = async () => {
    const response = await fetchNews();
    if (response) {
      setNews(response.data.articles);
    } else {
      setNews(0);
    }
  };

  useEffect(() => {
    GetNews();
  }, []);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
      <div className="flex">
        {news.slice(0, 1).map((data: any, i: number) => (
          <div key={i}>
            <div
              style={{
                backgroundImage:
                  data?.cover === "" ? "url('')" : `url('${data?.urlToImage}')`,
              }}
              className="p-2 lg:p-3 w-full bg-cover bg-no-repeat bg-center h-48 md:h-72 lg:h-full cursor-pointer"
            >
              <div className="bg-black bg-opacity-40 pl-1">
                <h1 className="font-normal md:font-bold text-white mt-[130px] md:mt-[230px]">
                  {data.title}
                </h1>
                <p className="hidden md:flex font-normal text-white">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
        {news.slice(1, 5).map((data: any, i: number) => (
          <div key={i}>
            <div
              style={{
                backgroundImage:
                  data?.cover === "" ? "url('')" : `url('${data?.urlToImage}')`,
              }}
              className="p-2 w-full bg-cover bg-no-repeat bg-center h-48 md:h-40 "
            >
              <h1 className="text-sm font-medium text-white mt-[135px] md:mt-[105px] bg-black bg-opacity-40 pl-1 ">
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FirstSection;
