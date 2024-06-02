"use client";

import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Destination as DestinationListItem,
  destinations,
} from "@/data/search";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Destination() {
  const [open, setOpen] = React.useState(false);
  const [selectedDestination, setSelectedDestination] =
    React.useState<DestinationListItem | null>(null);

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedDestination ? (
              destinations.find(
                (destination) =>
                  destination.value === selectedDestination.value,
              )?.label
            ) : (
              <p className="text-base text-white/80">Add destination</p>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search destination..."
              className="text-base"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {destinations.map((destination) => (
                  <CommandItem
                    key={destination.value}
                    value={destination.value}
                    className="text-base"
                    onSelect={(value) => {
                      setSelectedDestination(
                        destinations.find(
                          (priority) => priority.value === value,
                        ) || null,
                      );
                      setOpen(false);
                    }}
                  >
                    <destination.icon
                      className={cn(
                        "mr-5 h-4 w-4",
                        destination.value === selectedDestination?.value
                          ? "opacity-100"
                          : "opacity-40",
                      )}
                    />
                    <span>{destination.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
