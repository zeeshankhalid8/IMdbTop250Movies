import Page from './page'

class signIn extends Page {

    /**
    * define elements
    */

    get signInButton ()     { 
        return $("//*[@id=\"imdbHeader\"]/div[2]/div[5]/a"); 
    }
    
    get SignInWithGoogle ()     { 
        return $("span[class='auth-provider-text']"); 
    }

    get emailField ()     { 
        return $("input[class='a-input-text a-span12 auth-autofocus auth-required-field']"); // a-input-text a-span12 auth-autofocus auth-required-field
    }
  
    get passwordField ()     { 
        return $("input[class='a-input-text a-span12 auth-required-field']"); // a-input-text a-span12 auth-required-field
    }

    get submitButton ()     { 
        return $("input[class='a-button-input']"); 
    }
  
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/')       //this will append `/chart/top?ref_=nv_mv_250_6.` to the baseUrl to make complete URL
    }

    clickSignInButton() {
        return this.signInButton.click();
    }

    clickSigInWithGoogleButton() {
        return this.SignInWithGoogle.click();
    }

    enterEmail() {
        return this.emailField.setValue("imdb250toprated@gmail.com");
    }

    enterPassword() {
        return this.passwordField.setValue("Test11@@");
    }

    clickSubmitButton() {
        return this.submitButton.click();
    }

}export default new signIn()