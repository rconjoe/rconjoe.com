import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'

const app = admin.initializeApp()
const db = app.firestore()

export const submitContact = functions.https.onCall(async (data, context): Promise<void> => {

  const ref = db
    .collection('contacts')
    .doc()

  try {
    await ref.set({...data})
    return 
  } catch(err) {
    functions.logger.log(err)
  }

})