FROM node:10.16-alpine as app_base

RUN apk update \
  && apk add --update alpine-sdk \
  && apk add git \
  && apk del alpine-sdk 

FROM app_base  as prod_image
WORKDIR /app
COPY . /app

RUN rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && npm install -g typescript@3.5.2 \
  && npm install

EXPOSE 5000
ENTRYPOINT ["sh", "./deployment/run.sh"]
