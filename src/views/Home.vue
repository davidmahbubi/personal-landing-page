<template>
  <div class="home particle-js" style="padding-top: 130px">
    <div class="container">
      <div class="profile-jumbotro row mx-3">
        <div class="col text-start jumbotron-left-padding">
          <h3 class="text-primary-alt">
            <strong> Howdy ! {{ guestName || 'Anonymous' }} </strong>
          </h3>
          <h1 class="mt-4 mb-4 jumbotron-title">
            <strong> I Am David, Nice to Meet You ! </strong>
          </h1>
          <p>
            Are you looking for Fullstack Web Developer ? then You are in right
            place ! Know more about me & my portfolios on my social medias below
          </p>
          <ul class="socmed-list mt-4">
            <li class="mr-2">
              <a
                href="http://github.com/davidmahbubi"
                class="rounded-btn"
                target="_blank">
                <i class="bx bxl-github mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://www.linkedin.com/in/david-mahbubi/"
                class="rounded-btn"
                target="_blank">
                <i class="bx bxl-linkedin mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://web.facebook.com/david.mahbubi.3/"
                class="rounded-btn mr-2"
                target="_blank">
                <i class="bx bxl-facebook mt-2"></i>
              </a>
            </li>
            <li class="mr-2">
              <a
                href="https://www.instagram.com/david_mhb.id/"
                class="rounded-btn"
                target="_blank">
                <i class="bx bxl-instagram mt-2"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col d-md-block d-none">
          <img
            src="@/assets/images/me-jumbotron.png"
            alt=""
            style="width: 100%; max-width: 400px" />
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 150px">
      <div class="row">
        <div
          class="col d-md-block d-none left-side-card text-right pr-0 text-right"
          style="">
          <img
            src="@/assets/images/me-about.png"
            style="width: 100%; max-width: 450px; me-auto"
            alt="" />
        </div>
        <div class="col right-side-car text-start">
          <h1 class="mb-5 text-primary-alt">
            Know More About Me, {{ guestName || 'Anonymous' }}
          </h1>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            facere, excepturi harum repudiandae doloribus quae consequuntur
            totam delectus mollitia cum? Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            sunt labore placeat, natus ab distinctio pariatur vero aliquam?
            Fugiat, praesentium. ad
          </p>
          <table cellpadding="8" style="margin-left: -7px">
            <tr>
              <td>
                <strong> Name </strong>
              </td>
              <td>: David Mahbubi</td>
            </tr>
            <tr>
              <td>
                <strong> Age </strong>
              </td>
              <td>: 20</td>
            </tr>
            <tr>
              <td>
                <strong> Address </strong>
              </td>
              <td>: Jln. Raya Jember - Banyuwangi, Gambiran, Banyuwangi</td>
            </tr>
            <tr>
              <td>
                <strong>Phone Number</strong>
              </td>
              <td>: +6289681925152</td>
            </tr>
            <tr>
              <td>
                <strong>Email Address</strong>
              </td>
              <td>: ulrichdavid0370@gmail.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="row w-100" style="height: 500px; margin-top: 150px">
      <div class="row">
        <div class="col-md-6" style="padding-top: 80px">
          <h1 class="">Education Timeline</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
// import 'particles.js/particles';

export default {
  setup() {
    const store = useStore();
    store.dispatch('askForGuestName');
    return {
      guestName: store.getters['getGuestName'],
    };
  },
  mounted() {
    // particlesJS.load('particles-js', 'assets/particles.json', function () {
    //   console.log('callback - particles-js config loaded');
    // });
  },
  data() {
    return {
      userName: '',
    };
  },
  name: 'Home',
};
</script>

<style scoped>
@media (min-width: 759px) {
  .jumbotron-left-padding {
    padding: 140px 0;
  }
}

.bg-custom-primary {
  background-color: #ff4a57;
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
