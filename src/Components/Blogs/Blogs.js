import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="mx-24 my-24">
      <div className="question__one">
        <h1 className="text-4xl text-green-500 mb-8">What is Context API?</h1>
        <p className="text-justify font-medium">
          React এ একটা কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট (Parent - Child) এ ডাটা
          পাঠানোর কাজটা সাধারণত Props এর মাধ্যমে করা হয়ে থাকে।কিন্তু,মাঝে মাঝে
          এমন টাইপের কিছু ডাটা থাকে(যেমনঃ- Local Preferrence,UI Theme) যেগুলো
          Props এর মাধ্যমে Pass করতে গেলে বেশ ঝামেলা পোহাতে হয়।Context API
          এক্ষেত্রে আমাদেরকে সহজেই এই ডাটাগুলো এক কম্পোনেন্ট থেকে অন্য
          কম্পোনেন্ট এ Props এর সাহায্য ছাড়াই Pass করতে সহায়তা করে থাকে।
        </p>
      </div>
      <br />
      <br />
      <div className="question__one">
        <h1 className="text-4xl text-green-500 mb-8">Sementic Tag কী?</h1>
        <p className="text-justify font-medium">
          Sementic Tag হলো বিশেষ ধরণের HTML ট্যাগ যেগুলো ডেভেলপার ও ইউজার উভয়কেই
          ওই ট্যাগ কোন ধরণের কন্টেন্ট বহন করছে সে সম্পর্কে পরিষ্কার ধারণা দেয়।
          যেমনঃ Article ট্যাগ,এটি ব্যবহার করলে বুঝা যায় যে উক্ত ট্যাগটির মধ্যে
          যেকোনো ধরণের আর্টিকেল লিখা হয়েছে। এছাড়াও আরো নানা প্রকারের Semantic
          ট্যাগ এর ব্যবহার রয়েছে।যেমনঃ
          <ul className="text-red-500">
            <li>1)aside</li>
            <li>2)detail</li>
            <li>3)figcaption</li>
            <li>4)figure</li>
            <li>5)footer</li>
            <li>6)header</li>
            <li>7)main</li>
            <li>8)mark</li>
            <li>9)nav</li>
            <li>10)section</li>
            <li>11)summary</li>
            <li>12)time</li>
          </ul>
          ইত্যাদি।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
