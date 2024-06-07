document.getElementById('taskForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values from form
    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value; 
    const email = document.getElementById('email').value; 
    const num = document.getElementById('num').value; 

    // Save task to Firestore
    db.collection('AryanMechanical').add({
        name: name,
        branch: branch,
        email: email,
        phone_no: num
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // Clear form
        document.getElementById('taskForm').reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
