// Your web app's Firebase configuration (already provided by you)
const firebaseConfig = {
  apiKey: "AIzaSyBloD2f97f6wOhnz0jALQ7slM-CJaSpNuE",
  authDomain: "contactform-8ea25.firebaseapp.com",
  databaseURL: "https://contactform-8ea25-default-rtdb.firebaseio.com",
  projectId: "contactform-8ea25",
  storageBucket: "contactform-8ea25.appspot.com",
  messagingSenderId: "416188748735",
  appId: "1:416188748735:web:7793c830036bc4df89c70a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
const db = firebase.firestore();

document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value.trim();
    const orderDetails = document.getElementById('order-details').value.trim();

    db.collection('orders').add({
        name: customerName,
        order: orderDetails,
        createdAt: new Date()
    })
    .then(() => {
        // Display success message with customer's name
        document.getElementById('success-message').innerHTML = `<p>Thank you, ${customerName}, your order has been placed successfully!</p>`;
        document.getElementById('success-message').classList.remove('hide');
        
        // Optionally, hide the message after a few seconds
        setTimeout(() => {
            document.getElementById('success-message').classList.add('hide');
        }, 5000);
        
        // Reset form fields
        document.getElementById('order-form').reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});
