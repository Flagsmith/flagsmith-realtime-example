import React, {useEffect,useRef,useState} from 'react'; // we need this to make JSX compile
import { createFlagsmithInstance } from 'flagsmith'
import env from "../util/env";
const FlagsmithBlock = ({ id }) => {
    const [lastUpdated, setLastUpdated] = useState(Date.now().valueOf())
    const flagsmith = useRef()
    const pusher = useRef()
    const channel = useRef()
    useEffect(()=>{
        flagsmith.current = createFlagsmithInstance()
        flagsmith.current.init({
            environmentID: env.flagsmith,
            preventFetch:true,
            onChange: ()=>{
                setLastUpdated(Date.now().valueOf());
            }
        })
        pusher.current = new Pusher(env.pusher, {
            cluster: 'eu',
        });
        channel.current = pusher.current.subscribe('flagsmith');
        channel.current.bind('webhook', ()=> {flagsmith.current.getFlags();});
        flagsmith.current.identify(id)
    },[id])
    const colour = flagsmith.current && flagsmith.current.getValue("colour");
    return (
        <div style={{width:200,height:200, display:'flex', alignItems:'center', justifyContent:'center', marginRight:10, marginBottom:10, backgroundColor:colour}}>
            {id}
        </div>
    )
}

export default FlagsmithBlock
