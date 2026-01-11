import { auth, db, storage } from './firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const form = document.getElementById('signupForm');
const message = document.getElementById('signupMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  message.textContent = '';

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cvFile = document.getElementById('cvFile').files[0];

  try {
    // 1️⃣ Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // 2️ Upload CV if provided
    let cvUrl = '';
    if (cvFile) {
      const storageRef = ref(storage, `cvs/${uid}_${cvFile.name}`);
      await uploadBytes(storageRef, cvFile);
      cvUrl = await getDownloadURL(storageRef);
    }

    // 3 Save user profile in Firestore
    await setDoc(doc(db, 'users', uid), {
      fullName,
      email,
      cvUrl,
      createdAt: serverTimestamp()
    });

    message.style.color = 'green';
    message.textContent = 'Account created successfully! You can now log in.';
    form.reset();

  } catch (err) {
    message.style.color = 'red';
    message.textContent = err.message;
    console.error(err);
  }
});
