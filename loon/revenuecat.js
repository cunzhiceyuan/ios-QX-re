#!name=Revenuecat
#!desc=Revenuecat
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1063.png
#!tag = other

[Rewrite]
https://api.lianjiu.fun/app/api/v1/profile - reject

[Script]
#修改
http-response ^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js, requires-body=true, timeout=60, tag=Revenuecat

#清理
http-request ^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js, timeout=60, tag=Revenuecat

[MITM]
hostname = api.revenuecat.com, api.lianjiu.fun
