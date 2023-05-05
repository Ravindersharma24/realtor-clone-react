import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { db } from '../firebase';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async()=>{
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // check for the user
      const docRef = doc(db,"users",user.uid);
      const docSnap = await getDoc(docRef);
      
      if(!docSnap.exists()){
        // adding user to db
        await setDoc(docRef,{
          name:user.displayName,
          email:user.email,
          timestamp: serverTimestamp()
        })
      }
      toast.success("Sign up was successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button
    onClick={onGoogleClick}
    type="button"
    className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
  >
    <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
    Continue with Google
  </button>
  )
}

export default OAuth