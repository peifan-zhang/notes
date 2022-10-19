export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"张培繁的个人博客\",\"tagline\":\"Web前端技术博客，积跬步以至千里，致敬每个爱学习的你。\",\"features\":[{\"title\":\"前端\",\"details\":\"JavaScript、ES6、Vue框架等前端技术\",\"link\":\"/web/\",\"imgUrl\":\"/img/web.png\"},{\"title\":\"页面\",\"details\":\"html(5)/css(3)，前端页面相关技术\",\"link\":\"/ui/\",\"imgUrl\":\"/img/ui.png\"},{\"title\":\"技术\",\"details\":\"技术文档、教程、技巧、总结等文章\",\"link\":\"/technology/\",\"imgUrl\":\"/img/other.png\"}]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"关于\",\"slug\":\"关于\",\"link\":\"#关于\",\"children\":[{\"level\":3,\"title\":\"📚Blog\",\"slug\":\"📚blog\",\"link\":\"#📚blog\",\"children\":[]},{\"level\":3,\"title\":\"🎨Theme\",\"slug\":\"🎨theme\",\"link\":\"#🎨theme\",\"children\":[]}]},{\"level\":2,\"title\":\"特色功能\",\"slug\":\"特色功能\",\"link\":\"#特色功能\",\"children\":[]},{\"level\":2,\"title\":\"📧 联系\",\"slug\":\"联系\",\"link\":\"#联系\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
