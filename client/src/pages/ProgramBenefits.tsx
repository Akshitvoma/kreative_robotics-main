import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const benefits = [
  "Develops Critical Thinking",
  "Strengthens STEM Skills",
  "Develops Self-Confidence",
  "Imparts Practical Knowledge",
  "Promotes Technological Smartness",
  "Inspires Innovation",
  "Improves Problem-Solving Skills",
  "Enhances Creativity",
  "Improves Rational Decision-Making",
  "Improves Perseverance",
];

const cognitiveSkillsLeft = [
  "Understanding of Simple Machines",
  "Basic Engineering",
  "Interest in Technology",
  "Logical Thinking",
  "Analytical Approach",
];

const cognitiveSkillsRight = [
  "Thinking & Motor Skills",
  "Will Power Strengthening",
  "Mathematical Capabilities",
  "Leadership & Planning",
  "Ability to Adapt",
];

export default function ProgramBenefits() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Introduction Section */}
          <section className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  KREATIVE ROBOTICS is a multi-disciplinary robotics & coding
                  program for{" "}
                  <span className="text-accent">
                    STEM skills development
                  </span>{" "}
                  of children
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  In today's rapidly evolving technological landscape, STEM
                  (Science, Technology, Engineering, and Mathematics) education
                  is more critical than ever. It equips the next generation with
                  the essential skills needed to innovate and solve complex
                  challenges.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our program emphasizes hands-on learning through engaging
                  robotics and electronics projects. This approach transforms
                  abstract concepts into tangible outcomes, making learning both
                  fun and effective. Kreative Robotics helps children grow not just
                  academically, but also practically, preparing them for future
                  success.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/KR.jpeg"
                  alt="Children working on robotics kits"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
            </div>
          </section>

          {/* Benefits List Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              KREATIVE ROBOTICS Program Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-accent font-bold text-xl mr-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cognitive Skills Section */}
          <section className="mb-16 md:mb-24 container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                Cognitive Skill Development by Kreative Robotics Program
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <ul className="space-y-4">
                  {cognitiveSkillsLeft.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {cognitiveSkillsRight.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-accent"
                        fill="none"

                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}