import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyD2LqqSGIlEXnsB6t97AmHTLPJ9MleJJ0w",
    authDomain: "instagram-clone-71b18.firebaseapp.com",
    databaseURL: "https://instagram-clone-71b18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "instagram-clone-71b18",
    storageBucket: "instagram-clone-71b18.appspot.com",
    messagingSenderId: "548995628003",
    appId: "1:548995628003:web:16aaba23cac40425257ed6",
    measurementId: "G-KG6RGLEPHV"
};

const firebase = Firebase.initializeApp(config);
const FieldValue = Firebase.firebase;

export { firebase, FieldValue };