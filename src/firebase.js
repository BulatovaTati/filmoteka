import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: 'filmoteka-fe44d.firebaseapp.com',
  projectId: 'filmoteka-fe44d',
  storageBucket: 'filmoteka-fe44d.appspot.com',
  messagingSenderId: '290370989881',
  appId: '1:290370989881:web:f9ac7c10153d4aa7d702e8',
  measurementId: 'G-W98LDSLQQN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
