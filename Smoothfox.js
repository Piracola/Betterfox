
/****************************************************************************************
 * Smoothfox                                                                            *
 * "Faber est suae quisque fortunae"                                                    *
 * 优先级：更好的滚动体验                                                                 *
 * 版本：137                                                                           *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

// 每次只能使用一个选项！
// 如果决定使用不同的选项，请重置首选项。

/****************************************************************************************
 * 选项：锐化滚动                                                                       *
****************************************************************************************/
// 来源：https://github.com/black7375/Firefox-UI-Fix
// 仅锐化滚动效果
user_pref("apz.overscroll.enabled", true); // 启用过度滚动效果，默认在非Linux系统开启
user_pref("general.smoothScroll", true); // 启用平滑滚动，默认开启
user_pref("mousewheel.min_line_scroll_amount", 10); // 每次滚动的最小行数，可根据喜好调整，默认值为5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // 鼠标滚轮滚动的最小持续时间（毫秒），默认为50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // 当前速度的权重，影响滚动的响应速度，默认为0.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // 停止减速的权重，影响滚动停止时的平滑度，默认为0.4
// 仅限 Firefox Nightly 版本：
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly] 禁用MSD物理引擎

/****************************************************************************************
 * 选项：即时滚动（简单调整）                                                           *
****************************************************************************************/
// 推荐用于 60Hz+ 显示器
user_pref("apz.overscroll.enabled", true); // 启用过度滚动效果，默认在非Linux系统开启
user_pref("general.smoothScroll", true); // 启用平滑滚动，默认开启
user_pref("mousewheel.default.delta_multiplier_y", 275); // 滚轮垂直滚动倍率，建议范围250-400，可根据喜好调整
// 仅限 Firefox Nightly 版本：
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly] 禁用MSD物理引擎

/****************************************************************************************
 * 选项：平滑滚动                                                                       *
****************************************************************************************/
// 推荐用于 90Hz+ 显示器
user_pref("apz.overscroll.enabled", true); // 启用过度滚动效果，默认在非Linux系统开启
user_pref("general.smoothScroll", true); // 启用平滑滚动，默认开启
user_pref("general.smoothScroll.msdPhysics.enabled", true); // 启用MSD物理引擎以获得更平滑的滚动效果
user_pref("mousewheel.default.delta_multiplier_y", 300); // 滚轮垂直滚动倍率，建议范围250-400，可根据喜好调整

/****************************************************************************************
 * 选项：自然平滑滚动 V3 [修改版]                                                      *
****************************************************************************************/
// 来源：https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// 推荐用于 120Hz+ 显示器
// 大致匹配 Chrome 标志：Windows 滚动特性和平滑滚动
user_pref("apz.overscroll.enabled", true); // 启用过度滚动效果，默认在非Linux系统开启
user_pref("general.smoothScroll", true); // 启用平滑滚动，默认开启
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12); // 连续运动的最大时间间隔（毫秒），影响滚动的连贯性
user_pref("general.smoothScroll.msdPhysics.enabled", true); // 启用MSD物理引擎以获得更自然的滚动效果
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600); // 运动开始时的弹簧常数，控制滚动的初始加速度
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650); // 常规弹簧常数，控制滚动的整体弹性
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25); // 开始减速的最小时间间隔（毫秒），影响减速的触发时机
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2"); // 开始减速的最小时间比例，影响减速的强度
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250); // 减速时的弹簧常数，控制减速的平滑度
user_pref("general.smoothScroll.currentVelocityWeighting", "1"); // 当前速度的权重，值越大滚动越跟手，默认为1
user_pref("general.smoothScroll.stopDecelerationWeighting", "1"); // 停止减速的权重，值越大停止越平滑，默认为1
user_pref("mousewheel.default.delta_multiplier_y", 300); // 滚轮垂直滚动倍率，建议范围250-400，可根据喜好调整
