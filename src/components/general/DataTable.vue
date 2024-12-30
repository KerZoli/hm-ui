<script setup lang="ts">
import { SortOrderEnum, type IDataTable } from '@/types/components/IDataTable';
import { ref, toRefs } from 'vue';
import BasePagination from './BasePagination.vue';

const props = defineProps<IDataTable>();

const emit = defineEmits<{
  refreshData: [column: string, order: string];
}>();

const sortOrder = ref<SortOrderEnum | null>(null);
const sortColumn = ref('');

const getSortIcon = (key: string) => {
  if (sortColumn.value !== key) {
    return ['fas', 'sort'];
  }

  return sortOrder.value === SortOrderEnum.Asc ? ['fas', 'sort-up'] : ['fas', 'sort-down'];
};

const sortData = (column: string) => {
  if (column != sortColumn.value || sortOrder.value === SortOrderEnum.Desc) {
    sortOrder.value = SortOrderEnum.Asc;
  } else {
    sortOrder.value = SortOrderEnum.Desc;
  }
  sortColumn.value = column;

  emit('refreshData', sortColumn.value, sortOrder.value);
};

const { headers, items } = toRefs(props);
</script>
<template>
  <div>
    <table class="datatable">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" @click="sortData(header.key)">
            {{ header.label }}
            <span v-if="header.sortable">
              <font-awesome-icon :icon="getSortIcon(header.key)" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="header in headers" :key="header.key">
            <slot :name="`item.${header.key}`" :value="item[header.key]" :row="item">
              {{ item[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <BasePagination :total-pages="20" :total-visible="7" />
  </div>
</template>

<style scoped lang="scss">
.datatable {
  border-collapse: collapse;
  border: 1px solid #ccc;
  th {
    padding: 5px 10px;
    text-transform: uppercase;
    font-size: 10px;
  }
  tr {
    border-bottom: 1px solid #ccc;

    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    td {
      padding: 5px 10px;
    }
  }
}
</style>
