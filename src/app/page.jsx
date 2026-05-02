import HeroSlider from "@/components/banner/HeroSlider";
import LearningTips from "@/components/learningTips/LearningTips";
import PopularCourses from "@/components/popularcourses/PopularCourses";
import TopInstructors from "@/components/topinstructor/TopInstructor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex mt-2 justify-center items-center">
        <HeroSlider />
      </div>
      <div className="flex justify-center items-center">
        <PopularCourses />
      </div>
      <div className="">
        <LearningTips />
      </div>
      <div className="">
        <TopInstructors/>
      </div>
    </>
  );
}
