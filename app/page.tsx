import FlightSearchForm from "@/components/FlightSearchForm";
import DestinationCard from "@/components/DestinationCard";
import ToolCard from "@/components/ToolCard";
import PopularDestinationThumbnail from "@/components/PopularDestinationThumbnail";
import FaqSection from "@/components/FaqSection";
import PopularRoutesList from "@/components/PopularRoutesList";
import { FaCalendarAlt, FaBell, FaChartLine } from 'react-icons/fa';
// import Image from "next/image"; // Keep if needed for other components later

// Placeholder data for destinations
const destinations = [
  {
    imageUrl: "https://placehold.co/600x400/1a1a1a/daa520?text=Los+Angeles",
    title: "Los Angeles",
    price: "From $150",
  },
  {
    imageUrl: "https://placehold.co/600x400/1a1a1a/daa520?text=Amsterdam",
    title: "Amsterdam",
    price: "From $750",
  },
  {
    imageUrl: "https://placehold.co/600x400/1a1a1a/daa520?text=Tokyo",
    title: "Tokyo",
    price: "From $1100",
  },
  {
    imageUrl: "https://placehold.co/600x400/1a1a1a/daa520?text=Paris",
    title: "Paris",
    price: "From $820",
  },
];

// Placeholder data for tools
const tools = [
  {
    icon: FaCalendarAlt,
    title: "Find the Cheapest Days",
    description: "Visualize price trends across the month.",
  },
  {
    icon: FaBell,
    title: "Track Prices",
    description: "Get alerts when prices change for your tracked flights.",
  },
  {
    icon: FaChartLine,
    title: "Insightful Tools",
    description: "Use data to help choose your trip dates.",
  },
];

// Placeholder data for popular destinations (thumbnails)
const popularDestinations = [
  {
    imageUrl: "https://placehold.co/300x200/1a1a1a/daa520?text=Denver",
    title: "Denver",
  },
  {
    imageUrl: "https://placehold.co/300x200/1a1a1a/daa520?text=Las+Vegas",
    title: "Las Vegas",
  },
  {
    imageUrl: "https://placehold.co/300x200/1a1a1a/daa520?text=Seattle",
    title: "Seattle",
  },
  {
    imageUrl: "https://placehold.co/300x200/1a1a1a/daa520?text=Phoenix",
    title: "Phoenix",
  },
  {
    imageUrl: "https://placehold.co/300x200/1a1a1a/daa520?text=Chicago",
    title: "Chicago",
  },
];

export default function Home() {
  return (
    // Remove default styling, container handled by layout/components
    <div className="container mx-auto px-4 py-8"> 
      <FlightSearchForm />

      {/* Explore Destinations Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-yellow-400 mb-6">
          Explore Destinations from Salt Lake City
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.title} // Use a unique key
              imageUrl={dest.imageUrl}
              title={dest.title}
              price={dest.price}
            />
          ))}
        </div>
        {/* Optional: Add Map Placeholder Section if needed */}
        {/* <div className="mt-8 p-4 art-deco-border rounded-none text-center bg-gray-800">
          <p className="text-lg text-gray-400">Explore Map Feature Placeholder</p>
          <img src="https://placehold.co/800x300/333333/daa520?text=Interactive+Map+Goes+Here" alt="Map Placeholder" className="mx-auto mt-4 opacity-50" />
        </div> */}
      </section>

      {/* Useful Tools Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-yellow-400 mb-6">
          Useful Tools to Help You Find the Best Flight Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </section>

      {/* Popular Flight Destinations Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-yellow-400 mb-6">
          Popular Flight Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularDestinations.map((dest) => (
            <PopularDestinationThumbnail
              key={dest.title}
              imageUrl={dest.imageUrl}
              title={dest.title}
            />
          ))}
        </div>
      </section>

      {/* FAQ & Popular Routes Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FaqSection />
        <PopularRoutesList />
      </section>

      {/* Other page components will go here */}
    </div>
    /* Old structure removed:
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    */
  );
}
