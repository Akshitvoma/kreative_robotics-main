import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoboticsKit() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Top hero section */}
        <section
          className="relative flex items-center justify-center py-40 md:py-56 pt-32"
        >
            <img 
                src="/Banner.png" 
                alt="Robotics Kit Banner" 
                className="absolute inset-0 w-full h-full object-cover" 
            />

        </section>

        {/* Intro content section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-left space-y-6 text-lg text-foreground/80 leading-relaxed">
            <h1 className="text-4xl md:text-6xl font-semibold text-accent tracking-tight mb-12 text-center">
              Takeaway Robotics Kits for Kids
            </h1>
            <p>
              Our takeaway robotics kits are designed to bring the world of
              STEM directly into your home. Each kit is a self-contained
              project, providing all the components and instructions needed for
              your child to build a functioning robot from scratch. It’s a
              perfect way to introduce them to engineering and programming in a
              fun, hands-on way.
            </p>
            <p>
              We offer level-wise kits that cater to different age groups and
              skill levels, from beginners to advanced young innovators. As
              your child progresses, the complexity of the projects grows,
              introducing new concepts and challenges that keep them engaged and
              constantly learning.
            </p>
            <p>
              The core of our philosophy is learning by doing. These kits
              encourage hands-on exploration and foster creativity, allowing
              children to see the direct results of their work. They are not
              just assembling a toy; they are building a piece of technology,
              learning to troubleshoot, and understanding how different
              components work together.
            </p>
            <p>
              With a Kreative Robotics kit, your child has the freedom to
              build, test, and innovate at their own pace. The experience goes
              beyond the initial assembly, inspiring them to modify and improve
              their creations, pushing the boundaries of their imagination and
              developing a lifelong passion for technology.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}