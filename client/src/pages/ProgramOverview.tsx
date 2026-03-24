import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProgramOverview() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="pt-20">
        {/* Banner Section */}
        <section
          className="relative flex items-center justify-center py-40 md:py-56 pt-32"
        >
          <img
            src="/Banner.png"
            alt="Program Overview Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top section (Introduction) */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Kreative Robotics is a Multi-disciplinary STEM Program for
              Children
            </h1>
            <p className="text-lg text-blue-600 font-semibold">
              Electronics, Robotics, Coding
            </p>
            <p className="text-md text-gray-600">
              Designed for children aged 8–18 years
            </p>
          </div>

          {/* Main content section */}
          <div className="mt-20 space-y-8 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Kreative Robotics introduces children to the exciting world of STEM
              through a hands-on, activity-based curriculum. Our program is
              designed to develop not just technical skills but also critical
              thinking and problem-solving abilities that are essential for the
              future.
            </p>
            <p className="border-l-4 border-blue-500 pl-4 text-xl italic">
              We believe in learning by doing. Our students don't just read about
              technology; they build it.
            </p>
            <p>
              The curriculum is structured to provide a progressive learning path,
              starting from the fundamentals of simple electronics and gradually
              advancing to complex topics like advanced robotics and machine
              learning. This ensures that students build a strong foundation and
              can comfortably tackle more challenging concepts as they move
            </p>
          </div>

          {/* Image gallery section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Inside Kreative Robotics
            </h2>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/Overview 5.jpeg"
                  alt="Students working on a project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {/* Thumbnails */}
                <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/Overview 1.JPG" alt="Overview 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden border-4 border-blue-500">
                  <img src="/Overview.JPG" alt="Overview 5" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/Overview 2.JPG" alt="Overview 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/Overview 3.JPG" alt="Overview 3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/Overview 4.jpeg" alt="Overview 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* "What makes Kreative Robotics unique" section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What makes Kreative Robotics unique & better than other
              Robotics/Coding programs?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Hands-on learning & development:</strong> We focus on
                  practical, project-based learning to build real skills.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Multi-disciplinary STEM curriculum:</strong> Our program
                  integrates electronics, coding, mechanics, and design.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Not just coding:</strong> Students learn about
                  algorithms, design principles, and machine building.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Unique take-home robotics kit:</strong> Learning
                  continues at home with our custom-designed robotics kits.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Soft skills development:</strong> We nurture creativity,
                  teamwork, and communication skills.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <span>
                  <strong>Annual robotics competitions:</strong> A platform for
                  students to showcase their talent and compete with peers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}