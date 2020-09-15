import React, { useEffect } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts';

const LineChart = () => {
  useEffect(() => {
    const element: any = document.querySelector('#main');
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
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  })

  return (
    <div id="main" style={{ width: 400, height: 400 }}></div>
  );
}

export default LineChart; 