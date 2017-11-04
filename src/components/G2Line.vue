<template>
  <div :id="id" style="max-width:1000px; margin: 0 auto">

  </div>
</template>

<script>
import G2 from 'g2'
export default {
  data () {
    return {
      chart: null
    }
  },
  props: {
    chartData: {
      type: Array,
      default () {
        return {
          // G2官网上的模拟数据
          data: [
            {'mzkId': 112, 'strftime': '2017-01-11', 'value': 9275501},
            {'mzkId': 112, 'strftime': '2017-01-12', 'value': 9281904},
            {'mzkId': 112, 'strftime': '2017-01-13', 'value': 9290777},
            {'mzkId': 112, 'strftime': '2017-01-14', 'value': 9297913},
            {'mzkId': 112, 'strftime': '2017-01-15', 'value': 9306918},
            {'mzkId': 112, 'strftime': '2017-01-16', 'value': 9315641}
          ]
        }
      }
    },
    // 绑定div上的唯一id选择选择器
    id: String
  },
  // watch: {
  //   chartData (val, oldVal) {
  //     console.log('new: %s, old: %s', val, oldVal)
  //     this.drawChart(val)
  //   }
  // },
  created () {
    // this.drawChart()
  },
  mounted () {
    this.drawChart(this.chartData)
  },
  methods: {
    drawChart (datas) {
      this.chart && this.chart.destroy()
      let data = datas
      this.chart = new G2.Chart({
        id: this.id,
        forceFit: true,
        height: 250
      })
      this.chart.source(data, {
        strftime: {
          alias: '日期',
          type: 'cat',
          range: [0, 1]
        },
        value: {
          alias: '数量值(人)'
        }
      })
      this.chart.line().position('strftime*value').size(2)
      this.chart.point().position('strftime*value').color('#757373').shape('circle').label('value', {offset: 20, label: {fill: '#000'}})
      this.chart.animate(false)
      this.chart.render()
      console.log(datas)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
