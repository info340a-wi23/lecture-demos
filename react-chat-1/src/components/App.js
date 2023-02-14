import React from 'react';
import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChannelList'
import { ChatPane } from './ChatPane';

// 
// function App(props) {
//   return (
//     <div>Hello App</div>
//   );
// }

// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//       <ChatPane/>
//     </div>
//   );
// }


// export default function App(props) {

//   return (
//     <div>

//       <HeaderBar />
//       <div className='row'>
//         <div className='col-2'>
//           <ChannelList />
//         </div>
//         <main className='col'>
//           <ChatPane />
//         </main>
//       </div>
//     </div>
//   )
// };


export default function App(props) {
  const currentChannel = 'general';

  return (
    <div className='d-flex flex-column'>

      <HeaderBar />
      <div className='row flex-grow-1'>
        <div className='col-3'>
          <ChannelList currentChannel={currentChannel} />
        </div>
        <div className='col-8'>
          <ChatPane currentChannel={currentChannel}/>
        </div>
      </div>
    </div>
  )
};
