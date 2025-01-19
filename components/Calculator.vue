<template>
  <div class="calculator-container">
    <div class="display">{{ display }}</div>
    <div class="keypad">
      <button
        v-for="button in buttons"
        :key="button"
        @click="handleInput(button)"
        class="calculator-button"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const display = ref("0");
const currentNumber = ref("");
const previousNumber = ref("");
const operation = ref("");
const newNumber = ref(true);

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "C",
  "0",
  "=",
  "+",
];

const calculate = () => {
  const prev = parseFloat(previousNumber.value);
  const current = parseFloat(currentNumber.value);
  let result = 0;

  switch (operation.value) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
  }

  return result.toString();
};

const handleInput = (value: string) => {
  if (value === "C") {
    display.value = "0";
    currentNumber.value = "";
    previousNumber.value = "";
    operation.value = "";
    newNumber.value = true;
    return;
  }

  if ("0123456789".includes(value)) {
    if (newNumber.value) {
      currentNumber.value = value;
      newNumber.value = false;
    } else {
      currentNumber.value += value;
    }
    display.value = currentNumber.value;
  }

  if ("+-*/".includes(value)) {
    operation.value = value;
    previousNumber.value = currentNumber.value;
    newNumber.value = true;
  }

  if (value === "=") {
    if (operation.value && previousNumber.value && currentNumber.value) {
      display.value = calculate();
      currentNumber.value = display.value;
      previousNumber.value = "";
      operation.value = "";
    }
  }
};
</script>
