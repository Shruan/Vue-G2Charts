<template>
  <div>
    <h2>线性图</h2>
    <g2-line :id="c1" id="c1" :chartData="serverData"></g2-line>
  </div>
</template>

<script>
import G2Line from '@/components/G2Line'

export default {
  components: {
    G2Line
  },
  data () {
    return {
      c1: 'c1',
      serverData: []
    }
  },
  created () {
    this.serverData = [
      {'mzkId': 112, 'strftime': '2017-01-11', 'value': 9275501},
      {'mzkId': 112, 'strftime': '2017-01-12', 'value': 9281904},
      {'mzkId': 112, 'strftime': '2017-01-13', 'value': 9290777},
      {'mzkId': 112, 'strftime': '2017-01-14', 'value': 9297913},
      {'mzkId': 112, 'strftime': '2017-01-15', 'value': 9306918},
      {'mzkId': 112, 'strftime': '2017-01-16', 'value': 9315641}
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
