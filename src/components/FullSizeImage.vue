<script lang="ts" setup>
defineEmits(["closeFullSizeImage"]);
defineProps({
  show: Boolean,
  image: String,
});
</script>

<template>
  <section class="full-size-picture" v-if="show">
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="text-right">
        <button class="btn btn1 mb-10" @click="$emit('closeFullSizeImage')">
          Close
        </button>
        <img :src="image" alt="alt" />
      </div>
    </div>
  </section>
</template>
