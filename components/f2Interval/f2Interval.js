// chartList 存放chart实例：由于是批量生成图表，所以每个图表的chart实例不能相同
let chartList = {}, _global;

Component({
  mixins: [],
  data: {},
  props: {
    data: [], // 图表数据
    id: null, // 图表id
  },
  didMount() {
  },
  didUpdate(prevProps, prevData) {
    // 数据变化时更新
    const { id } = this.props
    // 更新时其实是做了重绘，直接用changeData(data)出问题，所以用了最笨的方法
    this.updataChart(this.props.data, chartList[`chart${id}`])
  },
  didUnmount() { },
  methods: {
    updataChart(data, chart) {
      chart.clear(); // 清理所有
      chart.source(data); // 加载新数据
      chart.interval().position('NodeName*count').size(15);
      chart.coord({
        transposed: true
      });
      // 设置提示
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = items[0].value;
        }
      });
      // 设置轴线
      chart.axis('NodeName', {
        line: null,
        grid: _global._defaultAxis.grid,
        label: function label(text, index, total) {
          var textCfg = {};
          textCfg.textAlign = 'right';
          textCfg.text = text.length > 9 ? `${text.slice(0, 9)}\n${text.slice(9)}` : text;
          return textCfg;
        }
      });
      data.map(function (obj) {
        chart.guide().text({
          position: [obj.NodeName, obj.count],
          content: obj.count,
          style: {
            textAlign: 'start'
          },
          offsetX: 0,
        });
      });
      chart.render();
    },

    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      const Global = F2.Global;
      const { data, id } = this.props
      chartList[`chart${id}`] = chart
      _global = Global
      this.updataChart(data, chart)
      // 注意：需要把chart return 出来
      return chart;
    },
  },
});
