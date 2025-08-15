import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Only initialize if no app exists
const firebaseConfig = {
  apiKey: "AIzaSyDU71Csn0moQ8AGOsPIJOkVMAmVODzZiEU",
  authDomain: "rockthecat-d9617.firebaseapp.com",
  projectId: "rockthecat-d9617",
  storageBucket: "rockthecat-d9617.firebasestorage.app",
  messagingSenderId: "537950791174",
  appId: "1:537950791174:web:a5a2434536e3cf95f9c587"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
