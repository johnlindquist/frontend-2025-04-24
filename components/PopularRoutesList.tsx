import React from 'react';
import Link from 'next/link';

// Placeholder popular routes data
const popularRoutes = [
  { href: "#", text: "Flights from SLC to LAX" },
  { href: "#", text: "Flights from SLC to DEN" },
  { href: "#", text: "Flights from SLC to LAS" },
  { href: "#", text: "Flights from SLC to SEA" },
  { href: "#", text: "Flights from SLC to PHX" },
  { href: "#", text: "Flights from SLC to ORD" },
  { href: "#", text: "Flights from SLC to SFO" },
  { href: "#", text: "Flights from SLC to JFK" },
  { href: "#", text: "Flights from SLC to MCO" },
  { href: "#", text: "Flights from SLC to DFW" },
];

const PopularRoutesList: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading text-yellow-400 mb-6">Find Cheap Flights on Popular Routes</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
        {popularRoutes.map((route) => (
          <Link key={route.text} href={route.href} legacyBehavior>
            <a className="text-gray-400 hover:text-yellow-400 transition">
              {route.text}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutesList; 