Quick Bite Backend 🍔

Quick Bite is a simple food ordering backend project built using Node.js and Express.js. It provides REST APIs for managing food items and customer orders.

🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- HTML/JavaScript for API testing

✨ Features

Food Management

- View all food items
- View a food item by ID
- Add a new food item
- Delete a food item

Order Management

- Place a new order
- View all orders
- View an order by ID
- Delete an order
- Basic order validation

📌 API Endpoints

Method| Endpoint| Description
GET| "/foods"| Get all foods
GET| "/foods/:id"| Get one food
POST| "/foods"| Add a food
DELETE| "/foods/:id"| Delete a food
POST| "/orders"| Place an order
GET| "/orders"| Get all orders
GET| "/orders/:id"| Get one order
DELETE| "/orders/:id"| Delete an order

▶️ How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Install the dependencies:

npm install

4. Start the server:

node server.js

5. Open the browser:

http://localhost:3000

🧪 API Testing

A simple "test.html" page is included in the "public" folder for testing the APIs directly through the browser.

📂 Project Structure

Quickbite/
├── public/
│   └── test.html
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

👩‍💻 Project

Quick Bite — Food Ordering Backend

Built as a beginner-friendly backend project using Node.js and Express.js.
