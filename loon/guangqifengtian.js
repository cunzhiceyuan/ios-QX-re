#!name=广汽丰田丰云行
#!desc=去开屏广告
#!icon=https://github.com/cunzhiceyuan/ios-QX-re/blob/main/loon/icon/%E4%B8%B0%E4%BA%91%E8%A1%8C-iOS-512x512.png?raw=true

[Rewrite]
# 去开屏广告
^https:\/\/carapp\.gtmc\.com\.cn\/api\/appgtmc\/homePage\/HomePageAction\/queryHomePageImg\.json - reject-dict

[MITM]
hostname = carapp.gtmc.com.cn
