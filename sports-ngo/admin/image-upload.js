// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyABrsI6xGDAKcrwZZvGV7OHbG22NMUH3wU",
    authDomain: "art-sheet.firebaseapp.com",
    databaseURL: "https://art-sheet-default-rtdb.firebaseio.com",
    projectId: "art-sheet",
    storageBucket: "art-sheet.appspot.com",
    messagingSenderId: "837945719022",
    appId: "1:837945719022:web:af0f58768f60e6c8e4dbff",
    measurementId: "G-QBKCBW2YBL"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    
    const file = imageInput.files[0];
    const title = titleInput.value;
    const description = descriptionInput.value;
  
    // Create a reference to store the image in Firebase Storage
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    storageRef.put(file)
      .then((snapshot) => {
        // Get the download URL for the image
        return snapshot.ref.getDownloadURL();
      })
      .then((downloadURL) => {
        // Save the image details to Firestore
        return db.collection('images').add({
          title: title,
          description: description,
          imageURL: downloadURL
        });
      })
      .then(() => {
        // Clear the input fields after successful upload
        imageInput.value = '';
        titleInput.value = '';
        descriptionInput.value = '';
        alert('Image uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        alert('Error uploading image. Please try again.');
      });
  }
  