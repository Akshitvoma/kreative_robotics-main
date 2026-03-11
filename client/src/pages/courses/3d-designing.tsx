import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PlaceholderImage = ({ alt, className }: { alt: string; className?: string }) => (
  <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
    <span className="text-gray-500">{alt}</span>
  </div>
);

export default function ThreeDDesigning() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">3D Designing</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center leading-relaxed">
              Step into the world of three-dimensional creativity and learn to design objects that you can hold in your hands.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is 3D Designing?</h2>
                <p className="text-foreground/80 leading-relaxed">
                  3D designing is like sculpting with digital clay. It's the process of creating objects in a computer that have height, width, and depth. From video game characters to custom phone cases and robot parts, 3D design is used to create the world around us.
                </p>
              </div>
              <img
                src="/3D.jpeg"
                alt="3D model design"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">What Students Will Learn</h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground/80">
                <li className="bg-primary/5 p-4 rounded-lg">Fundamentals of 3D modeling and spatial thinking.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Creating and manipulating shapes and objects.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Understanding dimensions, scale, and proportion.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Designing models for 3D printing.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Adding colors and textures to their creations.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Bringing imagination to life in three dimensions.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src="/3D.jpeg"
                alt="Students creating 3D designs"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Tools & Skills Covered</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use beginner-friendly yet powerful software to introduce students to the core concepts of 3D design.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                  <li>Tinkercad for basic modeling</li>
                  <li>Introduction to Blender for more advanced design</li>
                  <li>Slicer software for 3D printing preparation</li>
                  <li>Problem-solving and creative design thinking</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why 3D Designing at Kreative Robotics?</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Our 3D design course empowers students to turn their ideas into tangible objects. It's a perfect blend of art and engineering that fosters creativity and technical skills. Students will see their digital designs become real objects through 3D printing, a magical and rewarding experience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
