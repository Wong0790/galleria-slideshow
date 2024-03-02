<script lang="ts" setup>
import { loadImg } from "@composables/app";

defineEmits(["closeFullSizeImage"]);
defineProps({
  name: String,
  show: Boolean,
  image: String,
});
</script>

<template>
  <section class="full-size-picture" v-if="show">
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="text-right">
        <button
          class="btn btn1 text-white mb-10"
          @click="$emit('closeFullSizeImage')"
        >
          Close
        </button>
        <img
          :src="loadImg(image)"
          :alt="`${name} painting`"
          width="auto"
          height="auto"
        />
      </div>
    </div>
  </section>
</template>
