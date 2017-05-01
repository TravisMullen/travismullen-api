FROM node:7.4-alpine
MAINTAINER travis@boombangmedia.com

RUN rm -rf /server/tmp/node_modules
ADD package.json /server/tmp/package.json
RUN cd /server/tmp && npm install
RUN mkdir -p /server/opt/app && cp -a /server/tmp/node_modules /server/opt/app/

WORKDIR /server/opt/app
ADD . /server/opt/app

EXPOSE 3000

CMD ["npm", "start"]