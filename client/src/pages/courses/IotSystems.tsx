import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PlaceholderImage = ({ alt, className }: { alt: string; className?: string }) => (
  <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
    <span className="text-gray-500">{alt}</span>
  </div>
);

export default function IotSystems() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">IoT Systems</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center leading-relaxed">
              Learn to build and manage connected devices in our Internet of Things (IoT) course.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">What is IoT?</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The Internet of Things (IoT) is a network of physical objects—"things"—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.
                </p>
              </div>
              <PlaceholderImage alt="IoT devices connecting" className="w-full h-64" />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">What Students Will Learn</h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground/80">
                <li className="bg-primary/5 p-4 rounded-lg">Core concepts of the Internet of Things</li>
                <li className="bg-primary/5 p-4 rounded-lg">Working with IoT development boards (like ESP32/ESP8266)</li>
                <li className="bg-primary/5 p-4 rounded-lg">Connecting devices to the cloud</li>
                <li className="bg-primary/5 p-4 rounded-lg">Understanding IoT protocols (MQTT, HTTP)</li>
                <li className="bg-primary/5 p-4 rounded-lg">Building a complete end-to-end IoT solution</li>
                <li className="bg-primary/5 p-4 rounded-lg">From idea to a physical, working IoT device.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <PlaceholderImage alt="Cloud and device connection" className="w-full h-64" />
                <div>
                    <h2 className="text-3xl font-bold mb-4">Tools & Skills Covered</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                        Students will get hands-on experience with popular IoT platforms and protocols.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                        <li>ESP32/ESP8266 development boards</li>
                        <li>MQTT brokers and clients</li>
                        <li>Cloud IoT platforms (e.g., Adafruit IO, Blynk)</li>
                        <li>JSON data format</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Learn IoT Systems at Kreative Robotics?</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Our IoT Systems course opens up a world of possibilities, from smart homes to environmental monitoring. We empower students to create devices that communicate with each other and the cloud, providing them with the skills to build the connected future.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}