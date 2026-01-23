//
/* 您可以复制+粘贴此文件并按原样使用。
 *
 * 如果在程序运行时更改了about:config设置，
 * 应用程序重启后这些更改将被user.js覆盖。
 *
 * 要对首选项进行持久化更改，您需要编辑user.js。
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 146                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX (速度优化)                                               *
 ****************************************************************************/
/** GENERAL (通用) ***/
user_pref("gfx.content.skia-font-cache-size", 32); // Skia字体缓存大小（MB），提升字体渲染性能
user_pref("nglayout.initialpaint.delay", 0); // 减少页面开始渲染前的等待时间（默认250ms），提升视觉加载速度
user_pref("nglayout.initialpaint.delay_in_oopif", 0); // 减少外部框架（iframe）开始渲染前的等待时间
user_pref("dom.ipc.processCount", 8); // 设置内容进程数（建议根据RAM调整，8是现代电脑的平衡值）

/** GFX (图形/渲染) ***/
user_pref("gfx.webrender.layer-compositor", true); // 启用WebRender图层合成器，提升GPU渲染性能
user_pref("gfx.webrender.all", true); // 强制启用硬件WebRender，利用GPU加速页面渲染
user_pref("gfx.webrender.precache-shaders", true); // 预缓存渲染着色器，减少页面卡顿
user_pref("layers.gpu-process.enabled", true); // 启用独立的GPU进程，提升稳定性与性能
user_pref("layers.gpu-process.force-enabled", true); // 强制启用GPU进程
user_pref("layers.mlgpu.enabled", true); // 启用高级硬件加速功能
user_pref("media.hardware-video-decoding.force-enabled", true); // 强制开启硬件视频解码，降低CPU占用
user_pref("gfx.canvas.accelerated.cache-items", 32768); // Canvas加速缓存项目数量，提升Canvas渲染性能
user_pref("gfx.canvas.accelerated.cache-size", 4096); // Canvas加速缓存大小（KB），优化Canvas操作
user_pref("webgl.max-size", 16384); // WebGL最大纹理尺寸（像素），提升WebGL性能

/** DISK CACHE (磁盘缓存) ***/
user_pref("browser.cache.disk.enable", true); // 禁用磁盘缓存，减少磁盘I/O，提升响应速度

/** MEMORY CACHE (内存缓存) ***/
user_pref("browser.cache.memory.capacity", 131072); // 内存缓存容量（KB），增加缓存提升加载速度
user_pref("browser.cache.memory.max_entry_size", 20480); // 单个缓存项最大大小（KB），防止大文件占用过多内存
user_pref("browser.tabs.unloadOnLowMemory", true); // 内存不足时自动卸载非活动标签页，防止系统卡顿
user_pref("browser.low_commit_space_threshold_mb", 256); // 触发标签页卸载的内存阈值（MB）
user_pref("accessibility.force_disabled", 1); // 强制禁用辅助功能服务，显著降低内存占用和CPU消耗
user_pref("browser.sessionhistory.max_total_viewers", 4); // 历史记录最大查看器数量，控制内存使用
user_pref("browser.sessionstore.max_tabs_undo", 10); // 标签页撤销最大数量，减少内存占用

/** MEDIA CACHE (媒体缓存) ***/
user_pref("media.memory_cache_max_size", 262144); // 媒体内存缓存最大大小（KB），提升媒体播放流畅度
user_pref("media.memory_caches_combined_limit_kb", 1048576); // 媒体缓存总限制（KB），优化媒体资源管理
user_pref("media.cache_readahead_limit", 600); // 媒体缓存预读取限制（秒），平衡性能与内存
user_pref("media.cache_resume_threshold", 300); // 媒体缓存恢复阈值（秒），优化视频播放体验

/** IMAGE CACHE (图像缓存) ***/
user_pref("image.cache.size", 10485760); // 图像缓存大小（字节），提升图片加载速度
user_pref("image.mem.decode_bytes_at_a_time", 65536); // 图像解码字节数，优化图像渲染性能

