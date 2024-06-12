
/*https://lepai-api\.faceqianyan\.com/account/profile



lepai-api.faceqianyan.com

*/







/*‼️规则完全免费，仅供学习交流，🈲️商业用途*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/account/profile';
if (url.indexOf(vip) != -1) {  
  
obj.data.account_info.pro=1;
obj.data.limit.load_subscribe_page=0;
};




body = JSON.stringify(obj);

$done({body});
