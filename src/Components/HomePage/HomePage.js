import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center align-center">
      <div className="mt-64 ml-16">
        <h1 className="text-6xl font-semibold text-green-400 mb-4">
          Best Laptop
        </h1>
        <h1 className="text-6xl font-semibold text-black">Best Deal</h1>
      </div>
      <div>
        <img
          src={
            "https://img.freepik.com/free-photo/young-blackhaired-man-demonstrating-something-bright-laptop_231208-2322.jpg?w=996&t=st=1649055273~exp=1649055873~hmac=966ad07e61beb3c855deca1352779b0f74630dbe9fb7e6749bb9f80138c88c86"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
