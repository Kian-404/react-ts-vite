import React, { useEffect } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts';
import './style/chart.css'
const LineChart = () => {
  useEffect(() => {
    const element: any = document.querySelector('#lineChart');
    var lineChart = echarts.init(element);
    // 绘制图表
    lineChart.setOption({
      title: { text: 'ECharts' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    window.onresize = () => {
      lineChart.resize();
    }
  })

  return (
    <div id="lineChart" className="chart" ></div>
  );
}

export default LineChart; 