<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { type IBasePagination } from '@/types/components/IBasePagination';

const props = defineProps<IBasePagination>();
const { totalPages, totalVisible } = toRefs(props);
const currentPage = ref(1);
const showLeftEllipsis = ref(false);
const showRightEllipsis = ref(false);

const visiblePages = computed(() => {
  const pages: number[] = [];

  if (totalVisible.value < 3) {
    totalVisible.value = 3;
  }

  if (totalPages.value <= totalVisible.value) {
    for (let i = 2; i <= totalPages.value - 1; i++) {
      pages.push(i);
    }
  } else {
    const middle = Math.floor(totalVisible.value / 2);
    if (currentPage.value <= middle) {
      showLeftEllipsis.value = false;
      showRightEllipsis.value = true;
      for (let i = 2; i < totalVisible.value; i++) {
        pages.push(i);
      }
    } else if (totalPages.value - currentPage.value < middle) {
      showLeftEllipsis.value = true;
      showRightEllipsis.value = false;
      for (let i = totalPages.value - totalVisible.value + 2; i < totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      showLeftEllipsis.value = true;
      showRightEllipsis.value = true;
      for (let i = currentPage.value - middle + 1; i < currentPage.value + middle; i++) {
        pages.push(i);
      }
    }
  }

  return pages;
});

const isPrevDisabled = computed(() => {
  return currentPage.value === 1;
});

const isNextDisabled = computed(() => {
  return currentPage.value === totalPages.value;
});

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToPage = (page: number) => {
  if (currentPage.value < totalPages.value) {
    currentPage.value = page;
  }
};
</script>
<template>
  <div class="pagination">
    <span
      :class="['page-item', { disabled: currentPage === 1 }]"
      @click="goToPrevPage()"
      :disabled="isPrevDisabled"
      ><font-awesome-icon :icon="['fas', 'fa-chevron-left']"
    /></span>
    <span :class="['page-item', { current: currentPage === 1 }]" @click="goToPage(1)">1</span>
    <span v-if="showLeftEllipsis" class="left-ellipsis">...</span>
    <span
      :class="['page-item', { current: page === currentPage }]"
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
    >
      {{ page }}</span
    >
    <span v-if="showRightEllipsis" class="right-ellipsis">...</span>
    <span
      :class="['page-item', { current: currentPage === totalPages }]"
      @click="goToPage(totalPages)"
    >
      {{ totalPages }}</span
    >
    <span
      :class="['page-item', { disabled: currentPage === totalPages }]"
      @click="goToNextPage()"
      :disabled="isNextDisabled"
      ><font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
    </span>
  </div>
</template>
<style scoped lang="scss">
.page-item {
  padding: 2px 8px;
  margin: 0 2px;
  cursor: pointer;

  &.current {
    background-color: $primary-color;
    color: $secondary-text-color;
  }

  &.disabled {
    color: $disabled-color;
  }
}
</style>
