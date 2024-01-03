<template>
  <div>{{house}}</div>
</template>

<script>
import { getHouseDetail } from '../../api/house'
export default {
  name: 'Detail',
  components: {
  },
  data() {
    return {
      house: {},
    };
  },
  async mounted(){
    console.log(this.$route.query.id)
    const houseId = this.$route.query.id 
    const res = await getHouseDetail({houseId:houseId})
    console.log('res',res)  
    console.log('res.data.data.items',res.data.data.item)
    this.house = res.data.data.item  
  },
  methods: {
    
  },
}
</script>

<style>

</style>