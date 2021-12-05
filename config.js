import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDxfHG64OpHU_lqEGrqzMARvVIW1xmM_Bg",
  authDomain: "project-60-e8377.firebaseapp.com",
  databaseURL: "https://project-60-e8377-default-rtdb.firebaseio.com",
  projectId: "project-60-e8377",
  storageBucket: "project-60-e8377.appspot.com",
  messagingSenderId: "301013479128",
  appId: "1:301013479128:web:7ad1973e6700ee75f631ad"
};

if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}

export default firebase.database()
 

  