import app from "../Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(app);





const starCountRef = ref(db, '/medicines');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    data;

});

export default dataBase;



