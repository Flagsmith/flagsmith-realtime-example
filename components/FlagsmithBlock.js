import React, {useEffect,useRef,useState} from 'react'; // we need this to make JSX compile
import { createFlagsmithInstance } from 'flagsmith'

const environmentID = 'VmyxnCfVjyrrRZZTt8pD95';
const baseStyle = {
    width:200,
    height:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
    marginBottom:10,
}
const FlagsmithBlock = ({ id }) => {
    const [_, setLastUpdated] = useState(Date.now().valueOf())
    const flagsmith = useRef()
    useEffect(()=>{
        flagsmith.current = createFlagsmithInstance()
        flagsmith.current.init({
            environmentID,
            realtime: true,
            enableLogs:true,
            preventFetch:true,
            onChange: ()=>{
                setLastUpdated(Date.now().valueOf());
            }
        })
        flagsmith.current.identify(id)
    },[id])
    useEffect(()=>{
        if(flagsmith.current.identity) {
            flagsmith.current.getFlags();
        }
    },[])
    const colour = flagsmith.current && flagsmith.current.getValue("colour");
    return (
        <div style={{
            ...baseStyle,
            backgroundColor:colour
        }}>
            {id}
        </div>
    )
}

export default FlagsmithBlock
