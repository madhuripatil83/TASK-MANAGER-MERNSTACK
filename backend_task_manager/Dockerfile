# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]
