# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
# Using npm ci for clean installs, especially useful in CI/CD
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build the NestJS application
# This compiles TypeScript to JavaScript in the 'dist' folder
RUN npm run build

# Stage 2: Run the application (leaner image)
FROM node:20-alpine AS production

WORKDIR /app

# Copy package.json and package-lock.json for production dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Copy other necessary files like .env (if you're not passing env vars directly)
# or any other assets your app needs at runtime (e.g., public folder)
COPY --from=build /app/.env ./.env
# If you have static assets, copy them too:
# COPY --from=build /app/public ./public

# Expose the port your NestJS app will listen on
EXPOSE 3000

# Command to run your NestJS application
# We'll use npm run start:prod as recommended for production builds
CMD ["node", "dist/main"]
