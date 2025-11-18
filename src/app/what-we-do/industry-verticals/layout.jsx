import SplitHero from "./components/SplitHero";

export default function IndustryVerticalsLayout({ children }) {
  return <div>
    <SplitHero
        title="Industry Verticals"
        description="Explore our tailored solutions across diverse industry verticals, designed to drive innovation, efficiency, and growth."
        breadcrumb="Paves Technologies › What We Do › Industry Verticals"
        image="/assets/industry-verticals-hero.jpeg"
    />
    {children}
    </div>;
}