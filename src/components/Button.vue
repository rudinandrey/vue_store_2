<template>
    <div>
        <button @click="click">Click me</button>

        <div>
            Counter: {{counter}}
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    setup() {
        const store = useStore();

        const click = () => {
            console.log("press button");
            store.commit('increment');
        }

        return {click, counter: computed(() => store.state.counter)};
    }
}


</script>