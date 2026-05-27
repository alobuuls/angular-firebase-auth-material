import { Injectable } from '@angular/core';
import { Auth, AuthProvider, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { inject } from '@angular/core'

export interface Credential {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);

  readonly authState$ = authState(this.auth);

  signUpWithEmailAndPassword(credential: Credential): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  loginWithEmailAndPassword(credential: Credential) {
    return signInWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  logOut(): Promise<void> {
    return this.auth.signOut()

  }

  signInWithGoogleProvider(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return this.callPopUp(provider);
  }

  signInWithGithubProvider(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider();
  return this.callPopUp(provider);
  }

  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch(err:any) {
      return err;
    }
  }
}

