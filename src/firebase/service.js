import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './init';

// Fungsi untuk menambahkan RSVP
export const addRSVP = async (data, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Fungsi untuk mendapatkan daftar RSVP
export const getRSVPs = async (collectionName) => {
  const rsvpCollection = collection(db, collectionName);
  const rsvpSnapshot = await getDocs(rsvpCollection);
  const rsvpList = rsvpSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      timestamp: data.timestamp ? data.timestamp.toDate() : new Date(), // Handle undefined timestamp
    };
  });
  return rsvpList;
};
