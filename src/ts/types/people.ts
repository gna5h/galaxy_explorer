import { Character } from "./character";

export interface PeopleState {
  people: Character[];
  count: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
