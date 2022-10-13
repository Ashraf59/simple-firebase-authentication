/*
Amra akta firebase authentication kibabe banabo step by step nice dewa holo:
Step-1: App.js er bitore function er age const auth = getAuth likte hobe. then file ta import korte hobe import {} from 'firebase'.

Step-2: function er bitore return er age likte hobe   const provider = new GoogleAuthProvider(); and file import korte hobe (import {getAuth, GoogleAuthProvider} from 'firebase/auth')


Step-3: return er bitore nibo akta button : - <button>Google Sing In</button>
button er bitore akta event handler add kore dibo jeno button a click korle kono sign In popup show kore - <button onClick={handleGoogleSignIn}>Google Sing In</button>

Step-4: amra button er bitore boshanor jonno akta event handler return er age function er bitore event handler declare korbo - tarpor eventhandler er bitore signInWithPopup authentication and provider declare korte hobe.
tarpor then and catch dite hobe. nice akta exaple dewa holo. tik eitai dite hobe.


  const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })

      .catch(error => {
        console.error('error:', error);
      })
  }




*/