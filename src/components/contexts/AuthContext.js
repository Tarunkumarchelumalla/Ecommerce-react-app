import React, { useContext ,useState,useEffect} from 'react'
import {auth,firebasedata,ref2,onValue1,set1} from "../../firebase"





const AuthContext= React.createContext()

export  function useAuth() {
  return useContext(AuthContext)

   
}


export function AuthProvider({children}){

    const[currentuser,setCurrentUser] = useState()
  const database=firebasedata
  
  const ref=ref2;
  const onValue=onValue1;
  const set=set1;
    const[loading ,setLoading] = useState(true)
    function signout(){
       return auth.signOut();
    }
    function signup(email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }
    function Login(email,password){
        auth.signInWithEmailAndPassword(email,password)
    }
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>{
        
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

const value ={
    currentuser,
    database,
    ref,
    onValue,
    set,
    signup,
    signout,
    Login
}
return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}