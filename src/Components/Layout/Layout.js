import React from 'react';
import Auux from '../../hoc/Auux';
import classes from './Layout.css';
const layout = (props)=> {
       return(
           <Auux>
               <div className={classes.Toolbars}>Toolbar, SideDrawer, BackDrawer</div>
               <main className={classes.Content}>
               {props.children}
                </main>
           </Auux>
           );
}
export default layout;