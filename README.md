![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetterfox&label=&icon=github&color=%23198754&message=&style=flat&tz=US%2FEastern)![GitHub Maintained](https://img.shields.io/badge/maintained-yes-green)![GitHub last commit](https://img.shields.io/github/last-commit/yokoffing/betterfox)![GitHub issues](https://img.shields.io/github/issues/yokoffing/betterfox)![GitHub closed issues](https://img.shields.io/github/issues-closed/yokoffing/betterfox)![GitHub repo size](https://img.shields.io/github/repo-size/yokoffing/betterfox)[![shields.io Stars](https://img.shields.io/github/stars/yokoffing/betterfox)](https://github.com/yokoffing/betterfox/stargazers)

# Betterfox
用于增强 [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) 的 [about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) 调整。

## 为日常浏览而打造
更快、更私密、更安全 — 无需使用第三方代码。

Betterfox 是一份受[边际收益递减规律](https://miro.medium.com/v2/resize:fit:1206/1*lcOcxriV_II_lZuXQYLoXg.jpeg)和[最小有效剂量](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e)启发的偏好设置列表。

## 必读内容
0) 创建一个[备份配置文件](https://github.com/yokoffing/Betterfox/wiki/Backup)。
1) 从[这里](https://raw.githubusercontent.com/yokoffing/Betterfox/main/user.js)下载 user.js 文件（右键点击 > `另存为…`）。
2) 查看[常用覆盖设置](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides)和[可选强化设置](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening)以进行必要的更改。
3) 打开 Firefox。在地址栏中输入 `about:profiles` 并按 **Enter** 键。
4) 对于您要使用的配置文件，在 **根目录** 部分点击 **打开文件夹**。
5) 将 `user.js` 文件移动到该文件夹中。

*重启 Firefox 后：*
1) 安装一个**广告拦截器**，如 [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/)，并使用我们的[推荐过滤器](https://github.com/yokoffing/filterlists#guidelines)。
2) 使用您选择的[提供商](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#secure-dns)启用 **DNS 级保护**，以进一步防范安全威胁、广告和跟踪器。

## 简单目标
1) **极简主义：** 移除不需要的内容
2) **效率：** 释放 Firefox 的快速和性能能力
3) **隐私：** 在不导致网站损坏的情况下保护您的数据

## 简单配置

`Fastfox`、`Securefox`、`Peskyfox` 和 `Smoothfox` 是 Firefox 内部设置的指南。

`user.js` — 一个控制 Firefox 设置的配置文件 — 是从这些指南中精选而成的。

