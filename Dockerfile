FROM node
COPY package.json /
COPY configure.js /
RUN npm install
RUN echo "run ./configure.js"
RUN echo "and check out the .env file that gets created"
CMD bash
