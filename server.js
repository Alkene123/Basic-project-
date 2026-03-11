import app from "./app.js";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config({ path: ".env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

connectDB();

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../fronted')));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../fronted/login.html'));
});

// The "catch-all" route that serves login.html for any unmatched route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../fronted/login.html'));
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
