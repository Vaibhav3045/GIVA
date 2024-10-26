# GIVA
This project is a Product Management System designed to showcase the full-stack development process. It provides a way to manage a list of products, allowing users to view, add, edit, and delete product entries. I built this system to demonstrate CRUD (Create, Read, Update, Delete) functionality using a combination of Node.js, Express, PostgreSQL, and React.

Project Overview and Objective
The goal of this project is to create a user-friendly platform for managing products, where each product has attributes like name, description, price, and quantity. This type of system is essential for any business that needs an organized way to manage inventory or track products.

To achieve this, I used a PostgreSQL database to store product data securely, and set up a Node.js + Express backend to handle API requests, interact with the database, and perform all CRUD operations. For the frontend, I used React to create a responsive and interactive interface, making it easy for users to manage products from a web application.

Key Features
View All Products: Users can see a list of all products stored in the database, including each product’s name, description, price, and available quantity.
Add New Product: Users can add new products by filling out a form with the necessary details. The backend saves this data to the PostgreSQL database.
Edit Product: The application provides an option to update product details, allowing users to modify existing entries directly.
Delete Product: Users can remove products that are no longer needed, and this change is reflected in both the frontend and backend.
My Understanding of the Technologies Used
For this project, I worked with a combination of technologies that each play a unique role in building the application:

Node.js and Express: I used Node.js to create the server and Express as the framework for handling HTTP requests. Express is lightweight and well-suited for building APIs, which I used to manage communication between the frontend and the database.

PostgreSQL: PostgreSQL serves as the relational database where all product information is stored. It provides robust data integrity, ensuring that data is stored efficiently and can be retrieved quickly. Using SQL queries within the Node.js backend, I can interact with the database to add, update, delete, and retrieve data as needed.

React: For the frontend, I chose React because it’s powerful for creating interactive user interfaces. With React’s component-based structure, I could organize the UI efficiently, breaking down the application into reusable parts. This makes the app modular and easy to maintain, especially when adding features or making adjustments.

Axios and dotenv: Axios is used for making HTTP requests from the frontend to the backend, allowing the React app to communicate with the Express API. The dotenv library keeps sensitive data (like database credentials) secure by storing them in environment variables.

Project Structure and Flow
The project is structured to keep the frontend and backend separate. This division of responsibilities makes the codebase easier to navigate and scales well with additional features.

Backend (Node.js + Express + PostgreSQL):

The backend handles all CRUD operations. Each route (GET, POST, PUT, DELETE) is designed to interact with the PostgreSQL database, allowing the app to dynamically manage product data.
The database is set up with a table for products, where each product has a unique ID, name, description, price, and quantity. This table structure is ideal for managing a wide range of product types while ensuring data consistency.
Frontend (React):

The React frontend provides a simple and intuitive user interface. Users can view a list of products, and interact with buttons to add, edit, or delete entries.
React’s state management keeps the UI updated with the latest data. When changes are made (like adding or deleting a product), the frontend re-fetches the latest product list to reflect these changes immediately.
Integration:

The backend serves as an API, while the frontend uses Axios to communicate with it. This setup allows for seamless data exchange between the user interface and the database.
When a user performs an action (e.g., adding a new product), the frontend sends a request to the backend API, which processes the request, updates the database, and sends a response back to the frontend. This response is used to update the displayed data.
Future Potential and Learning Experience
Working on this project has been an insightful experience, providing hands-on practice with full-stack development. It’s given me a better understanding of how a backend communicates with a database, as well as how a frontend application can interact with an API to provide a smooth user experience.

In the future, I could enhance this project by adding features such as:

User Authentication: Implementing login functionality would secure the product management features, allowing only authorized users to make changes.
Search and Filter Options: This would help users quickly locate specific products.
Enhanced Styling and Responsiveness: Improving the UI with more advanced styling would make the app more visually appealing and responsive on various devices.
Conclusion
This Product Management System project combines backend and frontend technologies to create a fully functional CRUD application. It demonstrates my ability to work with databases, set up and consume RESTful APIs, and create a responsive frontend. Overall, it’s been a rewarding project that strengthens my understanding of full-stack web development and leaves room for further enhancements.

