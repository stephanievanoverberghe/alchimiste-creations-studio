import type { ServicesPageContent } from '@/domain/services/page';
import type { ServiceSlug } from '@/domain/services/types';

type ServicesComparisonRow = ServicesPageContent['comparison']['rows'][number];

export type ServicesComparisonModel = {
  formatByServiceSlug: Record<ServiceSlug, string>;
  timelineByServiceSlug: Record<ServiceSlug, string>;
  featureRows: ServicesComparisonRow[];
};

function getRowMap(rows: ServicesComparisonRow[], rowId: string): Record<ServiceSlug, string> {
  const row = rows.find((currentRow) => currentRow.id === rowId);

  return (
    row?.values ?? {
      'landing-page': '',
      'site-vitrine': '',
      'refonte-site': '',
    }
  );
}

export function getServicesComparisonModel(
  content: ServicesPageContent['comparison'],
): ServicesComparisonModel {
  const formatByServiceSlug = getRowMap(content.rows, content.formatRowId);
  const timelineByServiceSlug = getRowMap(content.rows, content.timelineRowId);
  const excludedRowIds = new Set([content.formatRowId, content.timelineRowId, content.priceRowId]);

  return {
    formatByServiceSlug,
    timelineByServiceSlug,
    featureRows: content.rows.filter((row) => !excludedRowIds.has(row.id)),
  };
}
