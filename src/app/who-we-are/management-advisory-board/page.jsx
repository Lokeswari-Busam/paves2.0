"use client";
import ManagementHeader from "./components/ManagementHeader";
import AdvisoryOverview from "./components/AdvisoryOverview";
import WhyBoardMatters from "./components/WhyBoardMatters";
import AdvisoryTeamGrid from "./components/AdvisoryTeamGrid";
import ContactCTA from "./components/ContactCTA";

export default function ManagementPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <ManagementHeader />
      <AdvisoryOverview />
      <WhyBoardMatters />
     <AdvisoryTeamGrid />
      <ContactCTA />
    </main>
  );
}
