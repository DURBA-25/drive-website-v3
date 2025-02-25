<?php

namespace Common\Database\Datasource\Filters;

use Algolia\AlgoliaSearch\SearchIndex;
use Common\Database\Datasource\Filters\BaseFilterer;
use Common\Database\Datasource\Filters\Traits\NormalizesFiltersForFulltextEngines;
use Illuminate\Support\Str;
use Laravel\Scout\Builder;

class AlgoliaFilterer extends BaseFilterer
{
    use NormalizesFiltersForFulltextEngines;

    public function apply(): ?Builder
    {
        return $this->query
            ->getModel()
            ->search($this->searchTerm, function (
                SearchIndex $algolia,
                string $query,
                array $options
            ) {
                $filters = $this->prepareFiltersForAlgolia();
                $filters = implode(' AND ', $filters);
                if ($filters) {
                    $options['filters'] = $filters;
                }
                return $algolia->search($query, $options);
            });
    }

    private function prepareFiltersForAlgolia(): array
    {
        $filters = $this->normalizeFilters($this->filters->getAll());
        return array_map(function ($filter) {
            $prefix = '';

            if (Str::contains($filter['operator'], '!')) {
                $filter['operator'] = str_replace('!', '', $filter['operator']);
                $prefix = 'NOT ';
            }

            if (!is_numeric($filter['value']) && $filter['operator'] === '=') {
                $filter['operator'] = ':';
            }

            if (is_array($filter['value'])) {
                $filter['value'] = implode(',', $filter['value']);
            }

            return $prefix . implode('', $filter);
        }, $filters);
    }
}
