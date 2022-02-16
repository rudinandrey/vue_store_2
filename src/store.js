import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        }
    }
});

export default function makeStore() {
    if (window['store'] == undefined) {
        window['store'] = store;
    }

    return window['store'];
}