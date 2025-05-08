# qiankun demo
- 主应用：http://micro.main.16wa.com
- 子应用1： http://micro.order.16wa.com/home
- 子应用2： http://micro.user.16wa.com/home
# 启动
 ```bash
npm run serve
```
# 启动子服务
```bash
npm run start:order
npm run start:user
```
# 构建
```bash
npm run build
```
# 构建子服务
```bash
npm run build:order
npm run build:user
```
# nginx 配置
```
server {
    listen 80;
    server_name micro.main.16wa.com;

    location = /favicon.ico {
        root /home/ubuntu/micro/dist/main-app;
    }

    # 代理 /order-app/assets 到实际文件路径
    location /order-app/assets {
        alias /home/ubuntu/micro/dist/order-app/assets;
    }

    # 代理 /user-app/assets 到实际文件路径
    location /user-app/assets {
        alias /home/ubuntu/micro/dist/user-app/assets;
    }

    location / {
        root /home/ubuntu/micro/dist/main-app;
        try_files $uri $uri/ /index.html;

        # 动态设置 Access-Control-Allow-Origin 头部
        if ($http_origin = "http://micro.order.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }
        if ($http_origin = "http://micro.user.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }

        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Origin, X-Requested-With, Content-Type, Accept';
    }
}

server {
    listen 80;
    server_name micro.order.16wa.com;

    location = /favicon.ico {
        root /home/ubuntu/micro/dist/order-app;
    }

    # 代理 /order-app/assets 到实际文件路径
    location /order-app/assets {
        alias /home/ubuntu/micro/dist/order-app/assets;
    }

    location / {
        root /home/ubuntu/micro/dist/order-app;
        try_files $uri $uri/ /index.html;

        # 动态设置 Access-Control-Allow-Origin 头部
        if ($http_origin = "http://micro.main.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }
        if ($http_origin = "http://micro.user.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }

        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Origin, X-Requested-With, Content-Type, Accept';
    }
}

server {
    listen 80;
    server_name micro.user.16wa.com;

    location = /favicon.ico {
        root /home/ubuntu/micro/dist/user-app;
    }

    # 代理 /order-app/assets 到实际文件路径
    location /user-app/assets {
        alias /home/ubuntu/micro/dist/user-app/assets;
    }
    
    location / {
        root /home/ubuntu/micro/dist/user-app;
        try_files $uri $uri/ /index.html;

        # 动态设置 Access-Control-Allow-Origin 头部
        if ($http_origin = "http://micro.main.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }
        if ($http_origin = "http://micro.order.16wa.com") {
            add_header Access-Control-Allow-Origin $http_origin;
        }
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Origin, X-Requested-With, Content-Type, Accept';
    }
}
```