/** NETWORK (网络) ***/
user_pref("network.http.max-connections", 1800); // HTTP最大连接数，提升并发下载能力
user_pref("network.http.http3.enable", true); // 启用HTTP/3 (QUIC)，提升连接速度和稳定性
user_pref("network.dns.disableIPv6", false); // 默认值：false。如果您的网络不支持IPv6，设为true可加速DNS解析
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // 跨域时只发送主机名，减少数据泄露并稍微减小请求头体积
user_pref("network.http.max-persistent-connections-per-server", 10); // 每服务器最大持久连接数，优化服务器连接
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // 每主机最大紧急启动连接数，平衡资源使用
user_pref("network.http.request.max-start-delay", 5); // 请求最大启动延迟（秒），优化请求调度
user_pref("network.http.pacing.requests.enabled", false); // 禁用请求速率限制，提升加载速度
user_pref("network.dnsCacheEntries", 10000); // DNS缓存条目数，减少DNS查询
user_pref("network.dnsCacheExpiration", 3600); // DNS缓存过期时间（秒），优化DNS解析
user_pref("network.ssl_tokens_cache_capacity", 10240); // SSL令牌缓存容量，提升HTTPS连接建立速度
user_pref("network.prefetch-next", false); // 默认值：true。启用预取功能（Betterfox原为false）

/** SCROLLING (滚动优化) - Adapted from Zen Browser ***/
user_pref("general.smoothScroll.msdPhysics.enabled", true); // 启用MSD物理模型，提供更自然的滚动体验
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12); // 连续运动的最大时间差
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600); // 运动开始时的弹簧常数
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650); // 常规弹簧常数
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25); // 减速的最小时间差
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250); // 减速弹簧常数
user_pref("mousewheel.min_line_scroll_amount", 10); // 鼠标滚轮最小滚动行数

/****************************************************************************
 * SECTION: SECUREFOX (安全隐私)                                             *
 ****************************************************************************/
/** PRIVACY (隐私) ***/
user_pref("privacy.history.custom", true); // 启用自定义历史记录清理
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // 私人浏览强制使用媒体内存缓存
user_pref("browser.privatebrowsing.resetPBM.enabled", true); // 启用私人浏览重置
user_pref("browser.sessionstore.interval", 60000); // 会话保存间隔（毫秒），减少磁盘写入
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate"); // 地理位置服务URL，使用隐私友好的服务

/** SECURITY (安全) ***/
user_pref("browser.xul.error_pages.expert_bad_cert", true); // 不显示专家证书错误页面
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true); // HTTPS错误页显示用户建议
user_pref("network.IDN_show_punycode", true); // 显示Punycode编码，防止钓鱼攻击
user_pref("pdfjs.enableScripting", false); // 禁用PDF脚本
user_pref("network.auth.subresource-http-auth-allow", 1); // 限制子资源HTTP认证
// user_pref("dom.security.https_only_mode", true); // 启用纯HTTPS模式

/** PASSWORDS (密码) ***/
user_pref("signon.formlessCapture.enabled", false); // 禁用无表单密码捕获
user_pref("signon.privateBrowsingCapture.enabled", false); // 禁用私人浏览密码捕获
user_pref("browser.formfill.enable", false); // 禁用表单自动填充
user_pref("editor.truncate_user_pastes", false); // 不截断用户粘贴内容

/** EXTENSIONS (扩展程序) ***/
user_pref("extensions.enabledScopes", 15); // 启用所有位置的扩展
user_pref("extensions.autoDisableScopes", 0); // 启动时不自动禁用外部安装的扩展
user_pref("extensions.quarantinedDomains.enabled", false); // 禁用扩展隔离域名功能
user_pref("extensions.webextensions.restrictedDomains", ""); // 允许扩展在 Mozilla 限制的域名上运行
user_pref("extensions.getAddons.cache.enabled", true); // 禁用扩展缓存

/** PERMISSIONS (权限) ***/
user_pref("permissions.default.desktop-notification", 2); // 默认拒绝桌面通知
user_pref("permissions.default.geo", 2); // 默认拒绝地理位置请求
user_pref("permissions.manager.defaultsUrl", ""); // 清空权限管理默认URL

