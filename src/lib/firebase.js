import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export const signUp = async ({ email, password }) => {
    try {
        const auth = getAuth()
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return normalizeUser(user)
    } catch (error) {
        console.log("🚀 ~ file: firebase.js ~ line 11 ~ signUp ~ error", error.message)
        return null
    }
}

export const login = async ({ email, password }) => {
    try {
        const auth = getAuth()
        const user = await signInWithEmailAndPassword(auth, email, password)
        return normalizeUser(user);
    } catch (error) {
        console.log("🚀 ~ file: firebase.js ~ line 21 ~ login ~ error", error)
        return null

    }

}

const normalizeUser = ({ email, uid }) => {
    return {
        email, uid
    }
}