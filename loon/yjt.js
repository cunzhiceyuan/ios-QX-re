#!name=易截图
#!desc=https://apps.apple.com/app/id6648791000
#!icon=https://github.com/cunzhiceyuan/ios-QX-re/blob/main/loon/icon/%E6%98%93%E6%88%AA%E5%9B%BE-iOS-512x512.png?raw=true
#!tag = 功能解锁
[Script]
http-response ^https?:\/\/1jietu\.com\/apiv2\/(user|ad) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/yjt.js, requires-body=true, timeout=60, tag=yjt

[MITM]
hostname = 1jietu.com
