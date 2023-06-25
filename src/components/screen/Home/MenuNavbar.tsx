export default function MenuNavbar() {
  return (
    <>
      <div className="hidden lg:flex flex-row items-center gap-4 font-medium">
        <h2 className="cursor-pointer hover:text-blue-500">Sports</h2>
        <h2 className="cursor-pointer hover:text-blue-500">Business</h2>
        <h2 className="cursor-pointer hover:text-blue-500">Entertainment</h2>
        <h2 className="cursor-pointer hover:text-blue-500">General</h2>
        <h2 className="cursor-pointer hover:text-blue-500">Health</h2>
        <h2 className="cursor-pointer hover:text-blue-500">Science</h2>
        <h2 className="cursor-pointer hover:text-blue-500">Technology</h2>
      </div>
    </>
  );
}
