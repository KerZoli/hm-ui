<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import NavigationItem from './NavigationItem.vue';
import { UserRoles } from '@/types/IRole';
import { computed } from 'vue';
import { hasAnyRole } from '@/utils/helperMethods';

const { user, logout } = useAuthStore();

const canManageUsers = computed(() =>
  hasAnyRole([UserRoles.Manager, UserRoles.SuperAdmin], user!.roles)
);
const canManageHotels = computed(() =>
  hasAnyRole([UserRoles.Manager, UserRoles.Owner, UserRoles.SuperAdmin], user!.roles)
);
</script>
<template>
  <nav class="navigation">
    <NavigationItem name="dashboard">Dashboard</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem v-if="canManageUsers">User Management</NavigationItem>
    <NavigationItem v-if="canManageHotels">Hotel Management</NavigationItem>
    <NavigationItem>Bookings</NavigationItem>
    <NavigationItem @click="logout">Logout</NavigationItem>
  </nav>
</template>
<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @include bp-large {
    flex-direction: row;
    gap: 50px;
  }
}
</style>
