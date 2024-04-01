# ToDo Web Application Dockerized

This is a simple To-Do web application Dockerized using httpd (Apache HTTP Server) version 2.4.

## Getting Started

To get started with this Dockerized ToDo web application, you'll need Docker installed on your system.

### Prerequisites

- Docker: [Installation guide](https://docs.docker.com/get-docker/)

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
```

- The base image used is `httpd:2.4`, which provides the Apache HTTP Server version 2.4.
- The working directory is set to `/usr/local/apache2/htdocs/`, where the Apache server looks for files to serve.
- All files from the current directory are copied to the working directory within the container.
- Port 80, which is the default port for HTTP, is exposed to allow external access to the web application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
