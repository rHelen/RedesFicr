FROM node:14-alpine

WORKDIR /usr/src/app

COPY index.html .
COPY styles.css .
COPY script.js .

EXPOSE 80

CMD ["node", "--version"]
