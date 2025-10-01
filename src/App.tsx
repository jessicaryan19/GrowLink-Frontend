import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Students from "@/pages/Students";
import AppNavigation from "@/components/layouts/AppNavigation";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <AppNavigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  );
}

export default App