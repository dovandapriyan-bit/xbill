
// api/firebase-config.js - SERVER SIDE
export default async function handler(req, res) {
    // Kirim config ke client (HANYA yang public-safe)
    const config = {
        apiKey: process.env.apiKey || "",
        authDomain: process.env.authDomain || "",
        projectId: process.env.projectId || "",
        storageBucket: process.env.storageBucket || "",
        messagingSenderId: process.env.messagingSenderId || "",
        appId: process.env.appId || "",
        measurementId: process.env.measurementId || ""
    };
    
    // Hanya kirim jika apiKey ada
    if (config.apiKey) {
        res.status(200).json(config);
    } else {
        res.status(500).json({ error: "Firebase config not found" });
    }
}
