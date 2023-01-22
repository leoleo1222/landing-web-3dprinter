<template>
  <SloganComp />
  <BgComp />
  <GoalComp />
  <FlowComp />
  <AboutComp />
</template>

<script>
// @ is an alias to /src
import AboutComp from "@/components/AboutComp.vue";
import SloganComp from "@/components/SloganComp.vue";
import GoalComp from "@/components/GoalComp.vue";
import BgComp from "@/components/BgComp.vue";
import FlowComp from "@/components/FlowComp.vue";

export default {
  name: 'HomeView',
  components: {
    AboutComp,
    SloganComp,
    GoalComp,
    BgComp,
    FlowComp,
  },

}
</script>