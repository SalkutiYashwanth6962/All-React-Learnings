// import React from 'react'
// import ReactDOM from "react-dom";


// const Portals = () => {
//     //ReactDOM.createPortal()
//   return (
   
//    ReactDOM.createPortal(<h1>this is done through portal</h1>,document.getElementById("portal"))
   
//   )
// }

// export default Portals

import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import PortalTask from './PortalTask'
import "./PortalTask.css"

const Portals = () => {
    
    let[state,setState]=useState(false)
    let handleState=()=>{
        setState(!state)
    }
  return (
    
    
   createPortal(<>
   <center> <button onClick={handleState} id='btn'>Show</button></center>
  
    {
        state?<PortalTask fun={handleState}/>:null
    }
   <div id="parentContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus consectetur inventore possimus neque adipisci commodi. Cumque laboriosam id vero nihil sint nesciunt non? Ad enim similique quae, nihil, accusantium obcaecati, ducimus unde sequi vel molestias corrupti architecto repellendus accusamus eaque quis quia velit illo esse ea sapiente doloribus sit aperiam quos numquam? Cumque molestiae aperiam quas fugit. Magni ex error debitis deleniti vero vel quae unde cumque minima fuga neque voluptatum ad possimus, cum beatae quod optio, quis eveniet! Vitae ullam tempora, aperiam voluptas corrupti officiis dignissimos odit, ducimus distinctio inventore quo laudantium dolorem dolor quos exercitationem eligendi dicta beatae! Accusamus recusandae, minus aut numquam culpa labore dolorem reiciendis ipsa. Laborum autem nobis temporibus dicta perferendis placeat aperiam expedita hic culpa voluptas suscipit, pariatur obcaecati quaerat vitae, nostrum perspiciatis, ab repellat delectus. Earum veniam nam alias molestias voluptate accusamus maiores ut fugiat hic dicta blanditiis autem quod unde delectus, nostrum fuga ipsam rem obcaecati ipsa cum numquam? Quis veritatis nostrum id autem doloremque. Ad cumque quae reprehenderit exercitationem! Rerum ipsum ab praesentium expedita. Doloremque repudiandae rem eius tenetur sed ad dolor possimus praesentium eaque cumque, cum fuga velit et ullam voluptas in distinctio? Culpa ea similique asperiores officia ipsam in facilis, aperiam debitis fuga, repellat iste quis corporis hic ad earum est sint eveniet reprehenderit placeat sit et natus quo eius? Vitae rerum reiciendis libero consectetur dignissimos aspernatur cum necessitatibus non! Accusamus nemo reiciendis eveniet ex tempore labore necessitatibus fugit quas, quasi eos consequuntur, neque dolorem nobis ad ut enim architecto et laudantium sunt maiores aspernatur? Atque aliquid architecto porro in totam officia assumenda aperiam quam rerum eaque repellat at numquam, nisi quos nam possimus itaque harum consequuntur. Hic beatae, impedit autem non quis ipsam illo eius molestiae aspernatur odit voluptates enim fuga? Nostrum incidunt eius laboriosam dolores sit ex distinctio at architecto, aperiam laudantium itaque, fuga illo tempore consectetur odio magni veniam quae est ut? Vel id laudantium minus nihil sit veritatis voluptate possimus debitis voluptatum ad, enim facilis deserunt nobis qui optio non. Architecto sint minus inventore, quis quae porro eveniet molestias, neque earum aperiam, aut tenetur excepturi sit dolorem officia molestiae fuga quasi? Eveniet ducimus dolorem fugiat veritatis deserunt iure, qui temporibus, sint a sequi fuga. Quis, unde quasi expedita consequuntur velit quas excepturi aliquid non officiis doloribus reprehenderit facilis ad, deleniti rerum sit! Iste libero eaque, et pariatur tempore, sit cumque unde eum quia, explicabo labore adipisci. Repellendus eius molestias ad, voluptatibus exercitationem vero incidunt quos voluptatem. Quasi sit libero accusamus at modi architecto, dignissimos reprehenderit asperiores explicabo in dicta! Veniam pariatur est, alias laboriosam similique enim cum repudiandae tenetur praesentium dolores repellendus, non repellat adipisci, nesciunt numquam doloremque a quas tempore vel dolorem ipsum itaque accusantium? Neque odit maxime quod illo possimus incidunt excepturi exercitationem totam perspiciatis obcaecati nisi quam dolore blanditiis sapiente recusandae vel tempora, porro quae unde fugit repudiandae ipsa. Et, rerum facere! Aliquam fugit debitis in accusamus rerum aspernatur, dicta rem! Ut a dolorem deleniti rerum quaerat quia quidem dolores iusto et non dolor nisi, beatae dolorum vitae quibusdam aliquid esse! Accusamus accusantium voluptate ratione officiis consequuntur nulla, rerum omnis, dolores rem et placeat, itaque ullam voluptatibus quia aut tempore dolor blanditiis a eaque. Nam modi sequi sed ut culpa inventore consequuntur facilis saepe animi earum quasi quam illo iste possimus natus autem, minus nihil architecto commodi fugit odit iure expedita eos! Nihil dolorem optio quod? Tempore facilis vitae deserunt at, hic molestiae? Delectus dolorum, repellendus impedit earum voluptatum at mollitia corporis inventore sunt perspiciatis iure, debitis repudiandae quo maxime, incidunt assumenda maiores exercitationem reprehenderit minus consequuntur sequi eligendi molestiae vero. Quis ipsa quaerat incidunt quos voluptas deserunt odit illo impedit placeat exercitationem voluptatem tempora, blanditiis saepe. Quidem exercitationem minus tempora in doloremque ad at nesciunt quisquam laborum deleniti tempore eos officiis tenetur nulla omnis rerum, quasi hic atque vitae libero quaerat odit alias aliquam est? Quae velit laboriosam eum iusto repudiandae, cumque iure delectus soluta. Velit aperiam, quae commodi hic expedita ad tempore. Temporibus aut distinctio saepe suscipit id iusto veniam quo explicabo soluta quam quidem omnis maiores sed maxime, vero possimus voluptate, fuga quibusdam odio deleniti? Quisquam illum exercitationem esse porro architecto quae facilis perferendis, repellendus tempore ut assumenda aperiam itaque dolore in nemo placeat facere error sint, fuga pariatur qui natus labore laborum. Temporibus quidem consectetur accusamus sapiente. Et dolores eligendi nobis voluptatem eaque quia praesentium modi ea quaerat. Ex repudiandae quod aut, vero ad libero suscipit sit, illum tempora quibusdam consequuntur hic deleniti repellendus rerum! Saepe consectetur voluptas obcaecati vero, ea eveniet repellat possimus odio excepturi velit itaque facilis nostrum autem delectus blanditiis ratione doloremque non eum minima ad! Obcaecati ipsam adipisci doloribus quam animi vero et, eos ullam a expedita velit maiores magni iusto. Quas excepturi amet corrupti culpa soluta id nobis eveniet. Veniam, mollitia perspiciatis, alias quod veritatis harum consequuntur dolores ut perferendis optio id. Similique impedit repellat officiis laboriosam provident maiores itaque aperiam mollitia dicta fuga tempore laudantium ratione, eos quam magni voluptate laborum voluptates enim dolore magnam corrupti quas ad? A iure deleniti eos exercitationem nesciunt modi libero quos, reiciendis autem sequi consectetur esse ipsum officia sint eum, reprehenderit non perferendis ullam neque quidem totam rerum magnam vero! Mollitia itaque facilis eius eligendi architecto, excepturi ratione officiis veritatis omnis corrupti, nesciunt ducimus cupiditate provident odio iste aliquam praesentium recusandae incidunt facere, repellendus natus. Modi eum rem nobis a mollitia, similique odio, necessitatibus explicabo assumenda obcaecati laudantium! Ea iusto itaque eum, minima quia doloremque provident in, veritatis voluptatibus explicabo asperiores quod fugit ullam sapiente officiis laboriosam. Totam, fugit aperiam. Modi ullam aliquam, officiis expedita voluptates, dolor ipsa fugiat sint rem cumque, voluptatem excepturi. Consequuntur, impedit quidem! Vel quasi eos assumenda fugit dolor error quo, repellendus fugiat at maiores aliquam atque numquam laborum, nihil, nemo officia dicta possimus doloribus autem cum culpa. Illum quasi voluptas, possimus molestias aut aperiam ipsum, molestiae officia amet assumenda qui veritatis reprehenderit, distinctio exercitationem non est atque repudiandae. Quibusdam nam necessitatibus assumenda reprehenderit iure architecto. Sit maiores dicta consequatur qui.
   </div>
   </>,
   
   document.getElementById("portal"))
  
  )
 
}

export default Portals