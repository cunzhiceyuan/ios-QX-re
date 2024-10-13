https://www.nsloon.com/openloon/import?plugin=https://raw.githubusercontent.com/cunzhiceyuan/ios-QX-re/refs/heads/main/loon/



https://icon.yukonga.top/
图标原本图片获取网站


图标链接获取:
https://app.diandian.com/

模板：





#!name = 万康人体解剖
#!desc = 解剖软件专为医疗从业者、医学生、医学教育者和人体解剖爱好者打造，基于人卫人体解剖学教材设计了系统解剖，局部解剖，医学视频几个板块。（Requires iOS 13.0 or later.）
#!author = 仅供学习交流, 严禁商业用途
#!homePage = https://t.me/chxm1023/2267
#!openUrl = https://apps.apple.com/app/id6480260145
#!data = 2024-10-13
#!icon =https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6e/26/e4/6e26e443-c088-4e03-f010-0815b8decfa1/AppIcon-0-0-1x_U007ephone-0-0-85-220.png/1024x1024.png
#!system = 
#!system_version = 
#!loon_version = 
#!tag = 功能解锁


[Argument]
appName = input,"万康人体解剖",tag=app的名字
appCategory = select,"Tool","Video&Photo","Game",tag=app的分类
ScriptEnable = switch,true,tag=是否启用执行的的脚本

[Script]
http-response ^https:\/\/wankang\.xlhcq\.com\/v1\/user_info script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/wk.js, requires-body=true, timeout=60, tag=wk,enable = {ScriptEnable}

[MITM]
hostname = wankang.xlhcq.com

























----------------------------------------------------------------------------------------------------------------------------------------------
token and cron

功能解锁

其他
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#!name = 插件仓库
#!desc =
#!icon = 
#!openUrl = 
#!tag = 
#!date = 2024-9-29



https://mirror.ghproxy.com/https://raw.githubusercontent.com/NSRingo/Siri/refs/heads/main/modules/Siri.plugin

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


https://www.nsloon.com/openloon/import?plugin=https://mirror.ghproxy.com/https://raw.githubusercontent.com/cunzhiceyuan/ios-QX-re/refs/heads/main/loon/mrjz.plguin

https://www.nsloon.com/openloon/import?plugin=https://raw.githubusercontent.com/cunzhiceyuan/ios-QX-re/refs/heads/main/loon/wkrtjp.plugin


这个是第一个格式模板：
----------------------------------------------------------------------------------------------------------------
#!name = 带参数的插件Demo
#!desc = 这是一个可设定参数的插件
#!author = 
#!homePage = 
#!data = 2024-08-09
#!icon = https://raw.githubusercontent.com/Loon0x00/Loon0x00.github.io/main/static/img/loon.png
#!system = 
#!system_version = 
#!loon_version = 
#!tag = 官方,Demo
#!openUrl = 

---------------------------------------------------------------------------------------------------------------------------------------------------

[Argument]
appName = input,"Loon",tag=app的名字
appCategory = select,"Tool","Video&Photo","Game",tag=app的分类
cron = input,"5 17 * * *",tag=定时任务时间,desc=定时任务的cron表达式
ScriptEnable = switch,true,tag=是否启用获取cookie的脚本
-------------------------------------------------------------------------------------------------------------------------------------------------
,enable = {ScriptEnable}


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

cookieScriptEnable = switch,true,tag=是否启用获取cookie的脚本
cronScriptEnable = switch,true,tag=是否启用执行的的脚本

[Script]
http-request ^https://nsloon\.app script-path = https://raw.githubusercontent.com/Loon0x00/LoonExampleConfig/master/Script/plugin_arg.js,argument=[{appName},{appCategory},{isSupportChinese}],tag=plugin_arg_demo_request,enable = {cookieScriptEnable}

cron {cron} script-path=https://raw.githubusercontent.com/Loon0x00/LoonExampleConfig/master/Script/cron.js,tag = cronExample,argument=[{appName}],enable = {cronScriptEnable}

[MITM]
hostname = nsloon.app

------------------------------------------------------------------------------------------------





#!name = 酷狗概念版自动领取 VIP--Eric
#!desc = 每日凌晨 0 点 10 分自动领取 VIP，第一使用打开酷狗概念版天天签到领 VIP 页面获取参数，提示获取成功即可，去除启动广告
#!author = 未知
#!openurl = https://apps.apple.com/cn/app/id1480205582
#!data = 2024-09-29
#!icon = https://img.kxdw.com/2024/0515/20240515111129257.png
#!system = 
#!system_version =
#!loon_version = 
#!tag = token and cron

[Argument]
appName = input,"酷狗概念版自动领取 VIP--Eric",tag=app 的名字,desc=填写 app 的用户名，用于提交 app 的相关信息
appCategory = select,"Tool",tag=app 的分类
isSupportChinese = switch,true,tag=是否支持中文,desc=选择 app 是否支持中文
cron = input,"10 0 * * *",tag=定时任务时间,desc=定时任务的 cron 表达式
cookieScriptEnable = switch,true,tag=是否启用获取 cookie 的脚本

[Script]
cron {cron} script-path=https://gist.githubusercontent.com/Alex0510/1c389019c264a7d3ddbe4dbcf77d4295/raw/kugou_auto.js, tag=酷狗领取 VIP,argument=[{appName}],enable =true

http-request https://(gateway|gatewayretry|gateway3).kugou.com/youth/v1/(recharge/receive_vip_listen_song|activity/get_month_vip_record).* script-path=https://gist.githubusercontent.com/Alex0510/1c389019c264a7d3ddbe4dbcf77d4295/raw/kugou.js, argument=[{appName},{appCategory},{isSupportChinese}],enable = {cookieScriptEnable},tag=酷狗数据

[Rule] 
URL-REGEX,https://gateway.kugou.com/ads.gateway/.*,REJECT
URL-REGEX,https://gateway3.kugou.com/ads.gateway/.*,REJECT
URL-REGEX,https://gatewayretry.kugou.com/ads.gateway/.*,REJECT
URL-REGEX,https://gateway.kugou.com/youth/api/user/v1/init.*,REJECT
URL-REGEX,^http:\/\/mobilelog\.kugou\.com\/adtrackconfig\.json$,REJECT
URL-REGEX,https://tmeadcomm.y.qq.com/maproxy/getPbCompressAd,REJECT
DOMAIN-SUFFIX,adservice.kugou.com,REJECT
DOMAIN-SUFFIX,install2.kugou.com,REJECT
DOMAIN-SUFFIX,adstats.tencentmusic.com,REJECT
DOMAIN-SUFFIX,tmead.y.qq.com,REJECT
DOMAIN-SUFFIX,ad.tencentmusic.com,REJECT
DOMAIN-SUFFIX,api-adservices.apple.com,REJECT
DOMAIN-SUFFIX,us.l.qq.com,REJECT
DOMAIN-SUFFIX,p.l.qq.com,REJECT
DOMAIN-SUFFIX,mc.tencentmusic.com,REJECT
DOMAIN-SUFFIX,mdt.qq.com,REJECT
DOMAIN-SUFFIX,gdt.qq.com,REJECT
DOMAIN-SUFFIX,e.qq.com,REJECT

[MITM]
hostname = *.kugou.com
