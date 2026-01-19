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
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 32); // Skia字体缓存大小（MB），提升字体渲染性能

/** GFX ***/
user_pref("gfx.webrender.layer-compositor", true); // 启用WebRender图层合成器，提升GPU渲染性能
user_pref("gfx.canvas.accelerated.cache-items", 32768); // Canvas加速缓存项目数量，提升Canvas渲染性能
user_pref("gfx.canvas.accelerated.cache-size", 4096); // Canvas加速缓存大小（KB），优化Canvas操作
user_pref("webgl.max-size", 16384); // WebGL最大纹理尺寸（像素），提升WebGL性能

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false); // 禁用磁盘缓存，减少磁盘I/O，提升响应速度

/** MEMORY CACHE ***/
user_pref("browser.cache.memory.capacity", 131072); // 内存缓存容量（KB），增加缓存提升加载速度
user_pref("browser.cache.memory.max_entry_size", 20480); // 单个缓存项最大大小（KB），防止大文件占用过多内存
user_pref("browser.sessionhistory.max_total_viewers", 4); // 历史记录最大查看器数量，控制内存使用
user_pref("browser.sessionstore.max_tabs_undo", 10); // 标签页撤销最大数量，减少内存占用

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 262144); // 媒体内存缓存最大大小（KB），提升媒体播放流畅度
user_pref("media.memory_caches_combined_limit_kb", 1048576); // 媒体缓存总限制（KB），优化媒体资源管理
user_pref("media.cache_readahead_limit", 600); // 媒体缓存预读取限制（秒），平衡性能与内存
user_pref("media.cache_resume_threshold", 300); // 媒体缓存恢复阈值（秒），优化视频播放体验

/** IMAGE CACHE ***/
user_pref("image.cache.size", 10485760); // 图像缓存大小（字节），提升图片加载速度
user_pref("image.mem.decode_bytes_at_a_time", 65536); // 图像解码字节数，优化图像渲染性能

/** NETWORK ***/
user_pref("network.http.max-connections", 1800); // HTTP最大连接数，提升并发下载能力
user_pref("network.http.max-persistent-connections-per-server", 10); // 每服务器最大持久连接数，优化服务器连接
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // 每主机最大紧急启动连接数，平衡资源使用
user_pref("network.http.request.max-start-delay", 5); // 请求最大启动延迟（秒），优化请求调度
user_pref("network.http.pacing.requests.enabled", false); // 禁用请求速率限制，提升加载速度
user_pref("network.dnsCacheEntries", 10000); // DNS缓存条目数，减少DNS查询
user_pref("network.dnsCacheExpiration", 3600); // DNS缓存过期时间（秒），优化DNS解析
user_pref("network.ssl_tokens_cache_capacity", 10240); // SSL令牌缓存容量，提升HTTPS连接建立速度

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0); // 禁用推测性并行加载，减少不必要的网络请求
user_pref("network.dns.disablePrefetch", true); // 禁用DNS预取，减少DNS查询和隐私泄露
user_pref("network.dns.disablePrefetchFromHTTPS", true); // 禁用HTTPS页面DNS预取，增强隐私保护
user_pref("browser.urlbar.speculativeConnect.enabled", false); // 禁用地址栏推测连接，减少不必要的连接
user_pref("browser.places.speculativeConnect.enabled", false); // 禁用书签推测连接，保护隐私
user_pref("network.prefetch-next", false); // 禁用预取功能，减少带宽使用和隐私泄露

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
// user_pref("browser.contentblocking.category", "strict"); // 内容拦截类别设置为严格模式，增强跟踪保护
// user_pref("browser.download.start_downloads_in_tmp_dir", true); // 下载文件到临时目录，保护隐私
user_pref("browser.uitour.enabled", false); // 禁用UI导览功能，减少隐私泄露
user_pref("privacy.globalprivacycontrol.enabled", true); // 启用全局隐私控制，请求网站不跟踪

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0); // 禁用OCSP在线证书状态协议，提升隐私和性能
// user_pref("privacy.antitracking.isolateContentScriptResources", true); // 隔离内容脚本资源，防止跨站跟踪
user_pref("security.csp.reporting.enabled", false); // 禁用CSP报告，减少信息泄露

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // 将不安全的SSL协商视为损坏，提升安全性
user_pref("browser.xul.error_pages.expert_bad_cert", true); // 显示专家证书错误页面，便于调试
user_pref("security.tls.enable_0rtt_data", false); // 禁用TLS 0-RTT数据，提升安全性

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // 私人浏览强制使用媒体内存缓存，保护隐私
user_pref("browser.sessionstore.interval", 60000); // 会话保存间隔（毫秒），减少磁盘写入

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true); // 启用自定义历史记录清理，增强隐私控制
user_pref("browser.privatebrowsing.resetPBM.enabled", true); // 启用私人浏览重置，保护隐私

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true); // 地址栏显示时隐藏https://，简化URL显示
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true); // 用户交互时显示完整URL
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // 启用私人搜索独立UI，保护搜索隐私
user_pref("browser.search.suggest.enabled", false); // 禁用搜索建议，减少数据传输
user_pref("browser.urlbar.quicksuggest.enabled", false); // 禁用地址栏快速建议，保护隐私
user_pref("browser.urlbar.groupLabels.enabled", false); // 禁用地址栏分组标签，简化界面
user_pref("browser.formfill.enable", false); // 禁用表单自动填充，保护隐私
user_pref("network.IDN_show_punycode", true); // 显示Punycode编码，防止钓鱼攻击

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true); // 启用纯HTTPS模式，强制使用加密连接
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true); // HTTPS错误页显示用户建议

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false); // 禁用无表单密码捕获，保护密码安全
user_pref("signon.privateBrowsingCapture.enabled", false); // 禁用私人浏览密码捕获，增强隐私
user_pref("network.auth.subresource-http-auth-allow", 1); // 限制子资源HTTP认证，防止钓鱼
user_pref("editor.truncate_user_pastes", false); // 不截断用户粘贴内容，保留完整输入

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5); // 扩展启用范围，仅允许用户和应用程序目录

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // 跨域Referer修剪策略，保护隐私

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true); // 启用用户上下文UI，支持容器标签页

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false); // 禁用PDF脚本，防止PDF恶意代码执行

