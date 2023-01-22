import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const signUp = async (emailId, pwd, name, photoUrl) => {
    const user = await createUserWithEmailAndPassword(auth, emailId, pwd);
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
    });
}