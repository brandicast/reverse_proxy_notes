 sudo docker run --name my-reverse-proxy -d -p:5555:5555 -v "$(pwd)/nginx_config:/etc/nginx/conf.d:ro" nginx