/** SAFE BROWSING ***/
// user_pref("browser.safebrowsing.downloads.remote.enabled", false); // 禁用远程下载安全浏览，保护隐私

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2); // 默认拒绝桌面通知，减少打扰
user_pref("permissions.default.geo", 2); // 默认拒绝地理位置请求，保护隐私
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate"); // 地理位置服务URL，使用隐私友好的服务
user_pref("browser.search.update", false); // 禁用搜索引擎更新，减少网络请求
user_pref("permissions.manager.defaultsUrl", ""); // 清空权限管理默认URL，防止远程配置
user_pref("extensions.getAddons.cache.enabled", false); // 禁用扩展缓存，减少数据传输

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false); // 禁用数据提交，保护隐私
user_pref("datareporting.healthreport.uploadEnabled", false); // 禁用健康报告上传，保护隐私
user_pref("toolkit.telemetry.unified", false); // 禁用统一遥测，保护隐私
user_pref("toolkit.telemetry.enabled", false); // 禁用遥测功能，保护隐私
user_pref("toolkit.telemetry.server", "data:,"); // 设置遥测服务器为空，阻止数据上传
user_pref("toolkit.telemetry.archive.enabled", false); // 禁用遥测归档，保护隐私
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // 禁用新配置文件Ping，保护隐私
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // 禁用关闭Ping发送，保护隐私
user_pref("toolkit.telemetry.updatePing.enabled", false); // 禁用更新Ping，保护隐私
user_pref("toolkit.telemetry.bhrPing.enabled", false); // 禁用后台挂起Ping，保护隐私
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // 禁用首次关闭Ping，保护隐私
user_pref("toolkit.telemetry.coverage.opt-out", true); // 退出覆盖率遥测，保护隐私
user_pref("toolkit.coverage.opt-out", true); // 退出覆盖率收集，保护隐私
user_pref("toolkit.coverage.endpoint.base", ""); // 清空覆盖率端点，阻止数据上传
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // 禁用新标签页遥测，保护隐私
user_pref("browser.newtabpage.activity-stream.telemetry", false); // 禁用活动流遥测，保护隐私
user_pref("datareporting.usage.uploadEnabled", false); // 禁用使用情况上传，保护隐私

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false); // 禁用退出研究，保护隐私
user_pref("app.normandy.enabled", false); // 禁用Normandy实验系统，保护隐私
user_pref("app.normandy.api_url", ""); // 清空Normandy API URL，阻止远程配置

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", ""); // 清空崩溃报告URL，阻止崩溃报告上传
user_pref("browser.tabs.crashReporting.sendReport", false); // 禁用标签页崩溃报告，保护隐私

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false); // 隐藏扩展获取面板，简化界面
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // 禁用扩展推荐，减少干扰
user_pref("browser.discovery.enabled", false); // 禁用发现功能，减少网络请求和干扰
user_pref("browser.shell.checkDefaultBrowser", false); // 禁用默认浏览器检查，减少启动提示
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // 禁用扩展推荐通知，减少干扰
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // 禁用功能推荐通知，减少干扰
user_pref("browser.preferences.moreFromMozilla", false); // 隐藏"更多来自Mozilla"部分，简化设置界面
user_pref("browser.aboutConfig.showWarning", false); // 隐藏about:config警告页面，便于高级用户
user_pref("browser.startup.homepage_override.mstone", "ignore"); // 忽略版本更新后的首页覆盖，保持用户设置
user_pref("browser.aboutwelcome.enabled", false); // 禁用欢迎页面，加快启动速度
user_pref("browser.profiles.enabled", true); // 启用多配置文件支持，便于用户管理

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // 启用传统用户配置文件样式表，支持自定义主题
user_pref("browser.compactmode.show", true); // 显示紧凑模式选项，节省屏幕空间
user_pref("browser.privateWindowSeparation.enabled", false); // 禁用私人窗口分离，统一窗口体验

