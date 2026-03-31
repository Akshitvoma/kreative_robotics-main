import { Link } from "wouter";
import { Cpu, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <img src="/KR.png" alt="Kreative Robotics Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-display font-bold text-xl tracking-tight">
                KREATIVE <span className="text-primary">ROBOTICS</span>
              </span>
              <span className="text-xs text-foreground/80 -mt-1 leading-relaxed">Obotz Warangal</span>
            </Link>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Empowering the next generation of innovators through hands-on robotics and IoT education.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/kreativerobotics/" },
                { Icon: Instagram, href: "https://www.instagram.com/kreative_robotics/" },
                { Icon: Youtube, href: "https://www.youtube.com/@kreativeroboticsobotzwarangal" },
                { Icon: FaWhatsapp, href: "https://wa.me/9121900667" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground tracking-wider leading-relaxed">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                { name: 'Home', href: '/' },
                { name: 'Overview', href: '/program/overview' },
                { name: 'Benefits', href: '/program/benefits' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary transition-colors leading-relaxed">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground tracking-wider leading-relaxed">Courses</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                { name: 'Robotics Fundamentals', href: '/courses/robotics-fundamentals' },
                { name: 'Arduino Masterclass', href: '/courses/arduino-masterclass' },
                { name: 'IoT Systems', href: '/courses/iot-systems' },
                { name: 'PCB Designing', href: '/courses/pcb-designing' },
                { name: '3D Designing', href: '/courses/3d-designing' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary transition-colors leading-relaxed">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground tracking-wider leading-relaxed">Contact Us</h4>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>15-1-44,Srinivasa colony, eye hospital line, Opposite-MGM, Warangal, Telangana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91-91219 00667</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info.kreativerobotics@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-sm text-foreground/80 leading-relaxed">
          <p>&copy; {new Date().getFullYear()} KREATIVE ROBOTICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
