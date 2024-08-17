
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

import { App } from "./ConfigFirebase"

const db = getFirestore(App);


const setUpUser = async (name, email, phone, address) => {

    const userRef = {
        name,
        email,
        phone,
        address
    }

    const ref = doc(collection(db, "user"))

    return await setDoc(ref, userRef)
}



export { setUpUser }