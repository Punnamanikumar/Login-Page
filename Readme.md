For Login Functionality Application will have two flows: Sigin Up and Login
if the user is new to the website he will Register by using Signup Button.
in this signup page the user will give all the details like email,password,mobile num etc...
all the data we are getting from the FrontEnd will be can be stored in the Database.
and the password will not be stored in the Database since it is a Confidential We have to Encrypt/Hash the password by using the bcrypt.
bcrypt it is an npm library used to hash the password.
When any user Logins by giving email and password
then we will receive the email and password in the request body of the API.
By using that email we will create a token and assigin it to the user.
If the user is calling any api call like /user ,/post then this token will be passed form FrontEnd then from backend
we will verify the token.
amd that token will be passed inside the Header section in Authorization Field as "Bearer token"
