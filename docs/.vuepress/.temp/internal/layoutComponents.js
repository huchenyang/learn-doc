import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/办公/workspace_thpower/开发者平台/项目开发文档/api-doc/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/办公/workspace_thpower/开发者平台/项目开发文档/api-doc/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("D:/办公/workspace_thpower/开发者平台/项目开发文档/api-doc/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("D:/办公/workspace_thpower/开发者平台/项目开发文档/api-doc/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
