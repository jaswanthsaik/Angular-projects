# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.17-alpine as build

# Set the working directory
WORKDIR /dist/src/app

COPY package*.json /dist/src/app/

COPY nginx.conf /dist/src/app/

ENV PATH /app/client/node_modules/.bin:$PATH

RUN npm cache clean --force

COPY . .

RUN npm install

RUN npm install -g @angular/cli@latest

RUN npm run build --prod

RUN ng build --configuration prod

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest AS ngi

COPY --from=build /dist/src/app/dist/angular-partner /usr/share/nginx/html/

COPY --from=build /dist/src/app/nginx.conf  /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80