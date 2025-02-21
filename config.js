// 配置
window.Config = {

  // 站点名
  SiteName: '站点状态监控---Hello映像',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'u988590-2cbfd3279f2d952d43be3f58'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'http://www.svtccxmt.com.cn'
    },
  
    {
      text: '博客',
      url: 'http://www.lwj666.top'
    }
  ]
};
