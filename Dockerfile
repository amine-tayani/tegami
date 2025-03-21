# Stage 1: Build application
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency files first for caching
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy remaining files
COPY . .

# Build project
RUN bun run build

# Stage 2: Production server
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
