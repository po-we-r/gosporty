// Firebase configuration (same as before)
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

const db = firebase.firestore();

// Reference to specific elements by their IDs
const elements = {
  heroText: document.getElementById('heroText'),
  subText: document.getElementById('subText'),
  heroImage: document.getElementById('heroImage'),
  backgroundColor: document.getElementById('backgroundColor'),
  socialLinks: document.getElementById('socialLinks'),
  editableCSS: document.getElementById('editableCSS')
};

// Retrieve editable data from Firestore
const editableRef = db.collection('editables').doc('editableData');
editableRef.get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();

    // Update form fields with existing Firestore data, if available
    if (data.heroText) {
      elements.heroText.value = data.heroText;
    }

    if (data.subText) {
      elements.subText.value = data.subText;
    }

    if (data.heroImage) {
      elements.heroImage.value = data.heroImage;
    }

    if (data.backgroundColor) {
      elements.backgroundColor.value = data.backgroundColor;
    }

    if (data.socialLinks) {
      elements.socialLinks.value = data.socialLinks;
    }

    if (data.editableCSS) {
      elements.editableCSS.value = data.editableCSS;
    }
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});

// Form submission event
document.getElementById('editableForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    heroText: elements.heroText.value,
    subText: elements.subText.value,
    heroImage: elements.heroImage.value,
    backgroundColor: elements.backgroundColor.value,
    socialLinks: elements.socialLinks.value,
    editableCSS: elements.editableCSS.value
  };

  // Filter out empty fields
  const updatedData = Object.fromEntries(
    Object.entries(formData).filter(([_, value]) => value.trim() !== '')
  );

  // Update editable data in Firestore
  db.collection('editables').doc('editableData').set(updatedData)
    .then(() => {
      console.log('Editable data updated successfully!');
      // Redirect or handle success as needed
    })
    .catch(error => {
      console.error('Error updating editable data:', error);
    });

  return false; // Prevents default form submission and page reload
});
