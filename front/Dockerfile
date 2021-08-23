FROM node:14.17.1-stretch

WORKDIR /home/front

COPY package*.json ./

RUN npm install -g npm@7.19.0

RUN npm -v

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000