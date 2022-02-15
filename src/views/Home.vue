<template>
  <div class="home">
    <div class="container">
      <div class="profile-jumbotro row">
        <div class="col text-start jumbotron-left-padding">
          <h3 class="text-primary-alt">
            <strong> Howdy ! {{ guestName || "Anonymous" }} </strong>
          </h3>
          <h1 class="mt-4 mb-4 jumbotron-title">
            <strong> I Am David, Nice to Meet You ! </strong>
          </h1>
          <p>
            Are you looking for Fullstack Web Developer ? then You are in right
            place ! Know more about me & my portfolios on my following social
            medias below
          </p>
          <ul class="socmed-list mt-4">
            <li class="mr-2">
              <a
                href="http://github.com/davidmahbubi"
                class="rounded-btn"
                target="_blank"
              >
                <i class="bx bxl-github mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://www.linkedin.com/in/david-mahbubi/"
                class="rounded-btn"
                target="_blank"
              >
                <i class="bx bxl-linkedin mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://web.facebook.com/david.mahbubi.3/"
                class="rounded-btn mr-2"
                target="_blank"
              >
                <i class="bx bxl-facebook mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://www.instagram.com/david_mhb.id/"
                class="rounded-btn"
                target="_blank"
              >
                <i class="bx bxl-instagram mt-2"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <img src="@/assets/images/me-jumbotron.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("askForGuestName");
    return {
      guestName: store.getters["getGuestName"],
    };
  },
  data() {
    return {
      userName: "",
    };
  },
  name: "Home",
};
</script>

<style scoped>
.jumbotron-left-padding {
  padding: 140px 0;
}

.rounded-btn {
  border: 2px solid #ff4a57;
  border-radius: 50%;
  font-size: 30px;
  width: 43px;
  height: 43px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  border-width: 1px;
  color: #ff4a57;
  transition: 0.1s;
  font-size: 25px;
}

.rounded-btn:hover {
  background-color: #ff4a57;
  color: white;
}

.jumbotron-title {
  font-size: 50px;
  color: black;
  line-height: 70px;
}

.socmed-list {
  padding: 0;
}

.socmed-list li {
  display: inline-block;
  margin-right: 15px !important;
}
</style>
