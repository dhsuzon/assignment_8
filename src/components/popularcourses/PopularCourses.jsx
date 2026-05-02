import Image from "next/image";
import Link from "next/link";

const TopThreeCourse = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/courses.json`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Course fetch failed:", error);
    return [];
  }
};

const PopularCourses = async () => {
  const allCourses = await TopThreeCourse();
  const popularCourses = (allCourses || [])
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-10 bg-white w-full">
      
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            🔥 Popular <span className="text-orange-600">Courses</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 text-lg md:text-xl">
            Start your journey with our top-rated courses and expert-led
            training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {popularCourses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-[2.5rem] p-4 shadow-[0_5px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)] transition-all duration-500 border border-gray-100 flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-60 w-full overflow-hidden rounded-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
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

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
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
                    href={`/`}
                    className="flex items-center justify-center w-full py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularCourses;
