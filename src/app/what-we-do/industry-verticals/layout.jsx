import HeroWrapper from "./components/HeroWrapper";

export default function IndustryVerticalsLayout({ children }) {
  return (
    <div>
      <HeroWrapper />
      {children}
    </div>
  );
}
