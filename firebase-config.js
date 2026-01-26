// firebase-config.js
const firebaseConfig = {
    apiKey: process.env.apiKey || window.apiKey || "",
    authDomain: process.env.authDomain || window.authDomain || "",
    projectId: process.env.projectId || window.projectId || "",
    storageBucket: process.env.storageBucket || window.storageBucket || "",
    messagingSenderId: process.env.messagingSenderId || window.messagingSenderId || "",
    appId: process.env.appId || window.appId || "",
    measurementId: process.env.measurementId || window.measurementId || ""
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firebaseConfig;
} else {
    window.firebaseConfig = firebaseConfig;
}
