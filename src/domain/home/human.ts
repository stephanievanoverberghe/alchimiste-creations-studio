export type HomeHumanSectionMetric = {
  id: 'projects' | 'timeline' | 'approach';
  label: string;
  value: string;
};

export type HomeHumanSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  metrics: HomeHumanSectionMetric[];
};
