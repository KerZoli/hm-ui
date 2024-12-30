<script setup lang="ts">
import type { IDataTableHeader } from '@/types/components/IDataTable';
import DataTable from './general/DataTable.vue';

const headers: IDataTableHeader[] = [
  {
    label: 'Name',
    key: 'name',
    sortable: true
  },
  {
    label: 'Value',
    key: 'value',
    sortable: true
  },
  {
    label: 'Actions',
    key: 'actions',
    sortable: false
  }
];

const items = [
  {
    name: 'Test',
    value: 1
  },
  {
    name: 'Test2',
    value: 2
  }
];

const callApi = (a: string, b: string) => {
  console.log(a);
  console.log(b);
};
</script>
<template>
  <DataTable :headers="headers" :items="items" v-on:refresh-data="callApi">
    <template #item.value="{ value }">
      <b>{{ value }}</b>
    </template>
  </DataTable>
</template>
