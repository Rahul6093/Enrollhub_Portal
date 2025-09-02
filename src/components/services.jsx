import { useState } from "react";
import { CourseModal } from "./courseModal";

const ServiceCard = ({ image, title, description, tags, onReadMore }) => {
  return (
    <div className="border border-gray-300 rounded-4xl overflow-hidden">
      <div>
        <img className="w-full h-47 object-[25%_75%]" src={image} alt={title} />
      </div>
      <div className="p-5 space-y-2 xl:space-y-4">
        <p className="text-3xl xl:text-2xl font-bold">{title}</p>
        <p className="text-md text-gray-700">{description}</p>
        <div className="*:text-xs *:xl:text-[10px] *:border *:border-black *:rounded-4xl *:py-1 *:px-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <div key={i}>{tag}</div>
          ))}
        </div>
        <button
          onClick={onReadMore}
          className="mt-4 text-blue-600 underline text-sm"
        >
          Read More
        </button>
      </div>
    </div>
  );
};


export const Services = ({ services }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div id='services' className="mx-auto px-10 pt-10 md:px-5 space-y-10 *:w-[100%] *:mx-auto">
      <div className="py-10">
        <p className="text-5xl font-['Petrona']">What we offer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-around gap-10">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            title={service.title}
            description={service.description}
            tags={service.tags}
            onReadMore={() => setSelectedCourse(service)}
          />
        ))}
      </div>

      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
};
