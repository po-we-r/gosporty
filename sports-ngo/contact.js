
  // Your Firebase project configuration
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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to your Firebase Realtime Database
  const database = firebase.database();

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactType = document.getElementById('contactType').value;
    const message = document.getElementById('message').value;

    // Push data to Firebase
    database.ref('contact-list').push({
      name: name,
      email: email,
      contactType: contactType,
      message: message
    })
    .then(() => {
      alert('Message submitted successfully!');
      document.getElementById('contactForm').reset(); // Clear form fields after submission
    })
    .catch(error => {
      console.error('Error writing to Firebase Database:', error);
      alert('An error occurred while submitting the form. Please try again.');
    });
  });

