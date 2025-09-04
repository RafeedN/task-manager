# Task Manager - Spring Boot REST API Project

## Project Description
This project is a simple **Task Manager** application built with **Java Spring Boot**. The goal of this project was to learn how to build and interact with **REST APIs**, understand the fundamentals of **Spring Boot**, and implement a full **CRUD** backend.  

The app allows users to **create, read, update, and delete tasks** via RESTful endpoints, with tasks stored in-memory. This project demonstrates the structure of a typical Spring Boot application using **Model**, **Repository**, and **Controller** layers.

---

## Learning Goals
- Understand how to work with **REST APIs** in Java Spring Boot.
- Learn the basics of **Spring Boot** including annotations, dependency injection, and project structure.
- Gain hands-on experience with **CRUD operations** in a backend service.
- Understand the MVC-like structure in Spring Boot (**Model, Repository, Controller**) and how it compares to similar patterns in **C#** and .NET applications.

---

## Backend API Endpoints
The application exposes the following RESTful APIs:

| HTTP Method | Endpoint        | Description                                |
|-------------|----------------|--------------------------------------------|
| GET         | `/api/tasks`    | Retrieve all tasks                          |
| POST        | `/api/tasks`    | Add a new task                              |
| PUT         | `/api/tasks/{id}` | Update a task by its ID                     |
| DELETE      | `/api/tasks/{id}` | Delete a task by its ID                     |

**Example Request/Response**:  

**GET `/api/tasks`**
```json
[
  {
    "id": 1,
    "title": "Test Task 1",
    "completed": false
  },
  {
    "id": 2,
    "title": "Test Task 2",
    "completed": true
  }
]
```

## Project Structure

**Model (Task):** Defines the data structure for tasks (id, title, completed).  

**Repository (TaskRepository):** Handles data storage and retrieval (in-memory map in this project).  

**Controller (TaskController):** Manages HTTP requests and maps them to repository operations.  

This structure closely mirrors **C# / .NET** backend development using models, repositories, and controllers, making it highly transferable to other backend frameworks.  

---

## Frontend

The project includes a simple **HTML, CSS, and JavaScript frontend** to interact with the backend APIs:

- Display tasks dynamically  
- Add, update, and delete tasks through API calls  

---

## Tools & Libraries Used

- **Java 17** & Spring Boot  
- Maven for dependency management  
- JavaScript, HTML, CSS for frontend  
- Fetch API for client-server interaction  

---

## Achievements

- Built a functional CRUD application with REST API endpoints.  
- Learned to structure a Spring Boot backend with Model, Repository, Controller.  
- Implemented dynamic frontend to interact with backend APIs.  
- Gained experience in RESTful principles, which are directly transferable to C#, .NET, or other backend frameworks.  
- Ready to extend with database persistence (H2, MySQL, or PostgreSQL) and authentication features in future iterations.  

---

## Future Improvements

- Connect backend to a persistent database.  
- Add authentication & user management.  
- Enhance frontend with a modern framework like React or Vue.js.  
- Add automated tests for backend APIs.  
