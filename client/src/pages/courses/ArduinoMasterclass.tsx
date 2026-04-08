import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export default function ArduinoMasterclass() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Arduino</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center leading-relaxed">
              Dive deep into the world of microcontrollers with our comprehensive Arduino course.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is Arduino?</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's designed for anyone making interactive projects.
                </p>
              </div>
              <div className="w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                <img src="/Uno.jpeg" alt="Arduino board" className="w-full h-auto block" />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">What Students Will Learn</h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground/80">
                <li className="bg-primary/5 p-4 rounded-lg">Fundamentals of electronics and circuit design</li>
                <li className="bg-primary/5 p-4 rounded-lg">Programming in C/C++ for Arduino</li>
                <li className="bg-primary/5 p-4 rounded-lg">Interfacing with various sensors and modules</li>
                <li className="bg-primary/5 p-4 rounded-lg">Building complex projects with Arduino</li>
                <li className="bg-primary/5 p-4 rounded-lg">Debugging and troubleshooting embedded systems</li>
                <li className="bg-primary/5 p-4 rounded-lg">From idea to a physical, working prototype.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                    <img src="/Dvi.jpeg" alt="Arduino project components" className="w-full h-auto block" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Tools & Skills Covered</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                        Students will get hands-on experience with the Arduino platform and a variety of electronic components.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                        <li>Arduino IDE</li>
                        <li>C/C++ programming</li>
                        <li>Breadboarding and soldering</li>
                        <li>Working with sensors, LEDs, motors, and more</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Learn Arduino at Kreative Robotics?</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Our Arduino course provides the skills to build a huge range of electronic projects. We guide students from the basics of blinking an LED to creating complex interactive devices, fostering a deep understanding of both hardware and software.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}