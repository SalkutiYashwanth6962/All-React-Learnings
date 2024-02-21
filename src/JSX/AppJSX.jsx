import React from "react";
import Counter from "../UseState/Counter";
import ParentProp from "../Props/ParentProp";

const AppJSX =()=>{
    
    // return <div>
    //     <h1>I am the heading tag</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit consectetur natus? Minima, aut illo. Voluptatibus, blanditiis. Eum nobis, ipsum consequuntur, illum atque veniam laudantium temporibus quibusdam voluptates inventore velit!</p>
    // </div>
//      return( 
//      <article>
//      <h1>I am the heading tag</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit consectetur natus? Minima, aut illo. Voluptatibus, blanditiis. Eum nobis, ipsum consequuntur, illum atque veniam laudantium temporibus quibusdam voluptates inventore velit!</p>
//      </article>
//  )

//-------------------------------------------------------------------------------
    //Fragment related topic = two ways =>1.<></> 2.<React.Fragment></React.Fragment>
    //to avoid creating extra node we will use fragment
    

    
    //   return(
    //   <>
    //   <h1>Javascript and Xml</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus eligendi voluptate ipsam nam nihil eveniet aut eius reiciendis sunt quaerat, facilis illum rem quia magnam molestiae accusamus ipsa? Reiciendis!
    //   </p>
    //   <h1>React</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni neque dignissimos debitis veritatis animi maxime dolor a repellendus! Nihil, quo! Harum, est at a reprehenderit incidunt commodi quod suscipit ratione!</p>
    //   </>
    //   )

    // return(
    //     <React.Fragment>
    //     <h1>Javascript and Xml</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus eligendi voluptate ipsam nam nihil eveniet aut eius reiciendis sunt quaerat, facilis illum rem quia magnam molestiae accusamus ipsa? Reiciendis!
    //     </p>
    //     <h1>React</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni neque dignissimos debitis veritatis animi maxime dolor a repellendus! Nihil, quo! Harum, est at a reprehenderit incidunt commodi quod suscipit ratione!</p>
    //     </React.Fragment>
    //     )


    //!Expression
    // let a=10;
    // let b=20;

    // return(
    //     <>
    //     <p>{a}</p>
    //     <p>{a+b}</p>
    //     </>
    // )

    //!NOTE
//imr imrd
//rafce rcce
    // return(
    //     //if we specify class it cofuses
    //     <Counter>
        
    //     <div className="hello" >Some Rules</div>
    
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" />
        
    //     </>
    // )
    
    return(
        // <Counter/>
        <ParentProp/>
    )
      
}



export default AppJSX;








