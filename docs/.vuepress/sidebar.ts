import { sidebar } from "vuepress-theme-hope";

export default sidebar([ 
  {
    text: "文档",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "消息",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1"],
      }
    ]
  }
]);
