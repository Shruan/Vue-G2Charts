<template>
  <div>
    <h2>柱状图</h2>
    <g2-histogram
    :id="c1" id="c1"
    :chartData="serverData"
    :rowName="'游戏种类'"
    :columnName="'销售量'"
    ></g2-histogram>
  </div>
</template>

<script>
import G2Histogram from '@/components/G2Histogram'

export default {
  components: {
    G2Histogram
  },
  data () {
    return {
      c1: 'c1',
      serverData: []
    }
  },
  created () {
    this.serverData = [
      {genre: 'Sports', sold: 275},
      {genre: 'Strategy', sold: 115},
      {genre: 'Action', sold: 120},
      {genre: 'Shooter', sold: 350},
      {genre: 'Other', sold: 150}
    ]
    console.log(this.serverData)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
