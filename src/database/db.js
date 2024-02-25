import app from "../Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(app);




export default function Db() {

    const starCountRef = ref(db, '/medicines');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        // updateStarCount(postElement, data);
    });

    console.log(starCountRef)
    return (
        <div>

        </div>
    )
}
