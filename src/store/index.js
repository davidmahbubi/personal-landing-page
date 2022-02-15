import { createStore } from "vuex";

export default createStore({
  state: {
    guestName: "",
  },
  getters: {
    getGuestName: (state) => state.guestName,
  },
  mutations: {
    setGuestName: (state, guestName) => (state.guestName = guestName),
  },
  actions: {
    askForGuestName({ commit, state }) {
      if (!state.guestName) {
        commit(
          "setGuestName",
          prompt("Before entering, please kindly input your name :)") ||
            "Anonymous"
        );
      }
    },
  },
  modules: {},
});
