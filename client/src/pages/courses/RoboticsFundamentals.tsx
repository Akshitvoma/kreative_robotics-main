import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoboticsFundamentals() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Robotics Fundamentals</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center leading-relaxed">
              An introductory course to the exciting world of robotics, designed for beginners with a passion for technology.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is Robotics?</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Robotics is a field of engineering and science that deals with the design, construction, operation, and use of robots. Robots are programmable machines that can perform a series of actions automatically.
                </p>
              </div>
              <img
                src="/RF.jpeg"
                alt="Robotics Fundamentals"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">What Students Will Learn</h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground/80">
                <li className="bg-primary/5 p-4 rounded-lg">Basic principles of robotics and mechanics</li>
                <li className="bg-primary/5 p-4 rounded-lg">Understanding sensors, motors, and actuators</li>
                <li className="bg-primary/5 p-4 rounded-lg">Introduction to block-based programming for robots</li>
                <li className="bg-primary/5 p-4 rounded-lg">Building and testing your first autonomous robot</li>
                <li className="bg-primary/5 p-4 rounded-lg">Problem-solving and logical thinking skills</li>
                <li className="bg-primary/5 p-4 rounded-lg">From idea to a physical, working robot.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src="/RF1.jpeg"
                alt="Robotics tools and components"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Tools & Skills Covered</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Students will get hands-on experience with beginner-friendly robotics kits and software.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                  <li>Robotics Kits</li>
                  <li>Block-based programming software</li>
                  <li>Basic mechanical assembly</li>
                  <li>Sensor calibration and testing</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Learn Robotics Fundamentals at Kreative Robotics?</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Our Robotics Fundamentals course is the perfect starting point for your journey into robotics. We focus on hands-on learning, allowing students to build and program their own robots. It's a fun and engaging way to learn the basics of engineering and programming.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}