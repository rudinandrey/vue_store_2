<template>

    <h1>Main page</h1>
    <div>
        Counter: {{counter}}
    </div>

</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue';

export default {
    setup() {
        const store = useStore();

        return {
            counter: computed(()=>store.state.counter)
        }
    }
}



</script>