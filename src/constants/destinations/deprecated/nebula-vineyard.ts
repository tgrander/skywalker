import type { NewDestination } from "@/server/db/helpers";

export const nebulaVineyard: NewDestination = {
  name: "Nebula Vineyard",
  slug: "nebula-vineyard",
  description:
    "A vineyard that uses micro-gravity and cosmic radiation to grow unique grapes that produce ‘stellar’ wine.",
  location: "Floating platform in the Orion Nebula",
  coordinates: "Orion Arm, Milky Way",
  distanceFromEarth: "1,300 light-years away",
  travelTime: "Variable, depending on FTL capabilities",
  attractions: [
    "Wine tasting",
    "Harvest festivals",
    "Gourmet dining under the stars",
  ],
  amenities: ["Luxury lodging", "Event spaces", "Observation decks"],
  heroImage: "skywalker/destinations/rkmtm1rqlzdt17dhcqdo",
  imageUrls: [],
  climate: "Controlled artificial environment",
  gravity: "Micro-gravity",
  safetyRating: "AAA",
  visitorRating: "4.8",
  visitorReviews: [
    "The wine tasting was out of this world!",
    "Never imagined harvest festivals could be so magical.",
  ],
  averageCostPerDay: 4500,
  bookingStatus: "Open",
  popularActivities: [
    "Celestial wine courses",
    "Nebular photography workshops",
  ],
  seasonalVariations: "Seasons defined by nebular shifts",
  accessibility: "Fully equipped for all species and mobility levels",
  researchFacilities: "Viticultural Research Station",
  culturalSignificance: "Pioneer in cosmic viticulture",
  historicalEvents: ["Foundation in 2120", "First vintage released in 2125"],
  planet: {
    name: "Orion Nebula",
    slug: "orion-nebula",
    image: "skywalker/planets/kxmsqguenmhsduy9kd4w",
  },
};
