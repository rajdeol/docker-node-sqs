# get the official nodejs container image from docker hub
FROM node:8
# set app work directory
WORKDIR /usr/src/app

#copy all files
COPY . .

CMD [ "npm", "start" ]
