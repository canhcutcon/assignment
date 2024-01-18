# Use the official Node.js image with a specific version
FROM node:21

# Set the working directory
WORKDIR /app/technical-assign-client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the entire application to the container
COPY . .

# Expose the port on which your Next.js app runs
EXPOSE 3000

# Build the Next.js app
RUN yarn run build

# Start the Next.js app
CMD ["yarn", "start"]
