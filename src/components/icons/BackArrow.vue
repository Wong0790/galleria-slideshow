<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();

const isStarryNight = computed(
  () => currentRoute.params.name === "Starry Night"
);
const buttonColor = computed(() => (isStarryNight.value ? "#E5E5E5" : "#000"));
</script>

<template>
  <button :disabled="isStarryNight" class="group">
    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
      <g
        :stroke="buttonColor"
        fill="none"
        fill-rule="evenodd"
        class="group-hover:stroke-dark-gray group-disabled:stroke-light-gray"
      >
        <path
          d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
          stroke-width="2"
        />
        <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
      </g>
    </svg>
  </button>
</template>
