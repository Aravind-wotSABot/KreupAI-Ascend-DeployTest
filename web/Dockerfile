# Build stage
FROM node:20 as build

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the app
COPY . .
RUN npm run build

# NGINX stage - Use NGINX to serve the build files
FROM nginx:alpine

# Copy the built files to NGINX's html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
