import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <div className="w-full flex justify-between px-7 absolute top-5 left-0">
      <div className="flex justify-center items-center bg-gray-500 bg-opacity-30 rounded-full w-12 h-12">
        <Bars3Icon className="h-10 w-10" />
      </div>
      <div className="text-4xl font-semibold">Buena</div>
    </div>
  );
}

export default Navbar;
