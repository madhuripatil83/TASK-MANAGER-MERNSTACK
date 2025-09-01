# Step 1: Use the official Node.js image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and lock files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app
COPY . .

# 🧠 Step 6: Build the app with env variable
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# Step 7: Install static server
RUN npm install -g serve

# Step 8: Expose port
EXPOSE 3000

# Step 9: Serve the built app
CMD ["serve", "-s", "dist"]
