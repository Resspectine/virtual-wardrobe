FROM node:16.10.0-alpine3.14 as builder

WORKDIR /app

ENV NODE_OPTIONS "--max-old-space-size=4096"

COPY package.json package-lock.json ./
ENV APP_ENV=production
RUN npm install

COPY . .
COPY ./public/index.html ./dist/index.html

ENV NODE_ENV=production

RUN cat config.json.dist > config.json && npm run build

FROM nginx:1.21.1-alpine

COPY config/docker/start-configured.sh /usr/local/bin
COPY config.json.dist /usr/share/frontend-config.json.dist
COPY config/nginx/vhost.conf /etc/nginx/conf.d/default.conf
COPY config/nginx/compression.conf /etc/nginx/compression.conf
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["sh", "/usr/local/bin/start-configured.sh"]
