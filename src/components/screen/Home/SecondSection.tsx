"use client";

import { fetchNewsCategory } from "@/services/newService";
import { FC, useEffect, useState } from "react";

interface FetchSecondSection {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  map: any;
  data: any;
}

interface SecondSectionProps {
  health?: FetchSecondSection;
  sport?: FetchSecondSection;
  technology?: FetchSecondSection;
}

const SecondSection: FC<SecondSectionProps> = () => {
  const [sport, setSport] = useState<any>([]);
  const [technology, setTechnology] = useState<any>([]);
  const [health, setHealth] = useState<any>([]);

  const GetSport = async () => {
    const category = "sport";
    try {
      const response = await fetchNewsCategory(category);
      if (response) {
        setSport("sport");
        setSport(response.articles);
      } else {
        setSport("");
      }
    } catch (error) {
      console.error(error);
      setSport("");
    }
  };

  const GetTechnology = async () => {
    const category = "technology";
    try {
      const response = await fetchNewsCategory(category);
      if (response) {
        setTechnology("technology");
        setTechnology(response.articles);
      } else {
        setTechnology("");
      }
    } catch (error) {
      console.error(error);
      setTechnology("");
    }
  };

  const GetHealth = async () => {
    const category = "health";
    try {
      const response = await fetchNewsCategory(category);
      if (response) {
        setHealth("health");
        setHealth(response.articles);
      } else {
        setHealth("");
      }
    } catch (error) {
      console.error(error);
      setHealth("");
    }
  };

  useEffect(() => {
    GetSport();
    GetTechnology();
    GetHealth();
  }, []);

  return (
    <div className="flex flex-col space-y-6 pb-12">
      <div className="category-1">
        <h1 className="font-bold text-2xl pb-1">Sports</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
          {sport.slice(4, 7).map((data: any, i: number) => (
            <div key={i}>
              <div
                style={{
                  backgroundImage:
                    data?.cover === ""
                      ? "url('')"
                      : `url('${data?.urlToImage}')`,
                }}
                className="p-2 lg:p-3 w-full bg-cover bg-no-repeat bg-center h-80 cursor-pointer"
              >
                <h1 className="font-normal md:font-bold text-white mt-[235px] lg:mt-[275px] truncate bg-black bg-opacity-40 pl-1">
                  {data.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="category-2">
        <h1 className="font-bold text-2xl pb-1">Technology</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
          {technology.slice(4, 7).map((data: any, i: number) => (
            <div key={i}>
              <div
                style={{
                  backgroundImage:
                    data?.cover === ""
                      ? "url('')"
                      : `url('${data?.urlToImage}')`,
                }}
                className="p-2 lg:p-3 w-full bg-cover bg-no-repeat bg-center h-80 cursor-pointer"
              >
                <h1 className="font-normal md:font-bold text-white mt-[280px] lg:mt-[275px] truncate bg-black bg-opacity-40 pl-1">
                  {data.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="category-3">
        <h1 className="font-bold text-2xl pb-1">Health</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
          {health.slice(5, 8).map((data: any, i: number) => (
            <div key={i}>
              <div
                style={{
                  backgroundImage:
                    data?.cover === ""
                      ? "url('')"
                      : `url('${data?.urlToImage}')`,
                }}
                className="p-2 lg:p-3 w-full bg-cover bg-no-repeat bg-center h-80 cursor-pointer"
              >
                <h1 className="font-normal md:font-bold text-white mt-[280px] lg:mt-[275px] truncate bg-black bg-opacity-40 pl-1">
                  {data.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
