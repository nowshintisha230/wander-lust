import React from "react";
import DestinationCard from "@/components/DestinationCard";

const DestinationsPage = async () => {
  const res = await fetch(
    "http://localhost:5000/destinations",
    {
      cache: "no-store",
    }
  );

  const destinations = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        All Destinations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;