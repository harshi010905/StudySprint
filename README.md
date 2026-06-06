# StudySprint

StudySprint is a modern productivity and study management web application designed to help students stay organized, focused, and consistent in their learning journey. The application combines task management, productivity tracking, and study planning features within a clean and responsive user interface.

---

## Features

* Sprint-based study timer
* Task management system
* Productivity tracking
* Dark and Light mode support
* Responsive user interface
* Interactive animations
* Modern React-based frontend

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### DevOps & Tools

* Docker
* Docker Compose
* Jenkins
* GitHub
* Node.js
* npm

---

## Project Purpose

This project was initially developed after completing the IBM SkillsBuild Web Development Fundamentals program to apply frontend development concepts in a real-world application.

The project was later enhanced using DevOps practices to automate build processes, containerize the application, and implement Continuous Integration (CI) workflows.

---

## DevOps Implementation

### Docker Containerization

The StudySprint application was containerized using Docker to ensure consistency across development and deployment environments.

Key implementations:

* Created a custom Dockerfile for the application
* Built reusable Docker images
* Isolated application dependencies from the host machine
* Enabled environment-independent execution

### Docker Compose

Docker Compose was configured to simplify container management and application startup.

Benefits:

* Single-command application startup
* Simplified container orchestration
* Improved reproducibility across systems

### Jenkins Continuous Integration

Jenkins was installed and configured using Docker to automate build operations.

Implemented workflow:

* Connected Jenkins to GitHub repository
* Automated repository cloning
* Automated dependency installation using npm
* Automated application build using Vite
* Verified build success through Jenkins pipeline execution

---

## CI/CD Workflow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ├── npm install
    │
    ├── npm run build
    │
    ▼
Build Validation
    │
    ▼
Deployment Environment
```

---

## Project Architecture

```text
User
 │
 ▼
StudySprint Web Application
 │
 ▼
GitHub Repository
 │
 ▼
Jenkins CI Pipeline
 │
 ▼
Docker Container
 │
 ▼
Deployment Platform
```

---

## Project Structure

```text
StudySprint
│
├── public/
├── src/
├── Dockerfile
├── compose.yaml
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/harshi010905/StudySprint.git
cd StudySprint
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## Docker Setup

### Build Docker Image

```bash
docker build -t studysprint .
```

### Run Docker Container

```bash
docker run -p 5173:5173 studysprint
```

---

## Docker Compose Setup

Start application using Docker Compose:

```bash
docker compose up
```

---

## Jenkins Build Automation

The Jenkins pipeline performs the following actions automatically:

```bash
npm install
npm run build
```

Build status is validated through Jenkins, ensuring that code changes can be continuously tested and verified.

---

## Screenshots

### Application Dashboard

(Add dashboard screenshot here)

### Docker Container Execution

(Add Docker screenshot here)

### Jenkins Successful Build

(Add Jenkins build success screenshot here)

---

## Learning Outcomes

Through this project, the following concepts were implemented and explored:

* Frontend Development with React
* Docker Containerization
* Docker Compose Orchestration
* Jenkins Continuous Integration
* GitHub Integration
* Automated Build Pipelines
* DevOps Fundamentals

---

## Author

**Harshitha Pasupureddy**

B.Tech Computer Science Engineering

Focused on Web Development, Cloud Computing, DevOps, and AI-driven applications.