| 列表      | 描述 |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js)   | 提高 Firefox 的浏览速度。让 Chrome 也要甘拜下风！|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/main/Securefox.js) | 在不导致网站损坏的情况下保护用户数据。 |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js)  | 提供干净、无干扰的浏览体验。 |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js) | 在您喜爱的浏览器上获得类似 Edge 的平滑滚动效果 — 或者选择更适合您的风格。 |
| [user.js](https://github.com/yokoffing/Betterfox/blob/main/user.js) | 所有必需的设置。没有任何会导致损坏的设置。这就是您的 `user.js`。 |

## 认可

### 浏览器集成
> [!重要]
> 虽然下面列出的浏览器在一定程度上集成了 Betterfox，但它们通常会以降低其效果的方式对其进行修改。为了获得最佳效果，即使使用 Firefox 分支版本，也请应用 `user.js` 文件。

* [Zen](https://github.com/zen-browser/desktop?tab=readme-ov-file) | [文件](https://github.com/zen-browser/desktop/blob/stable/src/browser/app/profile/zen-browser.js) (2024年7月)
* [FireDragon](https://github.com/dr460nf1r3/firedragon-browser/blob/master/README.md) | [文件](https://github.com/dr460nf1r3/firedragon-browser/blob/55fc6e5029542cd90fabe23cb44c89568d74d006/firedragon.cfg#L822-L824) (2024年1月?)
* [Midori](https://github.com/goastian/midori-desktop/blob/ESR115/README.md) | [文件](https://github.com/goastian/midori-desktop/blob/f3d8d96eb8e08f35a64e3c957bea4e839d7c7730/floorp/browser/components/userjsUtils.sys.mjs#L28-L33) (2023年12月?)
* [Mercury](https://github.com/Alex313031/Mercury/releases/tag/v.115.3.0) | [文件](https://github.com/Alex313031/Mercury/commit/eb9600f9fb8f48c8f5b5c6f3264fbcdb5caff7f5) (2023年9月)
* [Waterfox](https://www.waterfox.net/docs/releases/G6.0/) | [文件](https://github.com/WaterfoxCo/Waterfox/tree/current/waterfox/browser/app/profile) (2023年9月)
* [Floorp](https://github.com/Floorp-Projects/Floorp#-betterfox) <sup>[1](https://github.com/Floorp-Projects/Floorp/issues/233#issuecomment-1543557167) [2](https://blog.ablaze.one/3135/2023-04-01/)</sup> | [文件](https://github.com/Floorp-Projects/Floorp/blob/ESR115/floorp/browser/components/preferences/userjs.inc.xhtml) (2023年4月)
* [Pulse](https://github.com/pulse-browser/browser#%EF%B8%8F-credits) | [文件](https://github.com/pulse-browser/browser/tree/alpha/src/browser/app/profile) (2021年12月)
* [Ghostery Private Browser](https://github.com/ghostery/user-agent-desktop#community) <sup>[1](https://web.archive.org/web/20210509171835/https://www.ghostery.com/ghostery-dawn-update-more/) [2](https://web.archive.org/web/20210921114333/https://www.ghostery.com/ghostery-dawn-product-update/)</sup> | [文件](https://github.com/ghostery/user-agent-desktop/tree/main/brands/ghostery/branding/pref) (2021年2月)

### YouTube
* [A Better Firefox](https://youtu.be/JuHIwCFx34Q?si=1dx39t3HX5kzNVj-&t=133) (2025年3月)
* [Ditch Chrome for One Of These BETTER BROWSERS!](https://youtu.be/ygkxFc8SZlc?si=m5NQe-b_oFXs5crb&t=230) (2024年8月)
* [The ULTIMATE Browser Tier List](https://youtu.be/j5r6jFE8gic?t=560) (2023年3月)
* [I Hate Firefox. But I'm Still Switching Back to It.](https://youtu.be/w0SJFED5xK0?t=220) (2022年11月)
* [Español] [Optimize and Accelerate Firefox](https://www.youtube.com/watch?v=3XtoONmq5_Q) (2022年11月)
* [How To Improve Firefox Performance](https://www.youtube.com/watch?v=N8IOJiOFVEk) (2021年12月)

### 播客
* [Italian] [Digitalia.fm](https://digitalia.fm/684/) | 1:41:35–1:42:41 (2023年7月)
* [GhoSTORIES with Franz & Pete](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh) | 17:05–18:40 (2021年2月)

### 文章
* [Español] [Firefox is an excellent browser, but this small modification makes it much faster and more private](https://www.genbeta.com/a-fondo/firefox-excelente-navegador-esta-pequena-modificacion-hace-mucho-rapido-privado-asi-funciona-betterfox) (2025年1月)
* [Browsers for Daily Use](https://anhkhoakz.neocities.org/blog/browsers-for-daily-using/#firefox-but-hardened) (2024年1月)
* [Avoiding Manifest V3 – Escaping the Ad-Pocalypse](https://www.xbitlabs.com/avoiding-manifest-v3/) (2023年12月)
* [German] [Pulse Browser Review: Firefox fork with Turbo tweaks and Opera sidebar](https://www.computerbild.de/artikel/cb-Tipps-Software-Pulse-Browser-Review-ein-Firefox-Fork-mit-Seitenleiste-wie-bei-Opera-35644139.html#:~:text=Noch%20mehr%20Speed%2DFeatures) (2023年4月)
* [2023 Browser Showdown: Comparing Chrome, Brave, Firefox, Vivaldi, and Opera](https://www.appdate.lk/technology/2023-browser-showdown/) (2023年1月)

### 指南
* [FMHY Browser Tools: Privacy Tweaks](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_based_browsers)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [比较器](https://jm42.github.io/compare-user.js/)

### 评价
* "我使用这个……性能绝对令人惊叹。在加载网站方面确实有巨大的差异。" - [DIRIKtv](https://youtu.be/N8IOJiOFVEk?t=16)
* "BetterFox ……将提供足够的隐私保护并有助于提高性能。" - [Qdoit12Super](https://old.reddit.com/r/browsers/comments/139h4my/suggestion_for_finding_3_good_privacy_focus/jj3n3qn/?context=2)
* "……彻底改变了我使用 Firefox 的体验。提高了速度、安全性、流畅度，并移除了杂乱内容。" - [AppDate](https://www.appdate.lk/technology/2023-browser-showdown/#:~:text=Used%20the%20BetterFox%20user%20config%20settings%20with%20some%20overrides%20which%20drastically%20changed%20the%20experience)
* "Firefox 配合 uBlock Origin 扩展并使用 Betterfox 调整后，比 Safari 更快。" - [cugeloid](https://elephas.app/blog/best-browsers-mac#what-is-the-best-browser-for-mac-according-to-redditandnbsp)
* "我认为如果没有 Betterfox，我无法使用 Firefox。" - [Professional_Fun4616](https://old.reddit.com/r/nextdns/comments/15y815f/the_people_behind_betterfox_have_this_awesome/jxb7cir/?context=3)
* "最好的调整集合。" - [AuRiMaS](https://old.reddit.com/r/MozillaFirefox/comments/15cc1vk/about_changes_in_aboutconfig/jtyx910/?context=3)
* "FF 现在快多了！" - [whotheff](https://old.reddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy36hyz/)
* "……现在的体验太好了，我想我不会再回到任何基于 Chromium 的浏览器了。" - [Mr_Compromise](https://old.reddit.com/r/pcmasterrace/comments/zwioe1/what_browser_will_you_be_using_in_2023_please/j1wmbxo/)

## 支持

如果您喜欢这个项目，请点一个 :star:（右上角）并成为[关注者](https://github.com/yokoffing/Betterfox/stargazers)！

[![Stargazers repo roster for @yokoffing/Betterfox](https://reporoster.com/stars/dark/yokoffing/Betterfox)](https://github.com/yokoffing/Betterfox/stargazers)

<a href='https://ko-fi.com/Q5Q5G8EPH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
<noscript><a href="https://liberapay.com/yokoffing/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a></noscript>

## 致谢
* Betterfox 反映了 [arkenfox](https://github.com/arkenfox/user.js) 提供的持续工作。此外，本仓库包含从其他来源复制或改编的内容。重叠内容的版权归原作者所有。
* 感谢 [Firefox](https://www.mozilla.org/en-US/firefox/new/) 团队和在 [Bugzilla](https://bugzilla.mozilla.org/home) 上工作的开发者，为开放网络而战。
* 感谢 [Denperidge](https://github.com/Denperidge) 在 v.131 版本中为高级用户添加了 [`install.py`](https://github.com/yokoffing/Betterfox/blob/main/install.py)。
* 特别感谢 [Waterfox](https://github.com/WaterfoxCo/Waterfox) 的 [Alex Kontos](https://github.com/MrAlex94) 在 v.116 版本中的合作。
* 非常感谢 2021 年的 [Ghostery](https://github.com/ghostery) 团队在早期阶段大规模测试 Betterfox。
