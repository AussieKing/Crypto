import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig); 

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Adding this listener to get the user details whenever the authentication state changes
onAuthStateChanged(auth, user => {
    if (user) {
        const firebaseUID = user.uid;
        const email = user.email;
        
        // Call your backend API to send this user info
        // This is just a sample. You might want to handle it differently based on your application structure.
        fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firebaseUID, email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response
        })
        .catch(error => {
            console.error("Error sending user data:", error);
        });
    }
});

export { auth, db };
