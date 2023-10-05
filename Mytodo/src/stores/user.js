import { defineStore } from 'pinia'
import { 
  loginUser, 
  logoutUser,
  registerUser,
  updateUserProfile,
  

} from '../services/userAuth';



const userModel = {
    firstName: 'Neha',
    lastName: 'Patel',
    role: ['Admin'], // User, Anonymous
    occupation: 'Web Designer',
    langauge: 'en-ca',
    timeZone: 'MST',
    isAuthenticated: true,
    email: 'nehavpatel81@gmail.com',
};

export const useUserStore = defineStore('user', {
  state() {
    return {
        user: null,
    }
  },
  getters: {
    isAuthenticated() {
      console.log(this.user);

      if(!this.user) {
        return false;
      }
      return this.user.id.length > 0;
    },
    fullName() {
      if(this.user) {
        return `${this.user.firstName} ${this.user.lastName}`;
      } else {
        return 'Anonymous';
      }
    },
    occupation() {
      if(this.user) {
        return `${this.user.occupation}`;
      } else {
        return '';
      }
    }
  },
  actions: {
    async login(email, password) {
       const user = await loginUser(email, password);
     
        if(user != null){
          this.user = {
            id: user.uid, 
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL
           };
          return true;
        } else {
          this.user = null;
          return false;
        }
      //  if(email && password) {
      //   if(email == 'nehavpatel81@gmail.com' && password =='password') {
      //     this.user = userModel;
      //     return true;
      //   } else {
      //     this.user = null;
      //     return false;
      //   }
      // }  else {
      //   this.user = null;
      //   return false;
      // }
    },
    async logoutUser() {
      await logoutUser();
        this.user = null;
    },
    async register(user) {
     let registedUser =  await registerUser(user.email , user.password);
      
     if(registedUser) {
         await updateUserProfile(user);
      }
    }
  },
});
