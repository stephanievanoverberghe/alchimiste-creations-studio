import { describe, expect, it } from 'vitest';

import { servicesPageContent } from '@/content/services/page';
import { getServicesComparisonModel } from '@/application/services/getServicesComparaisonModel';

describe('getServicesComparisonModel', () => {
  it('mappe correctement les rows format et délai par slug', () => {
    const model = getServicesComparisonModel(servicesPageContent.comparison);

    expect(model.formatByServiceSlug).toEqual({
      'landing-page': '1 page',
      'site-vitrine': 'jusqu’à 5 pages',
      'refonte-site': 'variable',
    });

    expect(model.timelineByServiceSlug).toEqual({
      'landing-page': '2 à 3 semaines',
      'site-vitrine': '3 à 5 semaines',
      'refonte-site': '3 à 6 semaines',
    });
  });

  it('exclut les rows techniques (format, délai, prix) des featureRows', () => {
    const model = getServicesComparisonModel(servicesPageContent.comparison);

    expect(model.featureRows.map((row) => row.id)).toEqual(['design', 'responsive', 'seo']);
  });

  it('retourne un modèle déterministe et cohérent avec les slugs de service', () => {
    const firstModel = getServicesComparisonModel(servicesPageContent.comparison);
    const secondModel = getServicesComparisonModel(servicesPageContent.comparison);

    expect(secondModel).toEqual(firstModel);

    for (const service of ['landing-page', 'site-vitrine', 'refonte-site'] as const) {
      expect(firstModel.formatByServiceSlug[service]).not.toBeUndefined();
      expect(firstModel.timelineByServiceSlug[service]).not.toBeUndefined();
      expect(firstModel.featureRows.every((row) => row.values[service] !== undefined)).toBe(true);
    }
  });

  it('retombe sur des mappings vides quand les rows configurées sont absentes', () => {
    const comparisonWithoutSourceRows = {
      ...servicesPageContent.comparison,
      rows: servicesPageContent.comparison.rows.filter(
        (row) => row.id !== 'format' && row.id !== 'timeline',
      ),
    };

    const model = getServicesComparisonModel(comparisonWithoutSourceRows);

    expect(model.formatByServiceSlug).toEqual({
      'landing-page': '',
      'site-vitrine': '',
      'refonte-site': '',
    });

    expect(model.timelineByServiceSlug).toEqual({
      'landing-page': '',
      'site-vitrine': '',
      'refonte-site': '',
    });
  });
});
