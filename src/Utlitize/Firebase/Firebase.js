// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDbiho5NKLkwY9udDQTf0JJ9banqxkU2P8",
	authDomain: "crown-clothes-4ae0b.firebaseapp.com",
	projectId: "crown-clothes-4ae0b",
	storageBucket: "crown-clothes-4ae0b.appspot.com",
	messagingSenderId: "202075508336",
	appId: "1:202075508336:web:1441b70508e612648e6eb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth and get a reference to the service
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthChangeListener = (callback) => {
	onAuthStateChanged(auth, callback);
};
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const AddCollectionAndDocument = async (collectionKey, objectToADD) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectToADD.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
};

export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return;
	const useDocRef = doc(db, "users", userAuth.uid);
	const userSnapShot = await getDoc(useDocRef);
	if (!userSnapShot.exists()) {
		const { displayName, email, uid } = userAuth;
		const createDate = new Date();
		try {
			await setDoc(
				useDocRef,
				{
					displayName,
					email,
					uid,
					createDate,
				},
				{ merge: true },
			);
		} catch (error) {}
	}
	return useDocRef;
};

export const getCatagoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const query1 = query(collectionRef);
	const querySnapshot = await getDocs(query1);
	const categoriesMap = querySnapshot.docs.reduce((acc, CurrentSnapShot) => {
		const { title, items } = CurrentSnapShot.data();
		acc[title.toLowerCase()] = items; //{[title]:[]}
		return acc;
	}, {});
	return categoriesMap;
};
