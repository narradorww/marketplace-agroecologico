import React, {useState} from 'react';
import styled from 'styled-components';
import Dock from 'react-dock'
import Produto from '../produto/lista/'




const Sidebar =()=>{
    const [opened, setOpened] = useState(false)

    return(


    <Dock
        isVisible={opened}
        onVisibleChange={(visible)=>{setOpened(visible)}}
        position="right"
        >

    <div className="container-fluid h-100 pt-4 sidebar">
        <h5> Minha Cesta (5)</h5>

      
        <div className="row products">
                      {[1,2,3,4,5,6,7,8,9].map((p) =>(<Produto/>))}
        </div>
        
        
        
    </div>

        
    


    </Dock>

    )


}


export default Sidebar;