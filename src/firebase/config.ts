import { initializeApp } from "firebase/app";
// Solo importa los servicios que realmente uses, por ejemplo:
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVmfriZ_9sqBmWLc9p41zIdX4Jxj1oHYc",
  authDomain: "adecam-dcce7.firebaseapp.com",
  projectId: "adecam-dcce7",
  storageBucket: "adecam-dcce7.appspot.com",
  messagingSenderId: "964119095028",
  appId: "1:964119095028:web:66ccb1b318b5c43ed7e0a1",
  measurementId: "G-YFRFQS7EBY"
};

const app = initializeApp(firebaseConfig);
// Exporta app y los servicios que uses
export { app };