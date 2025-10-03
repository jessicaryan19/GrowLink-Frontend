import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects/Projects";
import Students from "@/pages/Students/Students";
import AppNavigation from "@/components/layouts/AppNavigation";
import AppFooter from "./components/layouts/AppFooter";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import ApplyProject from "./pages/Projects/ApplyProject";
import CreateProject from "./pages/Projects/CreateProject";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <AppNavigation />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/projects/:id/apply" element={<ApplyProject />} />

          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App