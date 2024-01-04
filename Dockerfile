# Use a smaller base image
FROM node:21-alpine3.19 AS builder

ENV YARN_VERSION 1.22.19

# Set up a non-root user
RUN addgroup -S app && adduser -S -G app app

# Install dependencies
RUN yarn --version > /dev/null 2>&1 \
    && echo "Yarn is already installed." \
    || (echo "Installing Yarn..." && npm uninstall -g yarn || true && npm install -g yarn@${YARN_VERSION})

# Set working directory
WORKDIR /app

# Copy only package files to take advantage of Docker cache
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the application files
COPY . .

# Build the application
RUN yarn build && \
    chown -R app:app /app && \
    rm -rf node_modules && \
    yarn install --production --frozen-lockfile && \
    rm -rf src tsconfig.json Dockerfile .dockerignore && \
    yarn cache clean

# Use a smaller base image for the final production image
FROM alpine:3.14

# Set up a non-root user
RUN addgroup -S app && adduser -S -G app app

# Copy the built application from the previous stage
COPY --from=builder --chown=app:app /app /app

USER app

# Start the application
CMD ["yarn", "start"]
