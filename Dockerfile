FROM node:8-alpine
WORKDIR /build
COPY . .
RUN npm install --silent
RUN ls -la
RUN npm run build

FROM node:8-alpine
WORKDIR /app
VOLUME /app/data
COPY --from=0 /build/dist ./dist
COPY --from=0 /build/package.json /build/package-lock.json ./
ENV NODE_ENV production
RUN npm install --silent
EXPOSE 3000
CMD npm start
