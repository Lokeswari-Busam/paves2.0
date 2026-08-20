import HeroWrapper from "./components/HeroWrapper";

export default function PaymentsLayout({ children }) {
  return (
    <div>
      <HeroWrapper />
      {children}
    </div>
  );
}
