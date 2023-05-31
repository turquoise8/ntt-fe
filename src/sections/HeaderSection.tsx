import CompanyLogo from "../assets/CompanyLogo";
import MenuIcon from "../assets/Menu";
import { IconButton } from "@mui/material";
import Search from "../components/Search";
import { useState } from "react";
import { SwipeableDrawer, Button } from "@mui/material";
import Navbar from "../components/Navbar";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="">
        <div className="flex justify-between items-center w-full md:gap-12 p-4 pt-3 md:p-5">
          <CompanyLogo className="w-36 md:w-40" />
          <Search className="hidden md:flex" />
          <div className="md:hidden">
            <IconButton aria-label="menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Search className="md:hidden" />

        <hr className="border-gray-400 hidden md:block mb-2" />
        <Navbar />
      </header>

      <SwipeableDrawer
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        open={drawerOpen}
        anchor="right"
      >
        <div className="w-screen flex flex-col p-4">
          {["Home", "About", "Contact"].map((item, index) => (
            <Button
              key={index}
              className="text-2xl font-bold text-gray-800 my-4"
            >
              {item}
            </Button>
          ))}
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
