<template>
  <div class="justify-center gap-8 grid grid-rows-[7fr,1fr]">
    <output class="w-[900px] p-2 mt-3 border-2 rounded-lg text-sm font-semibold whitespace-pre-wrap">{{
      output
    }}</output>
    <form
      class="flex items-center justify-center gap-2"
      @submit="onSubmit">
      <textarea
        class="w-[500px] rounded-lg mr-2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        v-model="message" />
      <button
        class="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-500">
        Send
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
// defineProps<{}>();

const onSubmit = (e: Event) => {
  e.preventDefault();
  if (!message.value) {
    return;
  }
  output.value += `${message.value}\n`;
  message.value = '';
};

// message
const message = ref('');

// output
const output = ref('');
</script>
