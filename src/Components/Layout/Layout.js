import React from 'react';
import Auux from '../../hoc/Auux';

const layout = (props)=> {
       return(
           <Auux>
               <div>Toolbar, SideDrawer, BackDrawer</div>
               <main>
               {props.children}
                </main>
           </Auux>
           );
}
export default layout;