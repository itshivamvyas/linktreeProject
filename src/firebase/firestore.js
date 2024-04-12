import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth } from ".";

export const db = getFirestore();

export const usersDetailRef = collection(db, "users-detail");
export const usersLinksRef = collection(db, "users-links");

// name, picture, email, uid, username
export async function addOrUpdateUserDetail(uid, data) {
  try {
    await setDoc(doc(usersDetailRef, uid), data, { merge: true });
  } catch (error) {
    console.log(error);
  }
}
// links And User Data

export async function addUserLink(username, data) {
  try {
    await addDoc(collection(db, "links", username, "data"), data)
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserLink(username, id, data) {
  try {
    await updateDoc(doc(db, "links", username, "data", id), data)
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUserLink(username, id) {
  try {
    await deleteDoc(doc(db, "links", username, "data", id))
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetailData(uid) {
  try {
    const dataDoc = await getDoc(doc(usersDetailRef, uid));
    if (dataDoc.exists()) return dataDoc.data();
    else return null;
  } catch (error) {
    console.log(error);
  }
}