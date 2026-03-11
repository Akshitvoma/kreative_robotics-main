import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { CheckCircle } from "lucide-react";
import NotFound from "./not-found";

export const levelData: Record<string, any> = {
    funtronix: {
        level: "Level 1",
        title: "Funtronix",
        introSentence: "Master the fundamentals of electronics and discover the technology that powers our world.",
        understandingTheWorld: "We live in a world where electronics permeate every aspect of our lives, including our offices, pockets, bags, cars, and every corner of the street. Have you ever wondered what causes your fan to spin or alter its speed? Or how your home's fuse protects you from a short circuit? Or the operation of the doorbell? All these questions, along with many more, are intended to have useful solutions in this package. Through Funtronix, we'll explore the practical electronics that make everyday devices work, giving you the foundation to understand and build amazing things.",
        realWorldApplications: "All these questions, along with many more, are intended to have useful solutions in this package. Through Funtronix, we'll explore the practical electronics that make everyday devices work, giving you the foundation to understand and build amazing things.",
        learningThroughMaking: "Children enjoy creating things and exploring them, which enables us to develop their abilities while they study robotics. \"Making\" is not only entertaining, but it also boosts self-esteem and fosters creativity as kids discover how the world functions. As they learn the fundamentals of tinkering, lay new foundations, and—above all—understand \"what & why\" they are creating, we hope to cultivate their curiosity. This hands-on approach transforms learning from abstract concepts into tangible, exciting discoveries.",
        keyTopics: [
            { title: "Fan Control", description: "Understand speed variation and motor control mechanisms" },
            { title: "Fuse Protection", description: "Learn how circuits are protected from damage" },
            { title: "Doorbells", description: "Explore electromagnets and switching systems" },
            { title: "Basic Circuits", description: "Master the fundamentals of electrical flow" },
            { title: "Logic Gates", description: "Understand AND, OR, NOT gates and digital logic" },
        ],
    },
    robotrix: {
        level: "Level 2",
        title: "Robotrix",
        introSentence: "Master the fundamentals of robotics through hands-on design, mechanics, and electronics integration.",
        understandingTheWorld: "Terrestrial robots are used in military, exploration, and industrial settings. Using a variety of drive systems and basic machines, this kit presents these kinds of robotic courses while utilizing the principles of mechanics and electronics in robotics. Multiple designs with a variety of functions and movements can be created with the aid of this RoboTrix kit. With two motors and two, three, or four wheels, you may build a driving robot. Every configuration has a distinct drive system that influences the robot's movement.",
        realWorldApplications: "In Robotrix, you'll explore the intersection of mechanics and electronics. Build robots with different wheel configurations, experiment with various drive systems, and understand how motor control affects movement. Each design choice impacts how your robot navigates its environment. This hands-on approach transforms theoretical knowledge into practical robotics skills, preparing you for more advanced levels and real-world applications.",
        learningThroughMaking: "In Robotrix, you'll explore the intersection of mechanics and electronics. Build robots with different wheel configurations, experiment with various drive systems, and understand how motor control affects movement. Each design choice impacts how your robot navigates its environment. This hands-on approach transforms theoretical knowledge into practical robotics skills, preparing you for more advanced levels and real-world applications.",
        keyTopics: [
            { title: "Drive Systems", description: "Explore different wheel and motor configurations" },
            { title: "Mechanics", description: "Learn basic machines and mechanical principles" },
            { title: "Design Variants", description: "Build 2, 3, and 4-wheel robots" },
        ],
    },
    solarix: {
        level: "Level 3",
        title: "Solarix",
        introSentence: "Master renewable energy, wireless control systems, and electrical networks in robotics.",
        understandingTheWorld: "Solarix is one of the most intriguing robotics kits for children, covering three key topics that are relevant to robotics: electrical networks, wireless control, and solar power. These interconnected subjects form the foundation of modern autonomous systems and renewable energy-powered robots. The world is embracing wireless since having a lot of wires can be expensive and messy. Wireless is a communication method as well as a means of operating a variety of electrical gadgets. Wireless circuits and the fundamentals of wireless control and communication are covered in this level. In Solarix, you'll integrate multiple technologies into cohesive systems. Learn how solar panels power robots, how wireless signals control motors and sensors, and how electrical networks distribute power efficiently throughout your robotic systems.",
        realWorldApplications: "This level represents a significant step forward in your robotics journey, combining sustainable energy solutions with cutting-edge wireless technology to build truly autonomous and environmentally conscious robots.",
        learningThroughMaking: "This level represents a significant step forward in your robotics journey, combining sustainable energy solutions with cutting-cutting-edge wireless technology to build truly autonomous and environmentally conscious robots.",
        keyTopics: [
            { title: "Solar Power", description: "Harness the sun's energy for sustainable robotics" },
            { title: "Wireless Control", description: "Master wireless communication protocols and systems" },
            { title: "Wireless Circuits", description: "Design and build wireless communication circuits" },
            { title: "Electrical Networks", description: "Understand power distribution and network design" },
        ],
    },
    robovi: {
        level: "Level 4",
        title: "RoboVi",
        introSentence: "Begin your journey into intelligent robotics with advanced microcontroller programming and autonomous decision-making.",
        understandingTheWorld: "Robotics is always thought of as a machine that operates independently and makes decisions without human input. Level 4 of the Robotic Course begins the process of programming intelligent robots. This is where robots transition from being remotely controlled machines to truly autonomous systems capable of sensing, analyzing, and responding to their environment. Uniko Ekam, a flexible microcontroller programming board compatible with the Arduino platform, is a significant new addition to the Robotic Course Level 4 package. The first board in the Uniko programming platform series is called Uniko Ekam. This powerful platform enables you to move beyond simple programming into creating genuinely intelligent robotic systems. Onboard components like switches, LEDs, LDRs (light-dependent resistors), TSOP IR receivers, microphones, and breakout pins are among its unique characteristics, which facilitate the development of applications. These integrated components allow you to build complex sensor-enabled robots without extensive external wiring, making development faster and more intuitive. The Arduino-compatible architecture ensures a smooth learning curve while providing professional-grade capabilities for serious roboticists.",
        realWorldApplications: "The Birth of Intelligent Robotics. Introducing Uniko Ekam. Onboard Components & Capabilities. The Arduino-compatible architecture ensures a smooth learning curve while providing professional-grade capabilities for serious roboticists.",
        learningThroughMaking: "Begin your journey into intelligent robotics with advanced microcontroller programming and autonomous decision-making. This is where robots transition from being remotely controlled machines to truly autonomous systems capable of sensing, analyzing, and responding to their environment.",
        keyTopics: [
            { title: "Intelligent Programming", description: "Write code that enables robots to make autonomous decisions" },
            { title: "Uniko Ekam Board", description: "Master the Uniko microcontroller platform and its features" },
            { title: "Sensor Integration", description: "Utilize onboard sensors: LEDs, LDRs, IR receivers, microphones" },
            { title: "Arduino Compatible", description: "Leverage Arduino IDE and ecosystem for rapid development" },
        ],
    },
    "c-robo": {
        level: "Level 5",
        title: "C-Robo",
        introSentence: "Master Embedded C programming and autonomous systems with the Uniko Dvi platform.",
        understandingTheWorld: "Autonomous robots and systems utilizing the Embedded C programming language are introduced in Robotic Course Level 5. This is a critical milestone where you'll transition from high-level programming to the systems-level code that powers real-world robotics and embedded devices. The second board in the Uniko series of programming platforms, the \"Uniko Dvi,\" is a new microcontroller board. As usual, our board offers optimal on-board components and simple interface possibilities. Dvi has an accelerometer, LCD, Bluetooth, buzzer, and ultrasonic sensor—everything you need to build sophisticated autonomous systems. Although embedded C programming is based on the C language, its name comes from the fact that the code is written for a particular application that is managed by an embedded system. Level 5 of the Robotic Course is very important since all subsequent levels will have embedded C programming for all boards and apps.",
        realWorldApplications: "Mastering C-Robo opens the door to professional-grade robotics development, enabling you to write efficient, powerful code that directly controls hardware with precision and reliability.",
        learningThroughMaking: "This is a critical milestone where you'll transition from high-level programming to the systems-level code that powers real-world robotics and embedded devices. Dvi has an accelerometer, LCD, Bluetooth, buzzer, and ultrasonic sensor—everything you need to build sophisticated autonomous systems. These integrated components allow you to build complex sensor-enabled robots without extensive external wiring, making development faster and more intuitive.",
        keyTopics: [
            { title: "Embedded C Programming", description: "Write efficient code for embedded systems and microcontrollers" },
            { title: "Uniko Dvi Board", description: "Master the Uniko Dvi platform and its advanced features" },
            { title: "Onboard Sensors", description: "Utilize accelerometer, LCD, ultrasonic sensor, and Bluetooth" },
            { title: "Wireless Connectivity", description: "Build connected autonomous systems with Bluetooth integration" },
        ],
    },
    embetrix: {
        level: "Level 6",
        title: "Embetrix",
        introSentence: "Master embedded systems and intelligent applications that power the modern world.",
        understandingTheWorld: "Dedicated tasks can be carried out by embedded systems separately or in conjunction with bigger systems. The circuits in the air conditioner, washing machine, microwave, digital clock, television, and nearly every other form of household electronic equipment are examples. These invisible systems work silently in the background, managing critical functions that we often take for granted. Even robots have built-in systems that regulate their behavior. In Robotic Course Level 6, we learn about embedded systems and other intelligent applications that we may create with the embedded C programming language. These systems enable robots to perceive their environment, make decisions in real-time, and execute complex tasks with precision and reliability.",
        realWorldApplications: "Embetrix represents the pinnacle of embedded systems education. You'll design and implement professional-grade embedded applications that can stand alongside commercial products. From IoT devices to autonomous systems, you'll harness the power of embedded C to create solutions that solve real-world problems. This level equips you with the knowledge and skills to become a true embedded systems engineer, capable of designing intelligent systems for any application domain.",
        learningThroughMaking: "In Robotic Course Level 6, we learn about embedded systems and other intelligent applications that we may create with the embedded C programming language. These systems enable robots to perceive their environment, make decisions in real-time, and execute complex tasks with precision and reliability. Embetrix represents the pinnacle of embedded systems education. You'll design and implement professional-grade embedded applications that can stand alongside commercial products. From IoT devices to autonomous systems, you'll harness the power of embedded C to create solutions that solve real-world problems.",
        keyTopics: [
            { title: "Home Automation", description: "Build embedded systems for smart home applications" },
            { title: "Power Management", description: "Design efficient power systems for embedded devices" },
            { title: "System Architecture", description: "Master embedded system design patterns and architecture" },
            { title: "Uniko Trini Board", description: "Master the Uniko Trini microcontroller board for advanced embedded applications" },
        ],
    },
    walkobotz: {
        level: "Level 7",
        title: "WalkO'Botz",
        introSentence: "Master humanoid and legged robotics—the pinnacle of intelligent robot design.",
        understandingTheWorld: "Humanoids are intelligent robots that have many human-like characteristics. They will have human characteristics in terms of appearance, behavior, thought processes, and labor. Research is being done to make robots feel human-like. Being a legged species, which means we utilize our legs to move about, is one of the most important traits of humans. Embedded C is used to program Humanoid and Legged Robots, which are introduced in Robotic Course Level 7. We will learn how to create two-legged robots that can move like people and four-legged robots that can move like animals. These advanced systems require sophisticated programming and biomechanical design to replicate natural movement patterns. We will use a cell phone to wirelessly control their movements and allow them to carry out specific tasks on their own.",
        realWorldApplications: "This level represents the absolute pinnacle of robotic engineering—combining biomechanics, embedded systems, wireless communication, and artificial intelligence into seamless, intelligent machines. WalkO'Botz is where theoretical knowledge becomes cutting-edge innovation. You'll design robots that blur the line between science fiction and reality, capable of interacting with the world in profoundly human-like ways.",
        learningThroughMaking: "Embedded C is used to program Humanoid and Legged Robots, which are introduced in Robotic Course Level 7. We will learn how to create two-legged robots that can move like people and four-legged robots that can move like animals. These advanced systems require sophisticated programming and biomechanical design to replicate natural movement patterns. We will use a cell phone to wirelessly control their movements and allow them to carry out specific tasks on their own.",
        keyTopics: [
            { title: "Biped Locomotion", description: "Design and program two-legged humanoid robots with human-like gait" },
            { title: "Humanoid Design", description: "Master biomechanical design for realistic human-like characteristics" },
            { title: "Wireless Control", description: "Control robots remotely via smartphones and mobile devices" },
            { title: "Uniko Chatur Board", description: "Master the Uniko Chatur microcontroller board based on Arduino Nano for advanced humanoid control" },
        ],
    },
};

