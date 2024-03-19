import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

export const usersDetailRef = collection(db, "users-detail");

// name, picture, email, uid, username
export async function addUserDetail(data) {
  await addDoc(usersDetailRef, data);
}

// export async function getUsersDetail(uid, data){

// }

export async function updateUserDetail(uid, data) {
  const q = query(usersDetailRef, where("uid", "==", uid));
  const docs = await getDocs(q);

  docs.forEach(async (d) => {
    try {
        
        await updateDoc(d.ref, {username: "loolol"});
    } catch (error) {
        console.log(error)
    }
  });
}
