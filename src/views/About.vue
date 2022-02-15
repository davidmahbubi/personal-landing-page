<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col d-md-block d-none left-side-card text-right">
          <img
            src="@/assets/images/me-about.jpg"
            style="width: 100%; max-width: 450px; me-auto"
            alt=""
          />
        </div>
        <div class="col right-side-car text-start">
          <h1 class="mb-5">Know More About Me, {{ guestName }}</h1>
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
          </table>
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
};
</script>
