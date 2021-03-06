import { REACT_APP_API_KEY, 
         REACT_APP_AUTH_DOMAIN, 
         REACT_APP_DATABASE_URL, 
         REACT_APP_STORAGE_BUCKET,
         REACT_APP_MESSAGING_SENDER_ID } from 'react-native-dotenv'

import * as firebase from 'firebase';


const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This will extract them into an array
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

export { firebase };
export { firebaseListToArray };