export default function LevelDetails() {
    const [match, params] = useRoute("/level/:slug");
    const slug = params ? params.slug : null;
    const level = slug ? levelData[slug] : null;

    if (!level) {
        return <NotFound />;
    }

    const {
        level: levelNumber,
        title,
        introSentence,
        understandingTheWorld,
        realWorldApplications,
        learningThroughMaking,
        keyTopics,
    } = level;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-24 pb-16 md:pt-32 md:pb-24 container mx-auto px-4 md:px-6">
                <Link href="/">
                    <a className="text-xs md:text-sm text-primary hover:underline mb-6 md:mb-8 inline-block transition-all hover:-translate-x-1">&larr; Back to Home</a>
                </Link>
                <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                    {/* Left Column: Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-2/3 mb-10 lg:mb-0"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                            {levelNumber}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">{title}</h1>
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 md:mb-10">
                            {introSentence}
                        </p>

                        <div className="space-y-10 md:space-y-12">
                            <section>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">
                                    Understanding the <span className="text-primary">World Around Us</span>
                                </h2>
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                                    {understandingTheWorld}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">
                                    Real-World <span className="text-primary">Applications</span>
                                </h2>
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                                    {realWorldApplications}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">
                                    Learning Through <span className="text-primary">Making</span>
                                </h2>
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                                    {learningThroughMaking}
                                </p>
                            </section>
                        </div>
                    </motion.div>

                    {/* Right Column: Key Topics Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/3 h-fit glass-card p-6 md:p-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                            Key <span className="text-primary">Topics</span>
                        </h2>
                        <ul className="space-y-6">
                            {keyTopics.map((topic: any, index: number) => (
                                <li key={index} className="flex flex-col group">
                                    <h3 className="font-bold text-lg md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{topic.title}</h3>
                                    <p className="text-foreground/80 text-xs md:text-sm leading-relaxed">{topic.description}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Call-to-Action Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-6 md:p-10 mt-12 md:mt-16 text-center shadow-2xl shadow-primary/10"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                        Ready to Start Your <span className="text-primary">Journey?</span>
                    </h2>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                        Take the first step towards becoming a robotics innovator!
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-xl shadow-primary/25 hover:-translate-y-1 active:scale-95">
                                Enroll in {title}
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
