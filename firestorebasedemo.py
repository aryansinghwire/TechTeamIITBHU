import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(r"C:\Users\Aryan\Desktop\Programming\Projects\TTEcell\newwebapp\privatekey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

data = {
    'name': 'clean the room', 
    'branch': 'in progress',
    'email': 'someone@example.com',
    'phone_no' : '0000000000'
}

doc_ref = db.collection('AryanMechanical').document()
doc_ref.set(data)

print("Document ID:", doc_ref.id)