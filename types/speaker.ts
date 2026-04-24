export interface Speaker {
  id: string;
  name: string;
  headline: string;
  bio: string;
  imageUrl?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}