import { defineConfig } from "vitepress";
import { openNewCar } from "./router/openNewCard.mjs";
import { fundFinancial } from "./router/fundFinancial.mjs";
export default defineConfig({
  title: "非现机具文档管理平台",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "业务文档",
        items: [
          {
            text: "卡折业务",
            link: "/business/card/openNewCard.md",
          },
          { text: "理财基金", link: "/business/fundFinancial/firstRisk.md" },
        ],
      },
    ],
    sidebar: {
      "/business/card": openNewCar,
      "/business/fundFinancial": fundFinancial,
    },
  },
});
