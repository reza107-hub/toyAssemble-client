import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogOut = () => {
    logOut();
  };
  return (
    <nav className="container mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-20"
                src="https://i.ibb.co/1vm9nDn/OIG-removebg-preview.png"
                alt="Website Logo"
              />
            </div>
            <div>
              <Link to="/">
                <h1 className="ml-4 text-primary text-xl font-bold">
                  ToyAssemble
                </h1>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-neutral hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-neutral hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                All Toys
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    to="/myToys"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium"
                        : "text-neutral hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    to="/addToy"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium"
                        : "text-neutral hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Add Toy
                  </NavLink>
                </>
              ) : (
                <></>
              )}
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-neutral hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Blogs
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="hidden md:block">
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary normal-case font-bold"
                >
                  Log out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary normal-case font-bold">
                    Log in
                  </button>
                </Link>
              )}
            </div>
            {user ? (
              <>
                <div
                  className="avatar tooltip tooltip-bottom hidden md:block"
                  data-tip={user?.displayName}
                >
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex md:hidden">
            <button
              className="text-neutral hover:text-gray-400"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? "z-0" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "isActiveForMobile" : "inMenuBar"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="allToys"
            className={({ isActive }) =>
              isActive ? "isActiveForMobile" : "inMenuBar"
            }
          >
            All Toys
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="myToys"
                className={({ isActive }) =>
                  isActive ? "isActiveForMobile" : "inMenuBar"
                }
              >
                My Toys
              </NavLink>
              <NavLink
                to="addToy"
                className={({ isActive }) =>
                  isActive ? "isActiveForMobile" : "inMenuBar"
                }
              >
                Add Toy
              </NavLink>
            </>
          ) : (
            <></>
          )}
          <NavLink
            to="blogs"
            className={({ isActive }) =>
              isActive ? "isActiveForMobile" : "inMenuBar"
            }
          >
            Blogs
          </NavLink>
          {user ? (
            <button
              onClick={handleLogOut}
              className="menuBarBtn"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="menuBarBtn">
                Log in
              </button>
            </Link>
          )}
        </div>
        {user ? (
          <div
            className="avatar tooltip tooltip-right px-3 py-2"
            data-tip={user?.displayName}
          >
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
