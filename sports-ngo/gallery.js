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
  
  // Function to fetch images from Firestore and display in the specified format
function fetchImages() {
    const galleryContainer = document.getElementById('gallery');
  
    db.collection('images').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const { title, description, imageURL } = data;
  
          // Create elements for image gallery
          const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery-container');
  
          const imageContainer = document.createElement('div');
          imageContainer.classList.add('image-container');
  
          const imgElement = document.createElement('img');
          imgElement.src = imageURL;
          imgElement.alt = title;
  
          const detailsContainer = document.createElement('div');
          detailsContainer.classList.add('details');
  
          const titleElement = document.createElement('span');
          titleElement.classList.add('title');
          titleElement.textContent = title;
  
          const descriptionElement = document.createElement('span');
          descriptionElement.classList.add('tag');
          descriptionElement.textContent = description;
  
          // Append elements to the gallery container
          imageContainer.appendChild(imgElement);
          detailsContainer.appendChild(titleElement);
          detailsContainer.appendChild(descriptionElement);
  
          galleryItem.appendChild(imageContainer);
          galleryItem.appendChild(detailsContainer);
  
          galleryContainer.appendChild(galleryItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }
  
  // Fetch images when the page loads
  window.addEventListener('load', fetchImages);