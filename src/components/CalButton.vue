<template>
  <div class="h-full">
    <button
      :title="title || ''"
      :class="['rounded-sm w-full h-full text-xl p-3', switchStyle]"
      @click="getButtonValue"
    >
      {{ value }}
      <span v-if="!value">{{ styleType === "light" ? "☀️" : "🌜" }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: String,
  textColor: String, // 指定文字色
  bgColor: String, // 指定背景色
  title: String,
  styleType: String,
});

const switchStyle = computed(() => {
  let classList = [];
  if (props.styleType === "dark") {
    classList.push(!props.textColor ? "text-white" : props.textColor);
    if (!props.bgColor) {
      classList.push("bg-slate-800 active:bg-white-900");
    } else {
      classList.push(props.bgColor);
    }
  } else {
    if (!props.bgColor) {
      props.textColor && classList.push("bg-slate-400");
      classList.push("bg-slate-200");
    } else {
      classList.push("text-white bg-slate-800 active:bg-white-900");
    }
  }
  return classList;
});

const emit = defineEmits(["button-click"]);
function getButtonValue() {
  emit("button-click", props.value);
}
</script>

<style scoped lang="scss">
button {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
