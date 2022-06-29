import React, {useEffect,useRef,useState} from 'react'; // we need this to make JSX compile
import { createFlagsmithInstance } from 'flagsmith'
import env from "../util/env";
const FlagsmithBlock = ({ id, timestamp }) => {
    const [_, setLastUpdated] = useState(Date.now().valueOf())
    const flagsmith = useRef()
    useEffect(()=>{
        flagsmith.current = createFlagsmithInstance()
        flagsmith.current.init({
            environmentID: env.flagsmith,
            api: env.flagsmithAPI,
            preventFetch:true,
            onChange: ()=>{
                setLastUpdated(Date.now().valueOf());
            }
        })
        flagsmith.current.identify(id)
    },[id])
    useEffect(()=>{
        if(flagsmith.identity) {
            flagsmith.current.getFlags();
        }
    },[timestamp])
    const colour = flagsmith.current && flagsmith.current.getValue("colour");
    return (
        <div style={{width:200,height:200, display:'flex', alignItems:'center', justifyContent:'center', marginRight:10, marginBottom:10, backgroundColor:colour}}>
            {id}
        </div>
    )
}

export default FlagsmithBlock
