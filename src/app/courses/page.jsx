
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";


import { getCourses } from "@/utilit/getCoureses";
import CourseCard from "@/components/course/CourseCard";


const AllCoursesPage = async ({ searchParams }) => {
  const allCourses = await getCourses();

  const params = await searchParams;
  const searchQuery = params?.search?.toLowerCase() || "";

  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery) ||
      course.category?.toLowerCase().includes(searchQuery),
  );

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              All <span className="text-orange-600">Courses</span>
            </span>
            <div className="h-1.5 w-20 bg-orange-500 mt-3 rounded-full"></div>
            <p className="mt-4 text-gray-500 font-medium">
              Showing {filteredCourses.length} courses based on your preference.
            </p>
          </div>


          <form className="relative w-full md:w-[450px]">
            <input
              name="search"
              defaultValue={searchQuery}
              placeholder="Search courses or categories..."
              className="w-full pl-14 pr-6 py-5 rounded-4xl border-none bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-700"
            />
            <button
              type="submit"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors"
            >
              <FaSearch size={20} />
            </button>
          </form>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
             <CourseCard course={course} key={index}/>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-dashed border-gray-200">
                <h3 className="text-2xl font-bold text-gray-400 italic">
                  No courses found matching `{searchQuery}`
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCoursesPage;
