import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "文档中心",
  description: "文档中心",
  base: "/",
  theme,
  
});
