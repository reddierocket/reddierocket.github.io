import { app, auth, db } from "../firebase-setup.js";  // shared Firebase config
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createFlashcard(front, back, categories) {
  const user = auth.currentUser;
  if (!user) {
    alert("You must be signed in to create a flashcard.");
    return;
  }

  try {
    await addDoc(collection(db, "flashcards"), {
      front: front,
      back: back,
      categories: categories,
      ownerId: user.uid,
      createdAt: serverTimestamp()
    });
    alert("Flashcard created successfully!");
  } catch (error) {
    console.error("Error adding flashcard: ", error);
  }
}
