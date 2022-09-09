FROM cypress/browsers:node14.17.0-chrome88-ff89 as base
WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM base as runner

WORKDIR /app
COPY --from=base /app /app

CMD ["yarn", "test:docker"]
