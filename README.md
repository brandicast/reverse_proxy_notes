# Reverse Proxy with nginx

## My usages

Without enough budget to have my own SSL, currently using ngrok for personal use.

ngrok allows to have 1 local port mapping.  It was fine as I only has one Linebot service needs public https url.  

However, Naver Line announced they stopped the free Line Notify service, which is useful for me to send IOT events.   

Found the alternative ntfy service which requires a public https url as well.

Therefore, by setting up a reverse proxy, to allow 1 ngrok external https url forwards to different hosting services.

## Problems encountered 

### <u> Docker run vs Docker-Compose

Shall use different configuration files.

### <u>Absolute URL path in client app</u>

Initial plan:

 - /ntfy forwards to my interal service which hosting ntfy
 - / forwards to my original LineBot service.

But it turns out ntfy apps does not seem using relative path in their client apps.  Which cause the problems as the followings:

 https://external_ip:port/ntfy/subscribed_topic  ->  http://ip:port/subscribed_topic   ==> OK

 But then the apps seems to retrieve some data thru /

 https://external_ip:external:port/XXXX  

 which cause the reverse_proxy can not forward the requests properly.

### <u>Websocket in client app</u>

Need to configure nginx able to take websocket by adding the following headers in config: 

```
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```


