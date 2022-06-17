export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-02337b00","v-438b0fcb","v-c66a01bc","v-682819e4","v-10dcea66","v-5c17c86e","v-03842690","v-4eaf9f84","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-02337b00","v-438b0fcb","v-c66a01bc","v-682819e4","v-10dcea66","v-5c17c86e","v-03842690","v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
