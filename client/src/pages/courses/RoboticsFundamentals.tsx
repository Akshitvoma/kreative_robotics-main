import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoboticsFundamentals() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Robotics Fundamentals</h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            An introductory course to the exciting world of robotics, designed for beginners with a passion for technology.
          </p>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What you will learn:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
              <li>Basic principles of robotics and mechanics</li>
              <li>Understanding sensors, motors, and actuators</li>
              <li>Introduction to block-based programming for robots</li>
              <li>Building and testing your first autonomous robot</li>
              <li>Problem-solving and logical thinking skills</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
