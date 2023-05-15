##OTP Verification [Backend Development]:

#OTP VERIFICATION : DONE

#Steps :-

#APP.js,index.js,firebase.js :-

            1. Node JS installation.

            2. Installation of the Node Package Manager

            3. Creation of otp-app-demo

            4. Change the directory of otp-app-demo from C to D. [Scripting is not allowed in the C directory.]

            5. Firebase Creation.

            6. npm install firebase in the terminal.

            7. Firebase Authentication.

            8. Functions: A) Recaptcha is invisible; B) delivery of a verification code to the user's phone; and 
C) entering the verification code into the user's account.

            To run code: A) npm will start, and B) npm will connect to localhost 3000. C) Enter Mobile Number [Submit] ---> Enter Received OTP ---> Validate OTP.

            #Error Occurred: Firebase is not sending an OTP to the mobile number. Solution: If you have added your phone number in testing under Firebase (Sign-                                             in method->Phones), you should be fine. then please remove it from there to get an OTP.

            Stackoverflow:-https://stackoverflow.com/questions/740626firebase-is-not-sending-otp-to-the-mobile-number

#MONGODB CONNECTION : ANANYMOUS ERROR OCCURED!
#MongoDB(main.js):-

            1. Install Mongodb

            2. npm i  mongoose

            #Errors that occurred: A) Mongo was unable to connect                                                     

                                   mongoose.connect("mongodb://localhost:27017/", {maxPoolSize: 50,wtimeoutMS: 2500, useNewUrlParser:                                        true,seUnifiedTopology: true}

                                  solution: mongoose.connect("mongodb://localhost:27017/",


                                  B)connect ECONNREFUSED 127.0.0.1:27017

                                   Solution: MongoDB service isn't started. Follow the below steps to start it:
                                                            
                                              1.Open the Control Panel and navigate to Administrative Tools.

                                              2.Double click on Services. A new window opens up.

                                              3.Search MongoDB.exe. Right-click on it and select Start.

                                                Stackoverflow:-https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017    

            #Error not able to resolve:-
                            [ C:\\\\Program Files\\\\MongoDB\\\\Server\\\\6.0\\\\data\\mongod.lock (The process cannot access the file because it is being used by another process.). Ensure      the user executing mongod is the owner of the lock file and has the appropriate permissions. Also make sure that another mongod instance is not alreadyrunning on the C:\\\\Program Files\\\\MongoDB\\\\Server\\\\6.0\\\\data directory"}}
                            {"t":{"$date":"2023-05-15T01:55:39.119+05:30"},"s":"I",  "c":"REPL",     "id":4784900, "ctx":"initandlisten","msg":"Stepping down the ReplicationCoordinator for                 shutdown","attr":{"waitTimeMillis":15000}}]
            
              #Solutions Tried:-
                            1. Add the mongodb/service/bin directory to the Administration environment.
                            2. Change version of mongoose to stable version 6. 
                                    



 
##Link that contains the output screenshot and mongodb error:-
    https://docs.google.com/document/d/1czp9V5NJYBilaw2uXBxVlq2xwdlOVtVI_YGdXtxGwWU/edit?usp=sharing
     

 
