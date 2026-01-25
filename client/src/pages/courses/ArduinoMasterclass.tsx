import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ArduinoMasterclass() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Arduino Masterclass</h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dive deep into the world of microcontrollers with our comprehensive Arduino Masterclass.
          </p>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What you will learn:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
              <li>Fundamentals of electronics and circuit design</li>
              <li>Programming in C/C++ for Arduino</li>
              <li>Interfacing with various sensors and modules</li>
              <li>Building complex projects with Arduino</li>
              <li>Debugging and troubleshooting embedded systems</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
