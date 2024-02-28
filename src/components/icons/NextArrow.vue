<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();

const isTheSwing = computed(() => currentRoute.params.name === "The Swing");
const buttonColor = computed(() =>
  currentRoute.params.name === "The Swing" ? "#E5E5E5" : "#000"
);
</script>

<template>
  <button :disabled="isTheSwing" class="group">
    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
      <g
        :stroke="buttonColor"
        fill="none"
        fill-rule="evenodd"
        class="group-hover:stroke-dark-gray group-disabled:stroke-light-gray"
      >
        <path
          d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
          stroke-width="2"
        />
        <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
      </g>
    </svg>
  </button>
</template>
