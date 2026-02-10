#!name=LightRoom
#!desc=Adobe LightRoomUnlocked
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/lightroom.png
#!homepage=https://yfamilys.com
#!author=I-am-R-E[MITM]hostname = %APPEND% photos.adobe.io
[ Script ] 
LightRoom=type=http-response,pattern=^https:\/\/photos\.adobe\.io\/v2\/accounts*,requires-body=1,script-path=https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/lightroom.js 
