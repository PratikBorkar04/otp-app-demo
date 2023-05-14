import React from 'react'
import firebase from './firebase'

class App extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }// Reacptcha function 
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recapcha verified")
      },
      defaultCountry: "IN"
    });
  }// send otp to mobile number
  onSignInSubmit = async (e) => {
    e.preventDefault()
    this.configureCaptcha()

    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(phoneNumber);

          console.log(confirmationResult);
          console.log("OTP has been sent");
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent");
        });
  }
  // confirmation of otp
  onSubmitOTP = (e) =>{
    e.preventDefault()//code = OTP
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }// web page for authentication
  render() {
    return (
      <div>
        <h1>OTP Verification</h1>
        <h2>Mobile Number</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>  
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="Submit">Submit</button>
        </form>

        <h2>OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="Verify">Submit</button>
        </form>
      </div>
    )
  }
}
export default App