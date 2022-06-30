import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB8Z0lY9OrIOsEM5Av4i5AoDupH7QMhWdg',
  authDomain: 'bs-schedule-project.firebaseapp.com',
  projectId: 'bs-schedule-project',
  storageBucket: 'bs-schedule-project.appspot.com',
  messagingSenderId: '340288449298',
  appId: '1:340288449298:web:4a5f8df2b58273f40d21cb',
  measurementId: 'G-9P53HW684T',
}

const app = initializeApp(firebaseConfig)

const firebase = {
  auth: getAuth(app),
}

firebase.auth.useDeviceLanguage()

export default firebase
