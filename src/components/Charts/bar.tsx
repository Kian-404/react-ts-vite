import React, { useEffect } from 'react';
import echarts from 'echarts'
import './style/chart.css'

const BarChart = () => {
  useEffect(() => {
    const element: any = document.querySelector('#barchart');
    var barchart = echarts.init(element);
    // 绘制图表
    barchart.setOption({
      title: { text: 'ECharts' },
      tooltip: {},
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    window.onresize = () => {
      console.log('chart1 resize')
      barchart.resize();
    }
    return () => {

    };
  });

  return (
    <div id="barchart" className="chart"></div>
  )
}


export default BarChart