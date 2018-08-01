# Installs the current application on a Node Image.
FROM node:10.7.0
# The qq is for silent output in the console
# You are welcome to modify this part as it
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim
# Sets the path where the app is going to be installed
ENV NODE_ROOT /usr/app/
# Creates the directory and all the parents (if they don’t exist)
RUN mkdir -p $NODE_ROOT
# Sets the /usr/app as the active directory
WORKDIR $NODE_ROOT
# Install all the packages

RUN yarn global add typescript @angular/cli commitizen tslint stylelint

COPY package.json package.json
RUN yarn
COPY . .
# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 8100 49153 8080
#CMD npm start