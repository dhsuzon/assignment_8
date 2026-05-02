import { tips } from "@/data/tips";

const LearningTips = () => {

  return (
    <section className="py-10 bg-slate-50 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
        {/* Header - Centered */}
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            📌 Learning <span className="text-orange-600">Tips</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mt-4"></div>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl">
            Master your subjects faster with these proven study and time
            management techniques.
          </p>
        </div>

        {/* Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="group bg-white p-8 rounded-xl  shadow-sm hover:shadow-xl transition-all duration-500 border border-orange-100 flex flex-col h-full items-center md:items-start text-center"
            >
              {/* Icon container with background */}
              <div className="text-5xl mb-6 bg-orange-50 p-4 rounded-full  mx-auto  group-hover:scale-110 transition-transform">
                {tip.icon}
              </div>
              <h3 className="text-2xl mx-auto font-bold text-gray-900 mb-3 uppercase tracking-tight">
                {tip.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
