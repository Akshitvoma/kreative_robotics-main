import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PlaceholderImage = ({ alt, className }: { alt: string; className?: string }) => (
  <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
    <span className="text-gray-500">{alt}</span>
  </div>
);

export default function PcbDesigning() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">PCB Designing</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center leading-relaxed">
              Learn how to design and create your own Printed Circuit Boards (PCBs), the electronic hearts of modern devices.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is PCB Designing?</h2>
                <p className="text-foreground/80 leading-relaxed">
                  PCB designing is the art of creating a map that connects electronic components. Think of it like a city plan for electricity! Instead of roads, we create copper pathways for electricity to follow, connecting everything from tiny lights to powerful computer chips.
                </p>
              </div>
              <PlaceholderImage alt="PCB layout design" className="w-full h-64" />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">What Students Will Learn</h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground/80">
                <li className="bg-primary/5 p-4 rounded-lg">Schematic creation: Drawing the blueprint of your circuit.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Component placement and layout techniques.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Routing traces to connect components efficiently.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Understanding design rules and constraints.</li>
                <li className="bg-primary/5 p-4 rounded-lg">Generating files for manufacturing.</li>
                <li className="bg-primary/5 p-4 rounded-lg">From idea to a physical, working PCB.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <PlaceholderImage alt="Printed circuit board components" className="w-full h-64" />
                <div>
                    <h2 className="text-3xl font-bold mb-4">Tools & Skills Covered</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                        Students will get hands-on experience with industry-standard software and develop critical thinking skills.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                        <li>EasyEDA / KiCad for schematic and PCB layout</li>
                        <li>Component library management</li>
                        <li>Gerber file generation</li>
                        <li>Basic soldering and prototyping (safety first!)</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Learn PCB Designing at Kreative Robotics?</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                At Kreative Robotics, we make learning complex topics fun and accessible. Our hands-on approach ensures that students not only understand the theory but also gain the practical skills to bring their own electronic inventions to life. It's a crucial skill for anyone interested in robotics, IoT, or electronics.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
