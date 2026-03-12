export type SocialProofStat = {
  id: string;
  label: string;
  value: string;
};

export type SocialProofContent = {
  eyebrow: string;
  quote: string;
  author: string;
  role: string;
  stats: SocialProofStat[];
};
