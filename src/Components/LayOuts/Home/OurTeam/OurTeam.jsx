import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      delay: 500, // Delay between animations in milliseconds
      offset: 120, // Offset (in pixels) from the element's position before triggering the animation
    });
  }, []);
  const teamMembers = [
    {
      name: "John Doe",
      position: "Manager",
      quote:
        "Leadership is not about being in charge. It is about taking care of those in your charge.",
      avatar: "https://websitedepot.com/wp-content/uploads/2015/07/danny.jpg",
    },
    {
      name: "Jane Smith",
      position: "Developer",
      quote:
        "Coding is an art, and I find joy in bringing ideas to life through lines of code.",
      avatar: "https://websitedepot.com/wp-content/uploads/2016/03/marc-4.jpg",
    },
    {
      name: "David Johnson",
      position: "Designer",
      quote:
        "Design is not just how it looks; it's how it works. Let's create beautiful and functional experiences.",
      avatar: "https://websitedepot.com/wp-content/uploads/2015/07/robert.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-primary text-3xl font-bold text-center mt-32">
        Our Team
      </h1>
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto gap-8">
            {teamMembers.map((member) => (
              <div
                data-aos="zoom-in-up"
                key={member.name}
                className="border border-info p-8 rounded-lg shadow-lg "
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h2 className="text-2xl font-bold text-accent">
                  {member.name}
                </h2>
                <h3 className="text-lg text-gray-500 mb-4">
                  {member.position}
                </h3>
                <p className="text-gray-500 mb-6">{member.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
