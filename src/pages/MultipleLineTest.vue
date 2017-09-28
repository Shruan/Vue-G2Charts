<template>
  <div>
    <h2>多线图</h2>
    <g2-multiple-line :id="c1" id="c1" :chartData="serverData"></g2-multiple-line>
  </div>
</template>

<script>
import G2MultipleLine from '@/components/G2MultipleLine'

export default {
  components: {
    G2MultipleLine
  },
  data () {
    return {
      c1: 'c1',
      serverData: []
    }
  },
  created () {
    this.serverData = [
      {'strftime': '2017-01-11', 'value': 9275501, 'mzkId': '112'},
      {'strftime': '2017-01-12', 'value': 9181904, 'mzkId': '112'},
      {'strftime': '2017-01-13', 'value': 9290777, 'mzkId': '112'},
      {'strftime': '2017-01-14', 'value': 9197913, 'mzkId': '112'},
      {'strftime': '2017-01-15', 'value': 9306918, 'mzkId': '112'},
      {'strftime': '2017-01-16', 'value': 9215641, 'mzkId': '112'},
      {'strftime': '2017-01-11', 'value': 9433501, 'mzkId': '80'},
      {'strftime': '2017-01-12', 'value': 9681904, 'mzkId': '80'},
      {'strftime': '2017-01-13', 'value': 9590777, 'mzkId': '80'},
      {'strftime': '2017-01-14', 'value': 9343413, 'mzkId': '80'},
      {'strftime': '2017-01-15', 'value': 9606418, 'mzkId': '80'},
      {'strftime': '2017-01-16', 'value': 9435641, 'mzkId': '80'}
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
