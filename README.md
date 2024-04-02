# ToDo Web Application Dockerized

This is a simple To-Do web application Dockerized using httpd (Apache HTTP Server) version 2.4.

## Getting Started

To get started with this Dockerized ToDo web application, you'll need Docker installed on your system.

### Dockerhub link
https://hub.docker.com/repository/docker/lemwaizz/todo4/general

### Prerequisites

- Docker: [Installation guide](https://docs.docker.com/get-docker/)

### Assumptions

1. Docker Installation: This assumes Docker is installed on your system. If not, please refer to the [official installation guide](https://docs.docker.com/get-docker/).

2. Operating System Compatibility: The Dockerfile and instructions provided are compatible with Unix-based systems like Linux and macOS.

3. Port Availability: Port 8080 (or any other specified port) is assumed to be available on the host system for running the Docker container. Please ensure that no other service is using this port.

4. Network Access: You are assumed to have network access to pull the base Docker image (`httpd:2.4`) from Docker Hub or any other configured Docker registry.

5. To keep it lightweight, an express.js server set-up script is provided for those interested in setting up a db with the application. A sample script for integrating node into our js is also provided. The assumption resulting will be that all dependencies will have already been installed in the host machine.
### Usage

1. Clone this repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the cloned directory:

    ```bash
    cd <repository_directory>
    ```

3. Build the Docker image:

    ```bash
    docker build -t todo-web-app .
    ```

4. Run the Docker container:

    ```bash
    docker run -d -p 8080:80 todo-web-app
    ```

5. Open your web browser and navigate to `http://localhost:8080` to access the ToDo web application.

## Dockerfile Details

The Dockerfile included in this repository is configured as follows:

```Dockerfile
# Use the httpd
FROM httpd:2.4

# working directory
WORKDIR /usr/local/apache2/htdocs/

# Copy your HTML, CSS, and JS files to the working directory
COPY . .

# Expose port 80
EXPOSE 80
