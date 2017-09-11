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
    charData: Array,
    // 绑定div上的唯一id选择选择器
    id: String
  },
  created () {
    // this.drawChart()
  },
  mounted () {
    this.drawChart(this.charData)       // 第一步想到的是创建的时候更新图表，但是这个不适用于异步请求接口获取相关数据，所以采用下面的监听的方式
  },
  methods: {
    drawChart (datas) {
      this.chart && this.chart.destroy()
      let data = datas
      let Stat = G2.Stat
      this.chart = new G2.Chart({
        id: this.id,
        forceFit: true,
        height: 450
      })
      this.chart.source(data)
      this.chart.coord('theta', {
        radius: 0.8 // 设置饼图的大小
      })
      this.chart.legend('name', {
        position: 'bottom',
        itemWrap: 'true',
        formatter (val) {
          for (let i = 0; i < data.length; i++) {
            let obj = data[i]
            if (obj.name === val) {
              return val + ': ' + obj.value + '%'
            }
          }
        }
      })
      this.chart.tooltip({
        title: null,
        map: {
          value: 'value'
        }
      })
      this.chart.intervalStack().position(Stat.summary.percent('value'))
        .color('name')
        .label('name*..percent', function (name, percent) {
          percent = (percent * 100).toFixed(2) + '%'
          return name + ' ' + percent
        })
      this.chart.render()
      // 设置默认选中
      let geom = this.chart.getGeoms()[0]
      let items = geom.getData()
      geom.setSelected(items[1])
      console.log(datas)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
