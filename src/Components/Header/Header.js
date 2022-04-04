import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="flex gap-4 text-xl md:gap-36 ml-auto mr-auto font-medium">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">DashBoard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
