# Use the official Node.js 14 image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Set the service name as an argument
ARG SERVICE_NAME

# Copy the package.json and package-lock.json files to the working directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build $SERVICE_NAME

EXPOSE $PORT

# Start the application
CMD [ "npm", "run", "start:dev", "$SERVICE_NAME" ]