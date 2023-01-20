<template>
    <div></div>
    <SloganComp />
    <div> <br/> <br/> </div>
    <GoalComp />
</template>
<script>
// @ is an alias to /src

import GoalComp from '@/components/GoalComp.vue';
import SloganComp from '@/components/SloganComp.vue';
export default {
    name: "DView",
    components: {
        SloganComp,
        GoalComp
    },
};
</script>