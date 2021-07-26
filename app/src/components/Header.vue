<template>
  <div class="row">
  <header class="header mt-2">
    <div class="card">
      <div class="card-body text-center">
        <h2>{{title}}</h2>
      </div>
    </div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>
