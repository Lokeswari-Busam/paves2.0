"use client";
import ManagementHeader from "./components/ManagementHeader";
import AdvisoryOverview from "./components/AdvisoryOverview";
import WhyBoardMatters from "./components/WhyBoardMatters";
import AdvisoryTeamGrid from "./components/AdvisoryTeamGrid";
import ShapeDivider from "@/app/components/ShapeDivider"; 


export default function ManagementPage() {
  return (
    // <main className="flex flex-col w-full overflow-hidden">
    //   <ManagementHeader />
    //   <AdvisoryOverview />
    //   <WhyBoardMatters />
    //  <AdvisoryTeamGrid />
      
    // </main>
    <main className="min-h-screen">
          {/* --- Section 1: Header --- */}
          <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100 relative">
           <ManagementHeader />
       
         </section>
        
    
          {/* --- Section 2: Focus Areas --- */}
          <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 relative">
            <AdvisoryOverview />
            <ShapeDivider direction="left" fill="#eef2ff" shape="curve" />
          </section>
    
          {/* --- Section 3: Values --- */}
          <section className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-purple-50 relative">
            <WhyBoardMatters />
            <ShapeDivider direction="right" fill="#e0e7ff" shape="tilt" />
          </section>
    


    {/* --- Section 4: Values --- */}
          <section className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-purple-50 relative">
          <AdvisoryTeamGrid />
          </section>
          
        </main>
    
  );
}
