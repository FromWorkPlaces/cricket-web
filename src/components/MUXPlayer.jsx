import MuxPlayer from "@mux/mux-player-react"; 
import {ref as firebaseRef, set, push, onValue} from "firebase/database";
import { useEffect, useState } from "react";
import { auth, database } from '../firebase';

const MUXPlayer = () => {

    const [playBackID, setPlayBackID] = useState("R7TbackC00lxwB4TEAsO00I9m2zprhVLMAPDrHXSSOJVI")

    useEffect(() => {
        getPlaybackID()
    }, []);

    const getPlaybackID = async () => {
        const cricketRef = firebaseRef(database, `cricket`);
  
        onValue(cricketRef, async (snapshot) => {
            if (snapshot.exists()){
                let data = snapshot.val();
                setPlayBackID(data)
            } else {
              console.log("No data found");
            }
        })
    }

    useEffect(() => {
        console.log("playBackID", playBackID)
    }, [playBackID])
    
    
    return (
        <div>
            <MuxPlayer
                streamType="on-demand"
                playbackId={playBackID}
                metadata={{
                    video_id: "video-id-54321",
                    video_title: "Test video title",
                    viewer_user_id: "user-id-007",
                }}
            />
        </div>
    );
}
 
export default MUXPlayer;