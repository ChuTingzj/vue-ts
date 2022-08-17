<template>
  <router-view></router-view>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { changeTheme } from '@/utils/changeTheme'
  onMounted(() => changeTheme())
</script>
