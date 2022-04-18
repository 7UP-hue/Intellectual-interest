<template>
  <div class="w-full" style="height: 100%">
    <my-header></my-header>
    <div class="mx-4 bg-white rounded border shadow-lg shadow-gray-300" style="min-height: 630px; margin-top: 75px">
      <div class="pt-5 text-left pl-3 text-xl font-bold">智趣科普后台系统</div>
      <div class="flex justify-around mt-3 p-3 text-lg">
        <span class="adminMsg">用户总数<div class="digit">2022</div></span>
        <span class="adminMsg">总发布视频数<div class="digit">1024</div></span>
        <span class="adminMsg">总发布文档数<div class="digit">1354</div></span>
        <span class="adminMsg">总访客量<div class="digit">4399</div></span>
        <span class="adminMsg">今日访客量<div class="digit">1354</div></span>
      </div>
      <div class="w-full h-300px mt-5" ref="oneRef" id="resChart"></div>
      <div class="w-full h-300px mt-5" ref="twoRef" id="userChart"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import myHeader from './header.vue'
  import { onMounted, reactive, ref } from 'vue';
 
  // 按需引入echarts
import * as echarts from 'echarts';
import func from 'vue-temp/vue-editor-bridge';
   // 图表数据
  const juniorData = reactive([
    {value: 1034, name: '语文'},
    {value: 1443, name: '数学'},
    {value: 2833, name: '英语'},
    {value: 3453, name: '物理'},
    {value: 243, name: '化学'},
    {value: 227, name: '生物'},
    {value: 133, name: '地理'},
    {value: 892, name: '历史'},
    {value: 246, name: '政治'}
  ])
  const highData = reactive([
    {value: 104, name: '语文'},
    {value: 443, name: '数学'},
    {value: 833, name: '英语'},
    {value: 453, name: '物理'},
    {value: 2043, name: '化学'},
    {value: 527, name: '生物'},
    {value: 1033, name: '地理'},
    {value: 892, name: '历史'},
    {value: 246, name: '政治'}
  ])
  const visitorData = reactive([
    120,234,245,35,254,453,356
  ])
  const newUserData = reactive([
    25,54,85,35,56,99,134
  ])
  const date = reactive([
    '2022.04.02','2022.04.03','2022.04.04','2022.04.05','2022.04.06','2022.04.07'
  ])
  // 使用echarts
  onMounted(
    () => {
      console.log('hello')
      init();
      console.log(echarts,'tt')
    }
  )
  const oneRef = ref()
  const twoRef = ref()
  function init() {
    //  echarts.dispose(document.getElementById('resChart'))
    //  echarts.dispose(document.getElementById('userChart'))
    var resChart = echarts.init(oneRef.value)
    const resOption = reactive({
      title: {
        text: '资源统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        origent: 'horizontal',
        left: 'center',
        top: '15%'
      },
      series: [
        {
          name: '初中',
          type: 'pie',
          data: juniorData,
          center: ['25%', '65%'],
          radius: '65%',
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shodowColor: 'rgba(0,0,0,.5)'
            }
          }
        },
        {
          name: '高中',
          type: 'pie',
          center: ['75%', '65%'],
          radius: '65%',
          data: highData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shodowColor: 'rgba(0,0,0,.5)'
            }
          }
        }
      ]
    })
    resChart.setOption(resOption);
    var userChart = echarts.init(twoRef.value)
    const userOption = reactive({
      title: {
        text: '访客统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: date
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '日访客量',
          data: visitorData,
          type: 'line'
        },
        {
          name: '新增用户量',
          data: newUserData,
          type: 'line'
        },
      ]
    })
    userChart.setOption(userOption)
    // 自适应大小
    window.onresize = function () {
      resChart.resize()
      userChart.resize()
    }
  }
</script>
<style scoped>
  .adminMsg {
    display: inline-block;
    width: 18%;
    border: 1px solid #eee;
    border-radius: .3em;
    box-shadow: 5px 5px 10px 1px #eee;
    text-align: left;
    padding: 1em
  }
  .digit {
    color: rgb(154,96,180);
    font-size: 1.5em;
    margin-top: .5em;
    font-weight: 700;
  }
</style>
