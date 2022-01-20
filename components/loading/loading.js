Component({
  mixins: [],
  data: {
    height: 0,
    bgColor: '#fff',
    textColor: '#666'
  },
  props: {
    show: true,
    className: '', // loading类名
    content: '加载中...', // loading文字
  },
  didMount() {
    // 调用dd.getColorSchemeSync获取钉钉当前显示模式。返回当前系统的显示模式"light" 或 "dark"。
    const colorScheme = getApp().globalData.colorScheme
    this.setData({
      bgColor: colorScheme == 'light' ? '#fff' : '#000',
      textColor: colorScheme == 'light' ? '#666' : '#fff'
    })
    dd.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
        console.log(this.data.height)
      }
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
