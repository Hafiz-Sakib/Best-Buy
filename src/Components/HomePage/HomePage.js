import React from "react";
import useReviews from "../../Hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const HomePage = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="md:flex justify-center align-center mt-14">
        <div className="md:ml-16 w-1/2 mt-24">
          <h1 className="md:text-6xl font-semibold text-green-400 mb-4">
            Best Laptop
          </h1>
          <h1 className="md:text-6xl font-semibold text-black mb-8 ">
            Best Deal
          </h1>
          <p className="text-justify">
            We provide a fast, secure, and convenient online shopping experience
            with a broad product offering in categories ranging from desktop PC,
            laptop to office equipment, camera, and smart devices. We Are always
            endeavoring to offer its customers the best possible facility –
            including multiple payment options, EMI Facility, best price, cash
            on delivery, delivery in 64 districts, free home delivery inside
            Dhaka and Chattogram city, 24/7 online support, and extensive
            customer service and warranty commitments.
          </p>
        </div>
        <div className="md:w-1/2 mb-16 bg-white">
          <img
            src={
              "https://img.freepik.com/free-photo/young-blackhaired-man-demonstrating-something-bright-laptop_231208-2322.jpg?w=996&t=st=1649055273~exp=1649055873~hmac=966ad07e61beb3c855deca1352779b0f74630dbe9fb7e6749bb9f80138c88c86"
            }
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center text-green-400 mb-24">
          Customer's Reviews
        </h1>
        <div className="md:grid grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
