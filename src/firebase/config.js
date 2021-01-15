import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFZhHASejo-I3AcoMz_6LIuCu3rWNhLIw",
  databaseURL: "https://chatapp-e9e5e-default-rtdb.firebaseio.com/",
  projectId: "chatapp-e9e5e",
  appId: "1:132311937212:android:ac5df46697fe52743460b9",
};

export default Firebase.initializeApp(firebaseConfig);
