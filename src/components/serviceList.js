export const serviceList = [
  // 🎓 Academic Support
  {
    name: "Academic Support",
    courses: [
      {
        image: "/assets/tuition.jpg",
        title: "Tuition Programs",
        name: "tuition",
        description: "Get subject-wise coaching from verified tutors for school and college-level courses.",
        tags: ["Group or 1-on-1", "Weekly assessments", "Offline or Online"],
        service: "Academic Support"
      },
      {
        image: "/assets/homework.jpg",
        title: "Homework Help",
        name: "homework",
        description: "Daily/weekly homework support for school students with academic doubts cleared live.",
        tags: ["Daily Help", "K-12", "Quick Doubt Solving"],
        service: "Academic Support"
      }
    ]
  },
  {
    name: "Wellness & Fitness",
    courses: [
      {
        image: "/assets/yoga.jpg",
        title: "Yoga & Meditation",
        name: "yoga",
        description: "Guided sessions for flexibility, mindfulness, and mental clarity by certified instructors.",
        tags: ["Stress Relief", "Pranayama", "Weekend or Daily"],
        service: "Wellness & Fitness"
      },
      {
        image: "/assets/fitness.jpg",
        title: "Fitness Training",
        name: "fitness",
        description: "Join functional training, weight loss, and strength-building programs with personal trainers.",
        tags: ["Home/Outdoor", "Strength & Cardio", "Certified Coaches"],
        service: "Wellness & Fitness"
      },
      {
        image: "/assets/diet.jpg",
        title: "Diet & Nutrition",
        name: "nutrition",
        description: "Get personalized diet plans and health consultations for kids, teens, and adults.",
        tags: ["Custom Diet Plan", "Nutrition Experts", "Health First"],
        service: "Wellness & Fitness"
      }
    ]
  },
  {
    name: "Sports Coaching",
    courses: [
      {
        image: "/assets/sports.jpg",
        title: "Sports Coaching",
        name: "sports",
        description: "Train in your favorite sport with experienced coaches in football, cricket, badminton & more.",
        tags: ["All Ages", "Fitness + Skills", "Pro Coaches"],
        service: "Sports Coaching"
      },
      {
        image: "/assets/martial_arts.jpg",
        title: "Martial Arts",
        name: "martial_arts",
        description: "Karate, Taekwondo, and self-defense classes from belt-certified masters.",
        tags: ["Discipline", "Self-Defense", "Age 6+"],
        service: "Sports Coaching"
      }
    ]
  },
  {
    name: "Aptitude & Skills",
    courses: [
      {
        image: "/assets/aptitude.jpg",
        title: "Aptitude Training",
        name: "aptitude",
        description: "Build reasoning, verbal and problem-solving skills for competitive exams.",
        tags: ["Logical Practice", "Mocks Weekly", "Exam Prep"],
        service: "Aptitude & Skills"
      },
      {
        image: "/assets/kids_coding.jpg",
        title: "Coding for Kids",
        name: "coding_kids",
        description: "Learn the basics of programming with fun and engaging projects in Scratch, Python & more.",
        tags: ["Scratch & Python", "Age 8+", "Games & Apps"],
        service: "Aptitude & Skills"
      },
      {
        image: "/assets/public_speaking.jpg",
        title: "Public Speaking",
        name: "public_speaking",
        description: "Improve communication skills, stage confidence, and spoken English through guided practice.",
        tags: ["Confidence", "Interactive", "Speech Contests"],
        service: "Aptitude & Skills"
      }
    ]
  },
  {
    name: "Creative Arts",
    courses: [
      {
        image: "/assets/music.jpg",
        title: "Music Classes",
        name: "music",
        description: "Learn instruments like guitar, keyboard, and vocal training with expert musicians.",
        tags: ["Beginner to Pro", "Carnatic & Western", "Live or Recorded"],
        service: "Creative Arts"
      },
      {
        image: "/assets/art.jpg",
        title: "Art & Drawing",
        name: "art",
        description: "Explore creativity through sketching, painting, and digital art techniques.",
        tags: ["All Skill Levels", "Canvas & Digital", "Certified Instructors"],
        service: "Creative Arts"
      },
      {
        image: "/assets/dance.jpg",
        title: "Dance Programs",
        name: "dance",
        description: "From Bharatanatyam to Hip-Hop, find dance classes for all age groups and levels.",
        tags: ["Classical & Western", "Annual Showcases", "Fun & Fitness"],
        service: "Creative Arts"
      }
    ]
  },
  {
    name: "Professional Preparation",
    courses: [
      {
        image: "/assets/ielts.jpg",
        title: "IELTS/TOEFL Coaching",
        name: "ielts",
        description: "Score high in global English proficiency tests with mock sessions and grammar mastery.",
        tags: ["Academic & General", "Speaking Practice", "Score Guaranteed"],
        service: "Professional Preparation"
      },
      {
        image: "/assets/soft_skill.jpg",
        title: "Soft Skills Training",
        name: "soft_skills",
        description: "Enhance your employability through sessions on leadership, communication & emotional IQ.",
        tags: ["Career Skills", "Workplace Ready", "Interactive"],
        service: "Professional Preparation"
      },
      {
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        title: "Internship Mentorship",
        name: "internship",
        description: "Personal guidance on resume building, internship sourcing, and career planning.",
        tags: ["Profile Review", "Mock Interviews", "Job-Ready Skills"],
        service: "Professional Preparation"
      }
    ]
  }
];

export function getServiceList() {
  return serviceList.flatMap(service => service.courses.map(course => ({
    ...course,
    service: service.name,
    id: course.name,
    active: true,
  })));
}
