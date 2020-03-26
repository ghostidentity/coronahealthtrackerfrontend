# Stage 1
FROM node:12.2.0-alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install --production
COPY ./ /app/
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]