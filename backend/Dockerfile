# Use an official Node.js image from Docker Hub
FROM node:20

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on (5002)
EXPOSE 5002

# Command to run the app
CMD ["npm", "start"]
