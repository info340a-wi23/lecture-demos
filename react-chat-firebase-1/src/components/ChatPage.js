import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

  const urlParamObj = useParams(); //get me the url parameters

  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]

  const currentUser = props.currentUser;
  const currentChannel = urlParamObj.channelName; //get channel name from url params


  const addMessage = (messageText) => {
    const userObj = currentUser;
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": currentChannel
    } 

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }


  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channels={channelList} currentChannel={currentChannel} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
        <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
      </div>
    </div>
  )



}

// //Slide 16
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref} from 'firebase/database'; //realtime database
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';
// import CHAT_HISTORY from '../data/chat_log.json';
// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = ['general','random','dank-memes','channel-4','pet-pictures']

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render

//     //play with firebase database
//     console.log("databasing");
//     const db = getDatabase();
//     const messageRef = ref(db, "exampleMessage");
//     console.log(messageRef);

//     const profLastNameRef = ref(db,"professor/lastName");
//   }

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )
// }

// //Slide 19 , then 20 - Wrting single message String to FB, then a whole message
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet} from 'firebase/database'; //realtime database
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';
// import CHAT_HISTORY from '../data/chat_log.json';
// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = ['general','random','dank-memes','channel-4','pet-pictures']

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render

//     //play with firebase database
//     const db = getDatabase();
//     const messageRef = ref(db, "exampleMessage");
//     const profLastNameRef = ref(db,"Professor/lastName");

//     firebaseSet(messageRef, "I am from React");
//     // firebaseSet(messageRef, newMessage);
//     // firebaseSet(profLastNameRef, "Mud")

//   }

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )
// }

// //Slide 24 - Adding listener for db changes
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database'; //realtime database
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';
// import CHAT_HISTORY from '../data/chat_log.json';
// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const urlParamObj = useParams(); //get me the url parameters
//   const channelList = ['general', 'random', 'dank-memes', 'channel-4', 'pet-pictures']
//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const messageRef = ref(db,"exampleMessage");
//   //run this function when the chat pane first loads
//   useEffect(() => {
//     //addEventListener("database value change")
//     onValue(messageRef, (snapshot) =>{
//       const newValue = snapshot.val();
//       console.log("firebase value changed")
//       console.log(snapshot);
//       console.log("new value",newValue)
//     })
//   }, [])


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     }

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render

//     //play with firebase database
//     const db = getDatabase();
//     const messageRef = ref(db, "exampleMessage");
//     const profLastNameRef = ref(db, "professor/lastName");

//     // firebaseSet(messageRef, "I am from React");
//     firebaseSet(messageRef, newMessage);

//   }

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )
// }

// //Slide 25 - Adding listener, and change source to be firebase message
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database'; //realtime database
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';
// import CHAT_HISTORY from '../data/chat_log.json';
// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState([]);
//   const urlParamObj = useParams(); //get me the url parameters
//   const channelList = ['general', 'random', 'dank-memes', 'channel-4', 'pet-pictures']
//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const messageRef = ref(db,"exampleMessage");
//   //run this function when the chat pane first loads
//   useEffect(() => {
//     //addEventListener("database value change")
//     onValue(messageRef, (snapshot) =>{
//       const exampleMessage = snapshot.val();
//       setChatMessages([exampleMessage])

//     })
//   }, [])


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     }

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render

//     //play with firebase database
//     const db = getDatabase();
//     const messageRef = ref(db, "exampleMessage");
//     const profLastNameRef = ref(db, "professor/lastName");

//     // firebaseSet(messageRef, "I am from React");
//     firebaseSet(messageRef, newMessage);

//   }

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )
// }

// //Slide 29 - Adding listener for db changes and remove listener when unloading
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import {
//   getDatabase, ref, set as firebaseSet,
//   onValue, push as firebasePush
// } from 'firebase/database'; //realtime database

// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';
// import CHAT_HISTORY from '../data/chat_log.json';
// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState([]);
//   const urlParamObj = useParams(); //get me the url parameters
//   const channelList = ['general', 'random', 'dank-memes', 'channel-4', 'pet-pictures']
//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const allMessageRef = ref(db, "allMessages");
//   //run this function when the chat pane first loads
//   useEffect(() => {

//     const offFunction = onValue(allMessageRef, (snapshot) => {
//       const valueObj = snapshot.val();

//       const objKeys = Object.keys(valueObj);
      
//       const allMessageArray = objKeys.map((keyString) => {
//         const theMessageObj = valueObj[keyString];
//         theMessageObj.key = keyString;
//         return theMessageObj;
//       })

//       console.log(allMessageArray);
//       setChatMessages(allMessageArray);

//     })
//     function cleanup() {
//       console.log("Component is being removed");
//       console.log("turn out the lights");
//       offFunction();
//     }
//     return cleanup;
//   }, [])


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     }

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render

//     //play with firebase database
//     const db = getDatabase();
//     const messageRef = ref(db, "exampleMessage");
//     const profLastNameRef = ref(db, "professor/lastName");

//     const allMessagesRef = ref(db, "allMessages")
//     firebasePush(allMessagesRef, newMessage);

//   }

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )
// }