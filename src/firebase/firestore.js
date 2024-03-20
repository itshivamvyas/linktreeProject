import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore();

export const usersDetailRef = collection(db, "users-detail");

// name, picture, email, uid, username
export async function addOrUpdateUserDetail(uid, data) {
  try {
    await setDoc(doc(usersDetailRef, uid), data, { merge: true });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetailData(uid) {
  try {
    const dataDoc = await getDoc(doc(usersDetailRef, uid));
    if (data.exists) return dataDoc.data();
    else return null;
  } catch (error) {
    console.log(error);
  }
}
