<template>
  <div>
    <g2-pie :id="c1" id="c1" :charData="serverData"></g2-pie>
  </div>
</template>

<script>
import G2Pie from '@/components/G2Pie'

export default {
  components: {
    G2Pie
  },
  data () {
    return {
      c1: 'c1',
      serverData: []
    }
  },
  created () {
    this.serverData = [
      // {name: 'Microsoft Internet Explorer', value: 56.33 },
      {name: 'Chrome', value: 24.03},
      {name: 'Firefox', value: 10.38},
      {name: 'Safari', value: 4.77},
      {name: 'Opera', value: 0.91},
      {name: 'Proprietary or Undetectable', value: 0.2}
    ]
    // console.log(this.serverData)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
