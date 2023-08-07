FROM node:lts

WORKDIR /usr/src/app

COPY ./dist/package.json ./

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm install production --silent

COPY ./dist .

USER node

CMD [ "node", "main.js" ]
