/*
彩云天气

====================================
[rewrite_local]
# 普通版广告
^https:\/\/ad\.cyapi\.cn\/v2\/req\?app_name=weather url reject-dict
# 赏叶赏花
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\?app_name=weather url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/caiyun.js
# 解锁vip
^https:\/\/biz\.cyapi\.cn\/v2\/user url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/caiyun.js
# 卫星云图 48小时预报
^https:\/\/wrapper\.cyapi\.cn\/v1\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/wf021325/qx/master/js/caiyun.js
# 7.20.0版本显示VIP
^https?:\/\/biz\.cyapi\.cn\/api\/v1\/user_detail$ url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/caiyun.js

[mitm]
hostname = *.cyapi.cn
====================================
