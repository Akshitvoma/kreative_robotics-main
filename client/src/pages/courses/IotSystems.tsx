import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function IotSystems() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IoT Systems</h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn to build and manage connected devices in our Internet of Things (IoT) course.
          </p>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What you will learn:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
              <li>Core concepts of the Internet of Things</li>
              <li>Working with IoT development boards (like ESP32/ESP8266)</li>
              <li>Connecting devices to the cloud</li>
              <li>Understanding IoT protocols (MQTT, HTTP)</li>
              <li>Building a complete end-to-end IoT solution</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
