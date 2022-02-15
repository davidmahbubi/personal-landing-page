<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
    <div class="container">
      <a class="navbar-brand text-primary-alt" @click.prevent>
        <strong>DAVID MAHBUBI</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/">
              <strong> HOME </strong>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/about">
              <strong>ABOUT</strong>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">
              <strong>PROJECTS</strong>
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">
              <strong>CONTACT</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #ff4a57 !important;
}
</style>
