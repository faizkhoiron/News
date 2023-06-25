import React from "react";
import MenuNavbar from "../Home/MenuNavbar";
import SearchBox from "../Home/SearchBox";
import SectionOne from "./SectionOne";

export default function DetailScreen() {
  return (
    <section className="bg-gray-300">
      <div className="mx-auto max-w-7xl h-16 p-3 space-y-6">
        <div className="flex items-center gap-6 ">
          <span className="font-bold  bg-black rounded-xl text-white p-2">
            ABC News
          </span>
          <MenuNavbar />
          <SearchBox />
        </div>
        <SectionOne />
      </div>
    </section>
  );
}
