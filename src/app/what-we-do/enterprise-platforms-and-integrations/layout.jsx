import HeroWrapper from "./components/HeroWrapper";

export default function EnterprisePlatformsLayout({ children }) {
  return (
    <div>
      <HeroWrapper />
      {children}
    </div>
  );
}
