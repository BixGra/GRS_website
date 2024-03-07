FROM nginx:alpine
COPY ./src /usr/share/nginx/html
COPY ./src/img /usr/share/nginx/html/img