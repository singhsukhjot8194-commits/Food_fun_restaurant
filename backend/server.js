import express from 'express'; // <--- Yeh line missing thi!
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js'; // Aapki app.js file

// ESM mein __dirname direct kaam nahi karta, isliye yeh 2 lines likhna zaroori hai:
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// Static files serve karein
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});