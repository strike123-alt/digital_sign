FROM node:14
WORKDIR /app
COPY . /app
RUN npm install --legay-peer-deps
EXPOSE 3000
CMD npm start