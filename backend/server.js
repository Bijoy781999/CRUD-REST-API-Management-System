const exp = require('express');
const cors = require('cors');
const mong = require('mongoose');
require('dotenv').config();

const app = exp();
app.use(cors());
app.use(exp.json());

const path = require('path');
app.use(exp.static(path.join(__dirname, '../frontend')));
// Database Connection
mong.connect("mongodb://localhost:27017/crudDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected ✅"))
.catch((err)=> console.error("MongoDB Connection Failed ❌", err));


// Models Items
const Items = mong.model('Items', new mong.Schema({name: { type: String, required: true}, email: { type: String, required: true}, phone: { type: String, required: true}}));


// Routes
const rout = exp.Router();

rout.get('/', async (request, response) => {
    try {
        const items = await Items.find({});
        console.log("GET /api/items:", items);
        response.json(items);
    } catch (err) {
        console.error(err);
        response.status(400).json({ error: err.message });
    }
});

rout.post('/', async (request, response) => {
    console.log("POST request body:", request.body); 
    try {
        const newItem = new Items(request.body);
        const savedItem = await newItem.save();
        console.log("Saved item:", savedItem);
        response.status(201).json(savedItem);
    } catch (err) {
        console.error("Error saving item:", err.message); 
        response.status(400).json({ error: err.message });
    }
});

rout.put("/:id", async (request, response) => {
    console.log("PUT request body:", request.body, "ID:", request.params.id);
    try {
        const updated = await Items.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!updated) return response.status(404).json({ message: "Item not found" });
        console.log("Updated item:", updated);
        response.status(200).json(updated);
    } catch (err) {
        console.error("Error updating item:", err.message);
        response.status(400).json({ error: err.message });
    }
});

rout.delete("/:id", async (request, response) => {
    try {
        const deleted = await Items.findByIdAndDelete(request.params.id);
        if (!deleted) return response.status(404).json({ message: "Item not found" });
        console.log("Deleted item:", deleted);
        response.json({ message: "Item deleted successfully", deleted });
    } catch (err) {
        console.error("Error deleting item:", err.message);
        response.status(400).json({ error: err.message });
    }
});
app.use('/api/items', rout);


// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running! View the web page at: http://localhost:${PORT}/CRUD.html`);
    console.log(`API is available at: http://localhost:${PORT}/api/items`);
});