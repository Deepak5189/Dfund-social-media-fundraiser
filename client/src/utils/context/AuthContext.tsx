import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  user: User | null;
  login: (loginData: LoginData) => void;
  register: (registerData: RegisterData)=>void;
  logOut: () => string;
};

interface User{
  username:string;
  email:string;
  userId:string;
  profile:string;
  isAuthenticated:boolean;
};

interface LoginData{
  email:string;
  password:string;
};

interface RegisterData{
  email:string;
  username:string;
  password:string;
  confirmPassword:string;
};

const AuthContext=createContext<AuthContextType | undefined>(undefined);

export const useAuth=()=>{
  const context=useContext(AuthContext);
  if(!context){
    throw new Error('useAuth must be used withinan AuthProvider');
  }

  return context;
};

export const AuthProvider=({children}:{children:ReactNode})=>{

  const initUser: User={
    username:'',
    email:'',
    userId:'',
    profile:'',
    isAuthenticated:false,
  }
  const [user, SetUser]=useState<User>(initUser)

  const login= async (loginData:LoginData)=>{
    const response=await fetch('',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(loginData),
    });
    const data=await response.json();
    const {username,email,userId,profile}=data;
    SetUser({username, email, userId, profile, isAuthenticated: true});
    return "User logged in successfully!!!!!!!!"
  }

  const register= async (registerData:RegisterData)=>{
    await fetch('',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(registerData),
    });
    return "user created successfully!!!!!!!"
  }

  const logOut= ()=>{
    SetUser(initUser);

    return "user logged out successfully!!!!!!!"
  }

  return(
    <AuthContext.Provider value={{user, login, register, logOut}}>
      {children}
    </AuthContext.Provider>
  )

}