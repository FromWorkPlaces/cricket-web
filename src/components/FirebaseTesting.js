import {ref as firebaseRef, set, push, onValue} from "firebase/database";
import { useEffect } from "react";
import { auth, database } from '../firebase';

const FirebaseTesting = () => {

    // ! Changing Screen Header title
    useEffect(() => {
        getMessages()
    }, []);

    // ! ==========================
    // ! Get Messages from firebase
    // ! ==========================
    const getMessages = async () => {
        const messagesRef = firebaseRef(database, `cricket`);
  
        onValue(messagesRef, async (snapshot) => {
            if (snapshot.exists()){
                let data = snapshot.val();
                console.log(data)
            } else {
              console.log("No data found");
            }
        })
    }
    
    return (
        <div>

        </div>
    );
}
 
export default FirebaseTesting;