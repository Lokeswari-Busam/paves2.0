
import AboutHeader from "./components/AboutHeader";
import AboutFocusSection from "./components/AboutFocusSection";
import AboutValues from "./components/AboutValues";
import ShapeDivider from "../../components/ShapeDivider";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* --- Section 1: Header --- */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100 relative">
        <AboutHeader />
    
      </section>

      {/* --- Section 2: Focus Areas --- */}
      <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 relative">
        <AboutFocusSection />
        <ShapeDivider direction="left" fill="#eef2ff" shape="curve" />
      </section>

      {/* --- Section 3: Values --- */}
      <section className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-purple-50 relative">
        <AboutValues />
        <ShapeDivider direction="right" fill="#e0e7ff" shape="tilt" />
      </section>

      
    </main>
  );
}
