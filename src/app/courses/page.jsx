
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";


import { getCourses } from "@/utilit/getCoureses";


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
              <div
                key={course.id}
                className="group bg-white rounded-lg p-4 shadow-[0_5px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)] transition-all duration-500 border border-gray-100 flex flex-col h-full overflow-hidden"
              >
            
                <div className="relative h-56 w-full overflow-hidden rounded-lg">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                   loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-sm flex items-center gap-1">
                    <span className="text-yellow-500 font-bold text-sm">
                      ⭐ {course.rating}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="mb-3">
                    <span className="bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {course.category || "Development"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6">
                    Instructor:{" "}
                    <span className="font-bold text-gray-800">
                      {course.instructor}
                    </span>
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex items-center justify-center w-full py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (

            <div className="col-span-full text-center py-20">
              <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-dashed border-gray-200">
                <h3 className="text-2xl font-bold text-gray-400 italic">
                  No courses found matching "{searchQuery}"
                </h3>
                <Link
                  href="/courses"
                  className="mt-4 inline-block text-orange-600 font-bold hover:underline"
                >
                  View all courses
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCoursesPage;
