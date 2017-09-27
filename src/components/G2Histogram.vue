<!-- 柱状图 -->
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
    chartData: Array,
    // 绑定div上的唯一id选择选择器
    id: String,
    columnName: String, // 列名
    rowName: String, // 行名
    columnKey: String, // 列值
    rowKey: String // 行值
  },
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
        width: 1000,
        height: 250
      })
      this.chart.source(data, {
        genre: {
          alias: this.columnName // 列定义，定义该属性显示的别名
        },
        sold: {
          alias: this.rowName
        }
      })
      this.chart.interval().position('genre*sold').color('genre')
      this.chart.render()
      console.log(datas)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
