import { Contact } from './contact';
import { HeroSection } from './heroSection';
import { Services } from './services';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { getServiceList } from './serviceList';
import { LandingBanner } from './LandingBanner';

export const Mainpage = () => {
  const storedCourses = JSON.parse(localStorage.getItem("courseList")) || getServiceList();
  const activeCourses = storedCourses.filter(course => course.active);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Services services={activeCourses} />
      <LandingBanner/>
      <Contact />
      <Footer />
    </>
  );
};
