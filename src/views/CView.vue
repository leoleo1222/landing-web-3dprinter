<template>
<div></div>

<BgComp/>
</template>

<script>
import BgComp from '@/components/BgComp.vue';
// @ is an alias to /src

export default {
    name: "CView",
    components: {
        BgComp
    },
};
</script>

<style>
.container{
  min-height: 100vh;
  justify-content: flex;
}

* {
  font-family: "Poppins", sans-serif;
}

body {
  background: #1c5f83;      
}
</style>