<script setup>
const props = defineProps({
  title: String,
  isOpen: Boolean,
});
defineEmits(["toggle"]);
</script>
<template>
  <div class="px-2 text-left bg-white rounded-xl">
    <h1
      class="flex items-center justify-between cursor-pointer px-1 py-3"
      @click="$emit('toggle')"
    >
      {{ title }}
      <svg
        data-accordion-icon=""
        :class="[
          'w-3 h-3 shrink-0',
          {
            'rotate-180': isOpen,
          },
        ]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5 5 1 1 5"
        ></path>
      </svg>
    </h1>
    <div :class="['border-t py-3', { hidden: !isOpen }]">
      <slot></slot>
    </div>
  </div>
</template>
