import { useState, createContext, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from './../Firebase';
const db = getDatabase(app);
export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const starCountRef = ref(db, '/medicines');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setData(data);

        });
    }, [])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}