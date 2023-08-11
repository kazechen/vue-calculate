<template>
  <div
    :class="[
      'relative rounded font-bold bg-gradient-to-r text-right text-lg p-2 mb-2 overflow-hidden',
      {
        'from-sky-300 via-sky-200 to-sky-100': styleType === 'light',
        'from-slate-800 from-5% via-sky-950 to-sky-900': styleType === 'dark',
      },
    ]"
  >
    <div :class="['absolute top-2 right-0 pr-2']">
      <span
        :class="[
          'bg-clip-text text-transparent bg-gradient-to-r',
          { 'from-blue-500 to-cyan-500': styleType === 'light' },
          { 'from-cyan-300 to-teal-200': styleType === 'dark' },
        ]"
      >
        {{ formatThousandComma(prevValue) }}
      </span>
    </div>
    <div
      :class="[
        'mt-6 h-10 overflow-y-hidden overflow-x-auto',
        { 'text-3xl': isBigFontSize },
      ]"
      ref="content"
    >
      <span
        :class="[
          'bg-clip-text text-transparent bg-gradient-to-t',
          { 'from-sky-800 to-80% to-sky-600': styleType === 'light' },
          { 'from-lime-300 to-60% to-lime-50': styleType === 'dark' },
        ]"
      >
        {{ formatThousandComma(currentValue) }}
      </span>
      <span
        :class="[
          'animate-pulse text-green-200 text-3xl pr-1',
          { 'text-sky-500': styleType === 'light' },
          { 'text-sky-600': styleType === 'dark' },
        ]"
        v-if="!currentValue"
        >_</span
      >
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed, ref } from "vue";
const props = defineProps({
  prevValue: String,
  currentValue: String,
  styleType: String,
});

onMounted(() => {
  setFontSize();
});

const state = reactive({
  maxlength: 0,
});
const content = ref(null);
const formatThousandComma = computed(() => {
  return (value) => {
    const parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
});
const isBigFontSize = computed(() => {
  if (props.currentValue.length) {
    return setFontSize();
  } else {
    return false;
  }
});
const setFontSize = () => {
  if (!content.value) return;
  let isOverWidth = content.value?.scrollWidth > content.value?.offsetWidth;

  if (content.value.className?.indexOf("text-3xl") > -1) {
    if (isOverWidth) {
      state.maxlength = props.currentValue.length;
      return false;
    } else {
      state.maxlength = 0;
      return true;
    }
  } else {
    if (state.maxlength > 0 && state.maxlength <= props.currentValue.length) {
      return false;
    }
    return isOverWidth ? false : true;
  }
};
</script>
