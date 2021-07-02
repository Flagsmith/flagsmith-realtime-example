import React, {useEffect,useRef,useState} from 'react'; // we need this to make JSX compile
import { createFlagsmithInstance } from 'flagsmith'
const FlagsmithBlock = ({ id }) => {
    const [lastUpdated, setLastUpdated] = useState(Date.now().valueOf())
    const flagsmith = useRef()
    const pusher = useRef()
    const channel = useRef()
    useEffect(()=>{
        flagsmith.current = createFlagsmithInstance()
        flagsmith.current.init({
            environmentID:"VmyxnCfVjyrrRZZTt8pD95",
            preventFetch:true,
            onChange: ()=>{
                setLastUpdated(Date.now().valueOf());
            }
        })
        pusher.current = new Pusher('7c73f13d1816f4f40cce', {
            cluster: 'eu'
        });

        channel.current = pusher.current.subscribe('my-channel');
        channel.current.bind('my-event', function(data) {
            alert(JSON.stringify(data));
        });
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
