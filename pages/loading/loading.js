Page({
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    id: '1',
    lock: false,
  },
  onLoad() { },
  onShowLoading(e) {
    const { id } = e.target.dataset
    const loadingName = `loading${id}`
    if (!this.data.lock) {
      this.setData({
        [loadingName]: true,
        id,
        lock: true
      })
      setTimeout(() => {
        this.setData({
          [loadingName]: false,
          lock: false
        })
      }, 2000)
    }
  }
});
