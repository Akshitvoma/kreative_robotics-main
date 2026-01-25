import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import LevelDetails from "./pages/LevelDetails";
import ProgramOverview from "@/pages/ProgramOverview";
import ProgramBenefits from "@/pages/ProgramBenefits";
import RoboticsKit from "@/pages/RoboticsKit";
import RoboticsFundamentals from "@/pages/courses/RoboticsFundamentals";
import ArduinoMasterclass from "@/pages/courses/ArduinoMasterclass";
import IotSystems from "@/pages/courses/IotSystems";
import PcbDesigning from "@/pages/courses/pcb-designing";
import ThreeDDesigning from "@/pages/courses/3d-designing";
import { ProjectGallery } from "@/pages/ProjectGallery";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs">
        <Redirect to="/" />
      </Route>
      <Route path="/level/:slug" component={LevelDetails} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/level/:level" component={ProjectGallery} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/program/overview" component={ProgramOverview} />
      <Route path="/program/benefits" component={ProgramBenefits} />
      <Route path="/program/robotics-kit" component={RoboticsKit} />
      <Route path="/courses/robotics-fundamentals" component={RoboticsFundamentals} />
      <Route path="/courses/arduino-masterclass" component={ArduinoMasterclass} />
      <Route path="/courses/iot-systems" component={IotSystems} />
      <Route path="/courses/pcb-designing" component={PcbDesigning} />
      <Route path="/courses/3d-designing" component={ThreeDDesigning} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
