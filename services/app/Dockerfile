ARG APP_NAME=portfolio
ARG NODE_VERSION=22.18.0
ARG PNPM_VERSION=10.18.0
FROM node:${NODE_VERSION} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /workspaces/amarhazem
RUN install -d -o node -g node /workspaces/amarhazem && \
    corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate
COPY --chown=node:node . .
USER node
CMD ["sh", "-c", "pnpm install --filter=@aha/${APP_NAME}... && pnpm --filter=@aha/${APP_NAME} dev"]
