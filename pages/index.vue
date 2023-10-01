<template>
  <div class="text-slate-900">
    <p>{{ $t('title') }}</p>
    <LangSwitcher />
  </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>

<style scoped></style>
