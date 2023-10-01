<script setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  <select v-model="language">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === 'object' ? item.code : item }}
    </option>
  </select>
</template>
