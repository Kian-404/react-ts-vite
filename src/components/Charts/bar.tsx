import React, { useEffect } from 'react';
import echarts from 'echarts'

const BarChart = () => {
  useEffect(() => {
    const element: any = document.querySelector('#barchart');
    var myChart = echarts.init(element);
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    window.onresize = () => {
      myChart.resize();
    }
    return () => {

    };
  });

  return (
    <div id="barchart" style={{ width: 400, height: 400 }}></div>
  )
}


export default BarChart