import { Outlet, Link } from "react-router-dom";
import { GiGymBag } from "react-icons/gi";

const Layout = () => {
  return (
    <div className="w-full overflow-hidden">
      <nav className="bg-black text-white p-4">
        <ul >
          <div className="justify-between gap-10  flex ">
          <div>
            <li className="text-gray-500 hover:text-fuchsia-600 dark:text-gray-400 dark:focus:ring-gray-600 text-xl">
              <Link to="/" className="flex items-center">
                <GiGymBag className="text-fuchsia-400 md:w-10 md:h-8 w-5 h-4" />
                <span className="md:ml-2 md:text-lg text-md">GYMBOO</span>
              </Link>
            </li>
          </div>

          <div className="flex items-center mr-20 md:gap-4">
            <li className="text-gray-500 hover:text-fuchsia-600 hover:border-b dark:text-gray-400 dark:focus:ring-gray-600 md:text-xl text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-500 hover:text-fuchsia-600 hover:border-b dark:text-gray-400 dark:focus:ring-gray-600 ml-4 md:text-xl text-lg">
              <a href="#exercises">Exercise</a>
            </li>
          </div>
          </div>
        </ul>
        
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
