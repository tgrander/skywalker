import type { NewDestination } from "@/server/db/helpers";

export const plasmaBeachesOfMercury: NewDestination = {
  name: "Plasma Beaches of Mercury",
  slug: "plasma-beaches-of-mercury",
  description:
    "Thermal beaches heated by Mercury’s intense surface temperatures, offering warm, relaxing sands year-round.",
  location: "Near Mercury’s poles",
  coordinates: "85°N, 60°E",
  distanceFromEarth: "77 million kilometers at its closest approach",
  travelTime: "3 months",
  attractions: [
    "Sunbathing under solar shields",
    "Thermal spas",
    "Magnetic sand sculptures",
  ],
  amenities: ["Solar lounges", "Heat-resistant cabanas", "Artistic studios"],
  imageUrls: [],
  climate: "Controlled thermal environments",
  gravity: "Enhanced Gravity Wells",
  safetyRating: "A",
  visitorReviews: [
    "The closest you can get to the Sun without frying!",
    "Incredible magnetic sand art!",
  ],
  averageCostPerDay: 4500,
  bookingStatus: "Available",
  popularActivities: ["Solar festivals", "Sand art competitions"],
  seasonalVariations: "Minimal due to constant proximity to the sun",
  accessibility: "Advanced cooling and shielding for all visitors",
  researchFacilities: "Solar Research Station",
  culturalSignificance: "Epitome of solar-powered innovation",
  historicalEvents: [
    "Established as uninhabitable in 2070",
    "Transformed into a resort by 2120",
  ],
};
