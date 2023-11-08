FROM node:19.5.0-alpine

# set working directory
WORKDIR /frontend
COPY . ./
# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
ENV PATH="./node_modules/.bin:$PATH"
# install app dependencies
RUN npm install

# add app
COPY . .

# start app
RUN npm run build

