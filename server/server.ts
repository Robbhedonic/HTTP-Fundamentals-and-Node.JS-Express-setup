import express from "express";
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to our home page!")
});

app.get(
    "/menu",
    (req, res) => {
        res.json({
            restaurant: "My first restaurant",
            categories: {
                appetizers: ["Bowl Salmon", "Bowl Yakiniku"],
                mains: ["Salmon", "Pork", "Tofu"],
                desserts: ["Mochi", "Lyche Ice cream"],
                drinks: ["Orange Juice", "Lemon sorbet", "Summer drink"]
            },
            lastUpdated: new Date().toISOString().split("T")[0],
        });
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});