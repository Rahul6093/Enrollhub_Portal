const journeyData = [
  {
    year: "2018",
    title: "Launch",
    description: "Launched as a tuition matching service in Bangalore."
  },
  {
    year: "2019",
    title: "Service Expansion",
    description: "Added Yoga, Sports & Aptitude Programs to the platform."
  },
  // {
  //   year: "2021",
  //   title: "Pan-India Access",
  //   description: "Revamped platform to support online learning across India."
  // },
  {
    year: "2023",
    title: "10,000+ Learners",
    description: "Achieved a milestone of 10,000+ enrolled students."
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Launching online international learning communities."
  }
];

export function Timeline() {
  return (
  <>
      <h2 className="text-3xl font-bold mb-10">
        🌱 Our Journey So Far
      </h2>

      <div className="overflow-x-auto snap-x scrollbar-hide pb-4">
        <div className="flex justify-around gap-6 *:snap-start w-[400px] ">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:w-64 rounded-2xl p-6 shadow-lg border-l-4"
            >
              <div className=" font-bold text-lg">{item.year}</div>
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
</>
  );
}
