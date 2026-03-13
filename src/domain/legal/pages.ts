export type LegalPageSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalPageSection[];
};
