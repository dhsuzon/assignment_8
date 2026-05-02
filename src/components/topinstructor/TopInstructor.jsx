
import Image from "next/image";
import { instructors } from "@/data/InstrcutorData";


const TopInstructors = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            🏆 Meet Our <span className="text-orange-600">Top Instructors</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
            Learn from industry veterans who lead our most popular courses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-orange-100 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>

                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-xl bg-gray-50">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors text-center">
                {instructor.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-4 text-center px-4">
                {instructor.role}
              </p>
              <div className="mt-auto">
                <span className="bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-orange-100 shadow-sm">
                  {instructor.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
