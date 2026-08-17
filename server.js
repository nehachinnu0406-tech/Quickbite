const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let foods = [
    { id: 1, name: "Burger", price: 120 },
    { id: 2, name: "Pizza", price: 250 },
    { id: 3, name: "French Fries", price: 100 },
    { id: 4, name: "Biryani", price: 180 }
];
let orders = [];
app.get("/foods", (req, res) => {
  res.json(foods);
});
app.get("/", (req, res) => {
    res.send("Welcome to Quick Bite!");
});

app.get("/foods/:id", (req, res) => {
  const id = Number(req.params.id);

  const food = foods.find(item => item.id === id);

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  res.json(food);
});
app.post("/foods", (req, res) => {
    const newFood = {
        id: foods.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    foods.push(newFood);

    res.status(201).json(newFood);
});
app.delete("/foods/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = foods.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Food not found" });
    }

    const deletedFood = foods.splice(index, 1);

    res.json({
        message: "Food deleted successfully",
        food: deletedFood[0]
    });

});

app.get("/orders", (req, res) => {
    res.json(orders);
});
app.post("/orders", (req, res) => {
    const { customerName, foodName, quantity } = req.body;

    if (!customerName || !foodName || !quantity || quantity <= 0) {
        return res.status(400).json({
            message: "Please provide valid customer name, food name and quantity"
        });
    }

    const newOrder = {
        id: orders.length + 1,
        customerName: customerName,
        foodName: foodName,
        quantity: quantity
    };

    orders.push(newOrder);

    res.status(201).json(newOrder);
});
app.get("/orders/:id", (req, res) => {
    const id = Number(req.params.id);

    const order = orders.find(item => item.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
});
app.delete("/orders/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = orders.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Order not found" });
    }

    const deletedOrder = orders.splice(index, 1);

    res.json({
        message: "Order deleted successfully",
        order: deletedOrder[0]
    });
});

app.listen(3000, () => {
    console.log("Quick Bite server is running on port 3000");
});