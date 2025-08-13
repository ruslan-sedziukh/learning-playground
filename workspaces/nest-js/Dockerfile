# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the monorepo's package-lock.json from the root
# The build context is now the monorepo root, so we can copy it directly
COPY package-lock.json ./

# Copy the workspace's package.json
COPY workspaces/nest-js/package.json ./

# Install dependencies for the entire monorepo
RUN npm ci

# Copy the rest of your application code
# This copies all files from the nest-js directory into the container
COPY workspaces/nest-js/ ./

# Build the NestJS application
RUN npm run build

# Stage 2: Run the application (leaner image)
FROM node:20-alpine AS production

WORKDIR /app

# Copy the monorepo's package-lock.json from the root
COPY package-lock.json ./

# Copy the workspace's package.json for production dependencies
COPY workspaces/nest-js/package.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Copy other necessary files like .env
COPY workspaces/nest-js/.env ./.env

# Expose the port your NestJS app will listen on
EXPOSE 3000

# Command to run your NestJS application
CMD ["node", "dist/main"]