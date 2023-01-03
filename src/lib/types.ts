export type IconNames =
  | "masbossun_menu"
  | "masbossun_times"
  | "twitter_solid"
  | "instagram_alt_solid"
  | "linkedin_solid"
  | "github_solid"
  | "sun"
  | "moon";

export type MDFile = {
  default: unknown;
  metadata: {
    "title": string;
    "date": string;
    "slug": string;
    "author": string;
    "git": string;
    "preview": string | null;
  }
}
