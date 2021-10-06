FROM node:16.10.0-alpine3.14 as builder

ARG BUILD_VERSION
ARG BUILD_VCS_NUMBER

WORKDIR /app

ENV NODE_OPTIONS "--max-old-space-size=4096"

COPY package.json package-lock.json ./
ENV APP_ENV=production
RUN npm install

COPY . .

ENV NODE_ENV=production

RUN sed "s/\${BUILD_VERSION}/${BUILD_VERSION}/g" config.json.dist > config.json && cat config.json && npm run build
RUN sed -i "s/main.js/$(echo $(basename $(find /app/dist -name 'main*.js')))/g" /app/dist/index.html

FROM nginx:1.21.1-alpine

COPY config/docker/start-configured.sh /usr/local/bin
COPY config.json.dist /usr/share/frontend-config.json.dist
COPY config/nginx/vhost.conf /etc/nginx/conf.d/default.conf
COPY config/nginx/compression.conf /etc/nginx/compression.conf
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["sh", "/usr/local/bin/start-configured.sh"]
