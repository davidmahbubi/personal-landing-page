<template>
  <div class="card">
    <div class="card-body">
      <slot />
      <a
        href="https://github.com/davidmahbubi/html5-canvas-logo"
        class="rounded-btn d-inline-block mr-3"
        target="_blank"
      >
        <div
          class="border d-inline-block text-primary-alt project-card-btn"
          style="padding: 5px 15px; border-radius: 20px"
        >
          <i class="bx bxl-github mt-2 mr-3"></i>
          GitHub
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card-btn {
  border: 1px solid #ff4a57 !important;
  transition: 0.2s;
}

.project-card-btn:hover {
  background-color: #c22f39;
  color: white !important;
}
</style>
