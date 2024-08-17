import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { App } from "./ConfigFirebase";

const db = getFirestore(App);

// Get user profile
const getUserProfile = async (email) => {
    try {
        const collectRef = collection(db, "user");

        const q = query(collectRef, where("email", "==", email));
        const queryDoc = await getDocs(q);

        if (queryDoc.empty) {
            console.log('there is no user profile')
            return {
                error: "no user found.",
                message: "failed to get user."
            }
        } else {
            const user = []
            queryDoc.forEach((doc) => {
                user.push(doc.data())
            })

            return user[0];
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

export { getUserProfile };
