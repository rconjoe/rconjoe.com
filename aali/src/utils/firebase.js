import { initializeApp } from 'firebase/app'
import {
  getFunctions, 
  httpsCallable
} from 'firebase/functions'
const cfg = {
  apiKey: "AIzaSyD0DAdjN-ZsA6tQGUqDTF_mWuUiaIVo1Vs",
  authDomain: "rconjoe-79ca7.firebaseapp.com",
  projectId: "rconjoe-79ca7",
  storageBucket: "rconjoe-79ca7.appspot.com",
  messagingSenderId: "822307648005",
  appId: "1:822307648005:web:170c08a1f44e3123e8226c",
  measurementId: "G-1RZV430F8E"
}
const app = initializeApp(cfg)
const functions = getFunctions(app)

export const submitContact = httpsCallable(functions, 'submitContact')