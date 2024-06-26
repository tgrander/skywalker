"use client";

import { DestinationListingCard } from "./destination-listing-card";
import type { DestinationsSearch } from "@/api/types";
import React from "react";
import { cn } from "@/utils";
import { useBrowseDestinationsStore } from "@/state/destinations";

interface Props {
  destinations: DestinationsSearch;
}

export function DestinationsList(props: Props) {
  const { destinations } = props;

  const { setSelectedDestination } = useBrowseDestinationsStore();

  React.useEffect(() => {
    const firstDestination = destinations[0]!;

    setSelectedDestination(firstDestination);
  }, [destinations, setSelectedDestination]);

  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-x-4 gap-y-8", // layout
        "@md:grid-cols-2 @4xl:grid-cols-3 @5xl:grid-cols-4", // responsive layout
        "p-4",
      )}
    >
      {props.destinations.map((destination) => (
        <DestinationListingCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </section>
  );
}
