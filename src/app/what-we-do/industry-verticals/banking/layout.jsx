import HeroWrapper from "./components/HeroWrapper";

export default function BankingLayout({ children }) {
  return (
    <div>
      <HeroWrapper />
      {children}
    </div>
  );
}
