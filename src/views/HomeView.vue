<script setup>
import { ref, reactive, onMounted } from "vue";
import { floatAdd, floatSub, floatMul, floatDiv } from "@/utils/math.js";
import CalButton from "@/components/CalButton.vue";
import CalViewer from "@/components/CalViewer.vue";

const state = reactive({
  prev: "",
  current: "",
  isDesktop: "",
  isVibrate: "vibrate" in navigator, // 是否支援震動
  isCalculated: false,
  styleType: "light",
  operation: "",
  pageLoaded: false,
});
const isOpenAccordion = ref(false);

onMounted(() => {
  state.pageLoaded = true;
  state.styleType = (() => {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  })();
  state.isDesktop = (() => {
    let userAgentInfo = navigator.userAgent;
    const agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];
    let flag = true;
    let v = 0;
    while (v < agents.length) {
      if (userAgentInfo.indexOf(agents[v]) > 0) {
        flag = false;
        break;
      }
      v++;
    }
    return flag;
  })();

  // 裝置為PC可以使用鍵盤輸入
  state.isDesktop &&
    window.addEventListener(
      "keydown",
      (e) => {
        let key = e.key;
        if (/[0-9-+]/.test(key)) {
          handleClick(key);
        } else if (key === "/") {
          handleClick("÷");
        } else if (key === "*") {
          handleClick("x");
        } else if (["Enter"].includes(key)) {
          equal();
        }
      },
      false
    );
});

function changeStyle() {
  state.styleType = state.styleType === "light" ? "dark" : "light";
}

function handleClick(value) {
  !state.isDesktop && state.isVibrate && window.navigator.vibrate(20);
  const operator = ["÷", "x", "-", "+"];
  // 運算子處理
  if (operator.includes(value)) {
    if (state.current && state.prev) {
      equal();
      state.prev = state.current + value;
      state.current = "";
    } else if (state.current) {
      state.prev = state.current + value;
      state.current = "";
    } else if (state.prev) {
      state.prev = state.prev.slice(0, -1) + value;
    }
    state.operation = value;
  }
  // 小數點處理
  else if (value === ".") {
    if (/\.\d*$/.test(state.current)) return;
    if (state.current) {
      state.current += value;
    }
  }
  // 正負值轉換
  else if (value === "+/-") {
    if (Math.sign(state.current) > 0) {
      state.current = "-" + state.current;
    } else if (Math.sign(state.current) < 0) {
      state.current = state.current.slice(1);
    }
  }
  // 數字處理
  else {
    if (state.current === "0") {
      state.current = value;
    } else {
      state.current += value;
    }
  }
}

function equal() {
  if (!state.current || !state.operation) return;
  state.operation = state.prev.slice(-1);
  const signMap = {
    "+": "+",
    "-": "-",
    x: "*",
    "÷": "/",
  };
  const prevVal = parseFloat(state.prev.slice(0, -1));
  const currentVal = parseFloat(state.current);
  const isFloatcompute = state.prev.indexOf(".") > -1 && state.current > -1;

  state.prev += state.current;

  switch (signMap[state.operation]) {
    case "+":
      if (!isFloatcompute) {
        state.current = (prevVal + currentVal).toString();
      } else {
        state.current = floatAdd(prevVal, currentVal).toString();
      }
      break;
    case "-":
      if (!isFloatcompute) {
        state.current = (prevVal - currentVal).toString();
      } else {
        state.current = floatSub(prevVal, currentVal).toString();
      }
      break;
    case "*":
      if (!isFloatcompute) {
        state.current = (prevVal * currentVal).toString();
      } else {
        state.current = floatMul(prevVal, currentVal).toString();
      }
      break;
    case "/":
      if (!isFloatcompute) {
        state.current = (prevVal / currentVal).toString();
      } else {
        state.current = floatDiv(prevVal, currentVal).toString();
      }
      break;
  }
  state.operation = "";
  state.prev = "";
}
function clear() {
  state.prev = "";
  state.current = "";
  state.operation = "";
}

function backspace() {
  if (state.isCalculated) {
    state.isCalculated = !state.isCalculated;
  }
  state.current = state.current.slice(0, state.current.length - 1);
}
</script>

<template>
  <div class="home absolute inset-y-1/4 w-full">
    <div
      :class="[
        'drop-shadow-md transition delay-300 home mx-auto px-2 sm:px-0 md:w-80',
        { 'scale-50 opacity-0': !state.pageLoaded },
        { 'scale-100': state.pageLoaded },
      ]"
    >
      <div
        class="bg-gradient-to-r from-slate-400 from-50% to-slate-300 px-1 md:px-2 pt-2 pb-4 rounded-xl"
      >
        <div class="text-center mb-2">
          <span
            class="shadow-inner text-sm text-left text-slate-500 border border-slate-500 rounded-full px-2"
            >Kazechen</span
          >
        </div>
        <CalViewer
          :styleType="state.styleType"
          :prevValue="state.prev"
          :currentValue="state.current"
        />

        <div class="grid grid-cols-4 gap-1 overflow-hidden rounded-lg">
          <CalButton
            :styleType="state.styleType"
            :title="'點擊切換主題'"
            @click="changeStyle"
          />

          <CalButton
            value="⌫"
            :title="'Delete the last value'"
            :styleType="state.styleType"
            @click="backspace"
          />
          <CalButton
            value="C"
            :title="'Clear'"
            :styleType="state.styleType"
            @click="clear"
          />

          <CalButton
            v-for="item in [
              '÷',
              '7',
              '8',
              '9',
              'x',
              '4',
              '5',
              '6',
              '-',
              '1',
              '2',
              '3',
              '+',
            ]"
            :value="item"
            :key="`btn-${item}`"
            :styleType="state.styleType"
            :textColor="
              ['x', '-', '+', '÷'].includes(item) ? 'text-teal-300' : ''
            "
            @button-click="handleClick"
          />

          <CalButton
            value="+/-"
            :styleType="state.styleType"
            :title="'正負值轉換'"
            @button-click="handleClick"
          />

          <CalButton
            value="0"
            :styleType="state.styleType"
            @button-click="handleClick"
          />

          <CalButton
            value="."
            :styleType="state.styleType"
            @button-click="handleClick"
          />
          <CalButton
            value="="
            :styleType="state.styleType"
            bgColor="bg-teal-600"
            @click="equal"
          />
        </div>
      </div>
    </div>

    <div
      class="text-left mt-4 px-2 about mx-auto px-2 md:w-80 bg-white rounded-xl"
    >
      <h1
        class="flex items-center justify-between cursor-pointer px-1 py-3"
        @click="
          () => {
            isOpenAccordion = !isOpenAccordion;
          }
        "
      >
        功能說明<svg
          data-accordion-icon=""
          :class="[
            'w-3 h-3 shrink-0',
            {
              'rotate-180': isOpenAccordion,
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
      <div :class="['border-t py-3', { hidden: !isOpenAccordion }]">
        <ul class="list-decimal px-5 mb-4">
          <li>自適應頁面設計(RWD)</li>
          <li>可切換介面風格：明亮、黑暗</li>
          <li>重複輸入運算子自動替換</li>
          <li>可以正常使用小數計算(已排除原有JS浮點數運算誤差問題)</li>
          <li>千分位逗點分隔顯示</li>
          <li>桌機版可以使用鍵盤輸入(不包含：正負轉換、C、介面風格)</li>
          <li>按鈕點擊震動(限行動裝置，且非靜音模式)</li>
        </ul>
        <h1>使用工具：</h1>
        <ul class="list-disc px-5">
          <li>Vue CLI + vue3</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  </div>
</template>
