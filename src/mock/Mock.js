// 使用 Mock
const Mock = require('mockjs');
const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': '@ctitle',
    'txt': '@csentence',
    'content': '@cparagraph',
    'date': '@DATE',
    'basic': '@boolean',
  }]
})
const newsData = Mock.mock({
  'newsData|2': [{
    'id|+1': 1,
    'title': '@csentence',
  }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 2))

// Footer 帮助连接
const helpLinkData = [
  {
    id: 1,
    title: "如何注册",
    url: 'https://'
  },
  {
    id: 2,
    title: "交易流程",
    url: 'https://'
  },
  {
    id: 3,
    title: "如何购买",
    url: 'https://'
  },
  {
    id: 4,
    title: "如何支付",
    url: 'https://'
  },
  {
    id: 5,
    title: "如何挂单",
    url: 'https://'
  },
  {
    id: 6,
    title: "如何收款",
    url: 'https://'
  },
]

// Footer 公司介绍联系
const footerLinkData = [
  {
    id: 1,
    title: "关于我们",
    url: 'https://'
  },
  {
    id: 2,
    title: "平台动态",
    url: 'https://'
  },
  {
    id: 3,
    title: "平台公告",
    url: 'https://'
  },
  {
    id: 4,
    title: "联系我们",
    url: 'https://'
  },
  {
    id: 5,
    title: "人才招聘",
    url: 'https://'
  },
  {
    id: 6,
    title: "法律声明",
    url: 'https://'
  },
  {
    id: 7,
    title: "合作伙伴",
    url: 'https://'
  },
]

// 网站数据概览
const dateStatistics = [
  {
    id: 1,
    name: "用户总数",
    data: "99,999",
    unit: "个"
  },
  {
    id: 2,
    name: "总交易额",
    data: "999,999,999",
    unit: "万元"
  },
  {
    id: 3,
    name: "月新增交易额",
    data: "99,999",
    unit: "万元"
  }
]

// 轮播图内类目连接数据
const menuData = [
  {
    id: 1,
    title: "铜杆",
    children: [
      { goods: "铜杆" },
      { goods: "铜线" },
      { goods: "裸铜丝" },
    ]
  },
  {
    id: 2,
    title: "电解铜",
    children: [
      { goods: "铜杆" }
    ]

  },
  {
    id: 3,
    title: "铝杆",
    children: [
      { goods: "普铜杆" },
      { goods: "铝合金杆" }
    ]
  },
  {
    id: 4,
    title: "铝锭",
    children: [
      { goods: "A00铝" },
    ]
  },
]

export default { 
  data, newsData, helpLinkData, footerLinkData, dateStatistics, menuData 
};
