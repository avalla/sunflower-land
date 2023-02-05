import Decimal from "decimal.js-light";
import { marketRate } from "../lib/halvening";

export type BeachBountyTreasure =
  | "Pirate Bounty"
  | "Pearl"
  | "Coral"
  | "Clam Shell"
  | "Pipi"
  | "Starfish"
  | "Seaweed"
  | "Sea Cucumber"
  | "Crab"
  | "Wooden Compass";

export type ConsumableTreasure =
  | "Pirate Cake"
  | "Sunflower Cake"
  | "Radish Cake"
  | "Carrot Cake"
  | "Cauliflower Cake"
  | "Club Sandwich"
  | "Sunflower Crunch"
  | "Pumpkin Soup"
  | "Boiled Eggs"
  | "Kale Stew"
  | "Bumpkin Salad"
  | "Cauliflower Burger";

export type DecorationTreasure =
  | "Abandoned Bear"
  | "Turtle Bear"
  | "T-Rex Skull"
  | "Sunflower Coin"
  | "Foliant"
  | "Skeleton King Staff"
  | "Lifeguard Bear"
  | "Snorkel Bear"
  | "Whale Bear"
  | "Parasaur Skull"
  | "Golden Bear Head"
  | "Pirate Bear"
  | "Goblin Bear"
  | "Galleon"
  | "Dinosaur Bone"
  | "Human Bear";

export type BoostTreasure = "Tiki Totem" | "Lunar Calendar";
export type MiscenalleousTreasure = "Sand Drill" | "Gold" | "Stone" | "Iron";

export type TreasureName =
  | BeachBountyTreasure
  | ConsumableTreasure
  | DecorationTreasure
  | BoostTreasure
  | MiscenalleousTreasure;

interface TreasureDetail {
  description?: string;
  type: "average" | "good" | "rare";
}

type TimeLimitedTreasureDetail = {
  endDate: number;
} & TreasureDetail;

export type BeachBounty = {
  sellPrice: Decimal;
} & TreasureDetail;

export const BEACH_BOUNTY_TREASURE: Record<BeachBountyTreasure, BeachBounty> = {
  "Clam Shell": {
    sellPrice: marketRate(500),
    description: "A clam shell.",
    type: "good",
  },
  Coral: {
    sellPrice: marketRate(2000),
    description: "A piece of coral, it's pretty",
    type: "good",
  },
  Crab: {
    sellPrice: marketRate(25),
    description: "A crab, watch out for it's claws!",
    type: "average",
  },
  Pearl: {
    sellPrice: marketRate(5000),
    description: "Shimmers in the sun.",
    type: "rare",
  },
  Pipi: {
    sellPrice: marketRate(250),
    description: "Plebidonax deltoides, found in the Pacific Ocean.",
    type: "good",
  },
  "Pirate Bounty": {
    sellPrice: marketRate(10000),
    description: "A bounty for a pirate. It's worth a lot of money.",
    type: "rare",
  },
  "Sea Cucumber": {
    sellPrice: marketRate(25),
    description: "A sea cucumber.",
    type: "average",
  },
  Seaweed: {
    sellPrice: marketRate(100),
    description: "Seaweed.",
    type: "average",
  },
  Starfish: {
    sellPrice: marketRate(150),
    description: "The star of the sea.",
    type: "average",
  },
  "Wooden Compass": {
    sellPrice: marketRate(175),
    description: "?",
    type: "good",
  },
};

export const TREASURES: Record<TreasureName, TreasureDetail> = {
  "Whale Bear": {
    type: "rare",
  },
  "Pirate Cake": {
    type: "good",
  },
  "Carrot Cake": {
    type: "good",
  },
  "Sunflower Cake": {
    type: "good",
  },
  "Radish Cake": {
    type: "good",
  },
  "Cauliflower Cake": {
    type: "good",
  },
  "Club Sandwich": {
    type: "average",
  },
  "Sunflower Crunch": {
    type: "average",
  },
  "Pumpkin Soup": {
    type: "average",
  },
  "Lunar Calendar": {
    type: "rare",
  },
  "Tiki Totem": {
    type: "rare",
  },
  "Abandoned Bear": {
    type: "rare",
  },
  "Turtle Bear": {
    type: "good",
  },
  "T-Rex Skull": {
    type: "good",
  },
  "Sunflower Coin": {
    type: "good",
  },
  Foliant: {
    type: "good",
  },
  "Skeleton King Staff": {
    type: "good",
  },
  "Lifeguard Bear": {
    type: "good",
  },
  "Snorkel Bear": {
    type: "good",
  },
  "Parasaur Skull": {
    type: "good",
  },
  "Goblin Bear": {
    type: "good",
  },
  "Golden Bear Head": {
    type: "good",
  },
  "Pirate Bear": {
    type: "good",
  },
  Galleon: {
    type: "good",
  },
  "Dinosaur Bone": {
    type: "good",
  },
  "Human Bear": {
    type: "good",
  },
  "Boiled Eggs": {
    type: "average",
  },
  "Bumpkin Salad": {
    type: "average",
  },
  "Cauliflower Burger": {
    type: "average",
  },
  "Kale Stew": {
    type: "average",
  },
  "Sand Drill": {
    type: "good",
  },
  Gold: {
    type: "good",
  },
  Iron: {
    type: "good",
  },
  Stone: {
    type: "average",
  },

  ...BEACH_BOUNTY_TREASURE,
};

type TimeLimitedTreasure = {
  name: TreasureName;
  endDate: number;
};

export const TIME_LIMITED_TREASURE: TimeLimitedTreasure = {
  name: "Pirate Bear",
  endDate: new Date("2023-05-08T00:00:00.000Z").getTime(),
};
