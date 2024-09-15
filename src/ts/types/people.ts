import { Character } from "./character";

export interface PeopleState {
  people: Character[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
