"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/aceternity/navbar-menu";

import { PlanetCard } from "./navbar-search/planet-card";
import type { PlanetsSearch } from "@/api/types";
import { api } from "@/trpc/react";
import { cn } from "@/utils/cn";
import { useState } from "react";

export function NavbarSearch() {
  const planetsQuery = api.planet.search.useQuery();

  const planets = planetsQuery.data ?? [];

  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" planets={planets} />
    </div>
  );
}

function Navbar({
  className,
  planets,
}: {
  className?: string;
  planets: PlanetsSearch;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Destination">
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            {planets.map((planet) => (
              <PlanetCard key={planet.id} planet={planet} />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Dates">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Spacecraft">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
