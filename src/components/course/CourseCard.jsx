import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const CourseCard = ({course}) => {
  return (
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
          <span className="font-bold text-gray-800">{course.instructor}</span>
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
  )
}

export default CourseCard