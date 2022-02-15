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
        alert(
          "This page has magic, hehehe. No, kidding. This page save your username for your current session, when you navigate through this page, you'll never lost your name so you don't have to input it again !"
        );
        alert(
          "Of course you still can change your name by refreshing this page (press F5 or CTRL + R)"
        );
      }
    },
  },
  modules: {},
});
