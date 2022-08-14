<script setup lang="ts">
const props = defineProps({
  alternate: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: null,
  },
});

const NuxtLink = resolveComponent("NuxtLink");

const variantClass = computed<string>(() => {
  if (props.alternate) {
    return "border border-white text-white hover:bg-white hover:text-slate-900";
  } else {
    return "border border-brand text-brand hover:bg-brand hover:text-white";
  }
});
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="inline-block py-3 px-4 transition ease-out duration-300"
    :class="variantClass"
  >
    {{ text }}
  </component>
</template>
