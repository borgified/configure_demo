FROM node
COPY package.json /
COPY configure.js /
RUN npm install
CMD ./configure.js && cat .env
