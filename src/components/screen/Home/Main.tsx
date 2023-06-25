import FirstSection from "./FirstSection";
import MenuNavbar from "./MenuNavbar";
import SearchBox from "./SearchBox";
import SecondSection from "./SecondSection";

export default function MainScreen() {
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
        <FirstSection />
        <SecondSection />
      </div>
    </section>
  );
}
