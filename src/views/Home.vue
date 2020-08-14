<template>
  <div class="home">
    <h1> {{ show }} </h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Table/>
  </div >
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Table from "@/components/table.vue";
import { AppService } from '@/api';
import { mapState } from "vuex";
export default {
  name: "Home",
  created() {
    this.getShop();
  },
  computed: {
    ...mapState("AppStore", ["show"])
  },
  methods: {
    async getShop() {
      let params ={};
      // AppService.getShop(params).then(res=>{})
      await AppService.getShop(params)
    }
  },
  
  components: {
    HelloWorld,
    Table
  }
};
</script>
