import React, {useState} from "react";

import PackageContext  from "./Context"


const Provider = props =>{
    const [mission, Setmision] = useState({
        mname: "Go to USA",
        agent: '005',
        accept: "Not accepted"
    })

    return(
        <PackageContext.Provider
        value={{
            data: mission,
            isMissionAccepted:()=>{
                Setmision({...mission, accept: "Accepted"})
            }
        }}
        >
            {props.children}
        </PackageContext.Provider>
    )


}
export default Provider;