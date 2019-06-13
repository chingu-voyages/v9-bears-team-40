FROM node:10.15.1

WORKDIR /usr/src/V9-BEARS-TEAM-40

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]