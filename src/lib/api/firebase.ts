import firebase, { User } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_APP_MEASUREMENT_ID,
}

class FirebaseAuthState {
  app: firebase.app.App
  auth: firebase.auth.Auth

  constructor() {
    if (firebase.apps.length === 0) {
      this.app = firebase.initializeApp(firebaseConfig, process.env.APP_NAME)
    } else {
      this.app = firebase.app(process.env.APP_NAME)
    }
    this.auth = firebase.auth(this.app)
  }

  async getUser() {
    return new Promise<User>((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user)
        } else {
          reject(new Error('auth failed.'))
        }
      })
    })
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      return this.auth.signInWithRedirect(provider)
    } catch (error) {
      console.error('login failed', error)
      return null
    }
  }

  async signOut() {
    await this.auth.signOut()
  }
}

const firebaseAuthState = new FirebaseAuthState()

export const logout = async () => firebaseAuthState.signOut()
export const loginWithGoogle = async () => firebaseAuthState.loginWithGoogle()
export const getUser = async () => firebaseAuthState.getUser()
