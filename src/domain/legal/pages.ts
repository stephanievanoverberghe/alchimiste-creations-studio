export type LegalPageSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  eyebrow?: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalPageSection[];
};
