import HeroWrapper from "./components/HeroWrapper";

export default function ServicesLayout({ children }) {
  return (
    <div>
      <HeroWrapper />
      {children}
    </div>
  );
}