/** TELEMETRY & DATA (遥测与数据) ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false); // 禁用数据提交
user_pref("datareporting.healthreport.uploadEnabled", false); // 禁用健康报告上传
user_pref("toolkit.telemetry.unified", false); // 禁用统一遥测
user_pref("toolkit.telemetry.enabled", false); // 禁用遥测功能
user_pref("toolkit.telemetry.server", "data:,"); // 设置遥测服务器为空
user_pref("toolkit.telemetry.archive.enabled", false); // 禁用遥测归档
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // 禁用新配置文件Ping
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // 禁用关闭Ping发送
user_pref("toolkit.telemetry.updatePing.enabled", false); // 禁用更新Ping
user_pref("toolkit.telemetry.bhrPing.enabled", false); // 禁用后台挂起Ping
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // 禁用首次关闭Ping
user_pref("toolkit.telemetry.coverage.opt-out", true); // 退出覆盖率遥测
user_pref("toolkit.coverage.opt-out", true); // 退出覆盖率收集
user_pref("toolkit.coverage.endpoint.base", ""); // 清空覆盖率端点
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // 禁用新标签页遥测
user_pref("browser.newtabpage.activity-stream.telemetry", false); // 禁用活动流遥测
user_pref("datareporting.usage.uploadEnabled", false); // 禁用使用情况上传
user_pref("app.shield.optoutstudies.enabled", false); // 禁用退出研究
user_pref("app.normandy.enabled", false); // 禁用Normandy实验系统
user_pref("app.normandy.api_url", ""); // 清空Normandy API URL
user_pref("breakpad.reportURL", ""); // 清空崩溃报告URL
user_pref("browser.tabs.crashReporting.sendReport", false); // 禁用标签页崩溃报告
user_pref("browser.search.update", true); // 禁用搜索引擎更新

/****************************************************************************
 * SECTION: PESKYFOX (界面与体验)                                             *
 ****************************************************************************/
/** MOZILLA UI (界面干扰) ***/
user_pref("browser.discovery.enabled", false); // 禁用发现功能
user_pref("browser.shell.checkDefaultBrowser", false); // 禁用默认浏览器检查
user_pref("browser.aboutConfig.showWarning", false); // 隐藏about:config警告
user_pref("browser.aboutwelcome.enabled", false); // 禁用欢迎页面
user_pref("browser.preferences.moreFromMozilla", false); // 隐藏"更多来自Mozilla"
user_pref("extensions.getAddons.showPane", false); // 隐藏扩展获取面板
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // 禁用扩展推荐
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // 禁用扩展推荐通知
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // 禁用功能推荐通知
user_pref("browser.startup.homepage_override.mstone", "ignore"); // 忽略版本更新后的首页覆盖

/** ADDRESS BAR (地址栏) ***/
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true); // 用户交互时显示完整URL
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // 启用私人搜索独立UI
user_pref("browser.urlbar.quicksuggest.enabled", false); // 禁用地址栏快速建议
user_pref("browser.urlbar.groupLabels.enabled", false); // 禁用地址栏分组标签
user_pref("browser.urlbar.trending.featureGate", false); // 禁用地址栏趋势搜索
// user_pref("browser.urlbar.trimHttps", true); // 地址栏显示时隐藏https://
// user_pref("browser.search.suggest.enabled", false); // 禁用搜索建议

/** NEW TAB PAGE (新标签页) ***/
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // 清空新标签页默认站点
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // 禁用新标签页赞助站点
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // 禁用新标签页热门故事
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // 禁用新标签页赞助内容
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // 禁用赞助内容复选框

/** THEME & APPEARANCE (主题与外观) ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // 启用传统用户配置文件样式表
user_pref("browser.compactmode.show", true); // 显示紧凑模式选项
user_pref("browser.privateWindowSeparation.enabled", false); // 禁用私人窗口分离
user_pref("full-screen-api.warning.timeout", 0); // 全屏警告超时为0
user_pref("full-screen-api.transition-duration.enter", "150 150"); // 进入全屏时的动画时长
user_pref("full-screen-api.transition-duration.leave", "150 150"); // 退出全屏时的动画时长

/** AI FEATURES (人工智能) ***/
user_pref("browser.ml.enable", false); // 禁用机器学习功能
user_pref("browser.ml.chat.enabled", false); // 禁用AI聊天功能
user_pref("browser.ml.chat.menu", false); // 禁用AI聊天菜单
user_pref("browser.ml.linkPreview.enabled", false); // 禁用AI链接预览
user_pref("browser.tabs.groups.smart.enabled", false); // 禁用智能标签分组

/** TABS & WINDOWS (标签页与窗口) ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false); // 书签在新标签页打开后保持菜单打开
user_pref("browser.menu.showViewImageInfo", true); // 显示查看图像信息选项
user_pref("browser.profiles.enabled", true); // 启用多配置文件支持

/** DOWNLOADS (下载) ***/
user_pref("browser.download.manager.addToRecentDocs", false); // 下载文件添加到最近文档

/** FIND & EDITING (查找与编辑) ***/
user_pref("findbar.highlightAll", true); // 查找时高亮所有匹配项
user_pref("layout.word_select.eat_space_to_next_word", false); // 双击选择单词时不包含空格

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
