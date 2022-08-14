<script setup lang="ts"></script>

<template>
  <div class="border-b border-slate-900 pb-8">
    <div class="flex items-center justify-between">
      <slot name="title" />
      <slot name="action" />
    </div>
  </div>
</template>