/** AI ***/
user_pref("browser.ml.enable", false); // 禁用机器学习功能，减少资源占用
user_pref("browser.ml.chat.enabled", false); // 禁用AI聊天功能，保护隐私
user_pref("browser.ml.chat.menu", false); // 禁用AI聊天菜单，简化界面
user_pref("browser.tabs.groups.smart.enabled", false); // 禁用智能标签分组，减少AI功能
user_pref("browser.ml.linkPreview.enabled", false); // 禁用AI链接预览，保护隐私

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.warning.timeout", 0); // 全屏警告超时为0，不显示警告

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false); // 禁用地址栏趋势搜索，减少干扰

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // 清空新标签页默认站点，显示空白页
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // 禁用新标签页赞助站点，减少广告
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // 禁用新标签页热门故事，减少干扰
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // 禁用新标签页赞助内容，减少广告
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // 禁用赞助内容复选框，简化界面

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false); // 下载文件不添加到最近文档，保护隐私

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true); // 内联打开PDF附件，提升用户体验

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false); // 书签在新标签页打开后保持菜单打开，便于连续操作
user_pref("browser.menu.showViewImageInfo", true); // 显示查看图像信息选项，便于查看图片详情
user_pref("findbar.highlightAll", true); // 查找时高亮所有匹配项，提升查找体验
user_pref("layout.word_select.eat_space_to_next_word", false); // 双击选择单词时不包含空格，精确选择

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// 访问 https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// 访问 https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// 在此行下方输入您的个人覆盖设置：

/* 优化浏览器动效，从Zen Browser中复制而来 */
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12); // 连续运动的最大时间差（毫秒），控制平滑滚动的响应速度
user_pref("general.smoothScroll.msdPhysics.enabled", true); // 启用MSD物理模型，提供更自然的滚动体验
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600); // 运动开始时的弹簧常数，影响滚动启动的力度
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650); // 常规弹簧常数，影响滚动过程中的弹性
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25); // 减速的最小时间差（毫秒），控制滚动减速的时机
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250); // 减速弹簧常数，影响滚动减速的平滑度
user_pref("mousewheel.min_line_scroll_amount", 10); // 鼠标滚轮最小滚动行数，控制滚动的灵敏度
user_pref("full-screen-api.transition-duration.enter", 200, 200); // 进入全屏时的动画时长
user_pref("full-screen-api.transition-duration.leave", 200, 200); // 退出全屏时的动画时长



/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// 访问 https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// 在此行下方输入您的滚动覆盖设置：



/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
