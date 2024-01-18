# Use the official Node.js image with a specific version
FROM node:16

# Set the working directory
WORKDIR /app/technical-assign-server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the entire application to the container
COPY . .

# Expose the port on which your Node.js app runs
EXPOSE 3011

# Start the Node.js server
CMD ["yarn", "dev"]
