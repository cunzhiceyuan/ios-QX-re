#!name=三得利
#!desc=三得利
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1026.png
#!keyword=羊毛

[Script]
http-response ^https:\/\/xiaodian\.miyatech\.com\/api\/user\/member\/info script-path=https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/SDL/SDL.js, requires-body=true, tag=三得利_获取token

cron "19 8,19 * * *" script-path=https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/SDL/SDL.js, timeout=3600, tag=三得利

[MITM]
hostname = xiaodian.miyatech.com
