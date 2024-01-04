
 
  
  const db = firebase.firestore();

// Firebase configuration and initialization code (same as before)

// Reference to specific elements by their classes
const elements = {
    heroText: document.querySelector('.hero-text'),
    subText: document.querySelector('.paragraph'),
    heroImage: document.querySelector('.hero-image'),
    backgroundColor: document.querySelector('.background-color'),
    socialLinks: document.querySelector('.instagram-links'),
    editableCSS: document.querySelector('.editable-css')
  };
  
  // Retrieve editable data from Firestore
  const editableRef = db.collection('editables').doc('editableData');
  editableRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
  
      // Update elements only if Firestore data exists and is not empty
      if (data.heroText) {
        elements.heroText.innerHTML = data.heroText;
      }
  
      if (data.subText) {
        elements.subText.textContent = data.subText;
      }
  
      if (data.heroImage) {
        elements.heroImage.src = data.heroImage;
      }
  
      if (data.backgroundColor) {
        elements.backgroundColor.textContent = data.backgroundColor;
      }
  
      if (data.socialLinks) {
        elements.socialLinks.href = data.socialLinks;
      }
  
      if (data.editableCSS) {
        elements.editableCSS.textContent = data.editableCSS;
      }
    } else {
      console.log('No such document!');
    }
  }).catch((error) => {
    console.error('Error getting document:', error);
  });
  