<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import BackArrow from "./icons/BackArrow.vue";
import NextArrow from "./icons/NextArrow.vue";

const emit = defineEmits(["changeSlide"]);
const props = defineProps({
  name: String,
  artist: String,
  stop: {
    type: Boolean,
    default: false,
  },
});

let timer = ref(6000);
const progress = ref<HTMLElement | null>(null);

const startProgress = () => {
  const progressBar = progress.value;
  if (!progressBar) return;

  let width = 0;
  const interval = 100;
  const steps = (0.5 * 60 * 1000) / interval;

  timer.value = setInterval(() => {
    width += 100 / steps;
    progressBar.style.width = `${width}%`;
    if (width >= 100) {
      clearInterval(timer.value);
      changeSlide(1);
    }
  }, interval);
};

const changeSlide = (index: number) => {
  emit("changeSlide", index);
  clearInterval(timer.value);
  startProgress();
};

watch(
  () => props.stop,
  (newValue) => {
    if (newValue) {
      clearInterval(timer.value);
    }
  },
  { deep: true }
);

onMounted(() => {
  startProgress();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <section class="bottom-container">
    <div class="progress-bar">
      <div ref="progress" class="progress"></div>
    </div>
    <div class="slide-footer">
      <div class="footer-info">
        <h3>{{ name }}</h3>
        <small>{{ artist }}</small>
      </div>
      <div class="footer-btns">
        <BackArrow @click="changeSlide(0)" />
        <NextArrow @click="changeSlide(1)" />
      </div>
    </div>
  </section>
</template>
