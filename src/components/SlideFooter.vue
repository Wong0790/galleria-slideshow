<script lang="ts" setup>
import { onMounted, ref } from "vue";

defineProps({
  name: String,
  artist: String,
});

const progress = ref<HTMLElement | null>(null);

const startProgress = () => {
  const progressBar = progress.value;
  if (!progressBar) return;

  let width = 0;
  const interval = 100;
  const steps = (0.5 * 60 * 1000) / interval;

  const timer = setInterval(() => {
    width += 100 / steps;
    progressBar.style.width = `${width}%`;
    if (width >= 100) {
      clearInterval(timer);
    }
  }, interval);
};

onMounted(() => {
  startProgress();
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
        <button>
          <img
            src="@assets/shared/icon-back-button.svg"
            alt="Navigate Back Arrow"
            role="img"
            width="26"
            height="24"
          />
        </button>
        <button>
          <img
            src="@assets/shared/icon-next-button.svg"
            alt="Navigate Next Arrow"
            role="img"
            width="26"
            height="24"
          />
        </button>
      </div>
    </div>
  </section>
</template>
