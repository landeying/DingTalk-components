Component({
  mixins: [],
  data: {
    scrollTop: 0
  },
  props: {
    onGetData: () => { },
    onSetShowNoMore: () => { },
    listData: {
      page: 1,
      page_count: 1,
    },
    showData: {
      show: false, // loading
      show_no_more: false, // 底部提示
    },
    lock: false, // 请求锁
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    scroll(e) {
      this.scrollMytrip();
    },

    // scroll-view滑到底部触发事件 - http
    scrollMytrip() {
      try {
        const page = this.props.listData.page;
        const pageCount = this.props.listData.page_count;
        // 判断是否还有数据需要加载
        if (page < pageCount) {
          if (!this.props.lock) {
            const newPage = page + 1;
            this.props.onGetData({ newPage });
          }
        } else {
          this.props.onSetShowNoMore(true)
        }
      } catch (e) {
        console.log('scrollMytrip执行异常:', e);
      }
    },
  },
});
