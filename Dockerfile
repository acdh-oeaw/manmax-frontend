# syntax=docker/dockerfile:1-labs
# labs version is needed for `COPY --exclude`.
# @see https://docs.docker.com/reference/dockerfile/#copy---exclude

# using alpine base image to avoid `sharp` memory leaks.
# @see https://sharp.pixelplumbing.com/install#linux-memory-allocator



# serve
FROM node:24-alpine AS serve

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

RUN npm install

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]
