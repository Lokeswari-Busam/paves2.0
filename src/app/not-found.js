import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Paves Technologies homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-[#2a3990]">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-500 text-base sm:text-lg max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-[#2a3990] text-white rounded-full font-medium hover:bg-[#1e2870] transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-[#2a3990] text-[#2a3990] rounded-full font-medium hover:bg-indigo-50 transition-colors"
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-[#2a3990]">
        <Link href="/what-we-do" className="hover:underline">What We Do</Link>
        <Link href="/who-we-are/about" className="hover:underline">About Us</Link>
        <Link href="/paves-ai-labs" className="hover:underline">Paves AI Labs</Link>
        <Link href="/insights" className="hover:underline">Insights</Link>
      </div>
    </div>
  );
}
