export const data = JSON.parse("{\"key\":\"v-3fc9440c\",\"path\":\"/vue%E6%96%87%E6%A1%A3.html\",\"title\":\"页面的标题2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题2\",\"date\":\"2019-12-25T14:27:01.000Z\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"vue文档.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
