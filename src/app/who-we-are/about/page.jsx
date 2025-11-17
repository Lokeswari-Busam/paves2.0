// import AboutHeader from "../../whoWeAre/components/AboutHeader";
// import AboutValues from "../../whoWeAre/components/AboutValues";
// import ContactSection from "../../whoWeAre/components/ContactSection";
// import ShapeDivider from "../../whoWeAre/components/ShapeDivider";
// import AboutFocusSection from "../../whoWeAre/components/AboutFocusSection";


// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <AboutHeader />
//       <ShapeDivider direction="right" fill="#f9fafb" />
//       <AboutFocusSection />
//       <AboutValues />
//       <ContactSection />
//     </main>
//   );
// }



import AboutHeader from "./components/AboutHeader";
import AboutFocusSection from "./components/AboutFocusSection";
import AboutValues from "./components/AboutValues";
import ContactSection from "./components/ContactSection";
import ShapeDivider from "./components/ShapeDivider";

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

      {/* --- Section 4: Contact --- */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white relative">
        <ContactSection />
    
      </section>
    </main>
  );
}
