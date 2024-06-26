FROM node:20-alpine AS dev
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN apk --no-cache add git

WORKDIR /usr/src/app
COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

EXPOSE 3000

CMD [ "pnpm", "start:server" ]
