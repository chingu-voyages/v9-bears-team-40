FROM node:10.15.1

WORKDIR /usr

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]