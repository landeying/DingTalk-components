Page({
  data: {
    listData: {
      page: 1,
      page_count: null,
    },
    // 显示加载更多
    showData: {
      show: false, // loading
      show_no_more: false, // 底部提示
    },
    lock: false, // 锁定请求
    scrollTop: 0,
    itemList: [], // 列表数据
  },
  onLoad() {
    this.getList({ page: 1, loading: true, content: '加载中...' })
  },

  // 模拟接口
  async getList({ page, loading, content }) {
    try {
      // lock 判断分页是否请求完成，若没有完成，阻止多次请求
      if (!this.data.lock) {
        this.setData({
          'listData.page': page,
          'showData.show_no_more': false,
          lock: true
        })
        // 如果有分页加载和切换加载在一起的场景，
        // 需要区分是显示分页加载的loading还是切换数据时加载的loading
        if (loading) {
          dd.showLoading({ content });
        } else {
          this.setData({
            'showData.show': true,
          })
        }
        // const data = {
        //   page,
        //   limit: 10
        // }
        // const { searchData } = this.data
        // const res = await getList({ ...data, ...searchData })
        // if (res.data.code === 200) {
        this.setData({ lock: false })
        dd.hideLoading()
        // const { items } = res.data.data
        // const page_count = data.page_count
        const page_count = 3
        const items = [
          {
            id: `${page == 1 ? '1' : page - 1}${page != 1 ? '1' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '2' : page - 1}${page != 1 ? '2' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '3' : page - 1}${page != 1 ? '3' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '4' : page - 1}${page != 1 ? '4' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '5' : page - 1}${page != 1 ? '5' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '6' : page - 1}${page != 1 ? '6' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '7' : page - 1}${page != 1 ? '7' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '8' : page - 1}${page != 1 ? '8' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '9' : page - 1}${page != 1 ? '9' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          },
          {
            id: `${page == 1 ? '10' : page }${page != 1 ? '0' : ''}`,
            name: `测试数据${Math.round(Math.random() * 100)}`
          }
        ]
        let itemList = this.data.itemList
        // let showList = false // 是否显示列表
        if (items.length > 0) {
          // 如果后台获取到数据不为空，将获取的数据追加到列表中
          // showList = true;
          let arrList = items.map((el, index) => {
            // do something
            return {
              ...items[index],
              // ...{
              //   // 前端设置的字段
              // }
            }
          })
          itemList = [...itemList, ...arrList]
        } else {
          // showList = false;
        }
        // 判断是否显示分页加载
        if (items.length > 0 && items.length < 10) {
          this.setData({
            'showData.show_no_more': true
          })
        } else {
          this.setData({
            'showData.show_no_more': false
          })
        }
        this.setData({
          itemList,
          // showList,
          'listData.page_count': page_count,
          'showData.show': false
        })
        // } else if (res.data.code !== 40003) {
        //   dd.hideLoading();
        //   this.setData({ lock: false })
        //   dd.alert({
        //     title: '提示',
        //     content: res.data.msg,
        //     buttonText: '我知道了',
        //   });
        // }
      }
    } catch (error) {
      console.log(error)
    }
  },

  // scroll-view滑到底部触发事件
  getData(data) {
    this.setData({
      'listData.page': data.newPage,
      'showData.show': true,
    })
    setTimeout(() => {
      // 定时器模拟接口加载
      this.getList({ page: data.newPage, loading: false })
    }, 2000)
  },

  // scroll-view滑到底部显示没有更多
  setShowNoMore(showNoMore) {
    this.setData({
      'showData.show_no_more': showNoMore
    })
  },

  // 回到顶部
  handleScrollTop() {
    this.setData({
      scrollTop: 0
    })
  },
});
