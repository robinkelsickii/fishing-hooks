# Fishing-Hooks 
### User Authentication, Sign Up, Sign Out, and Dashboard
#### Components
    - Sign Up: User puts in information about themselves such as Title(drop down menu), First Name, Last Name, Email Address, Password, confirm password(or give ability to see password), Address(street,city,zip code) as an input field.
    - User Authentication: Email Address and Password as input fields with login button and forgot password link sign in using facebook, twitter, or google. 
    - Sign out page: Tells the user that they have been signed out. 
    - Dashboard: displays user info. Allows the user to change their info, logout button, delete account button. 

### Sign Up Page
- set all expected inputs (first name, last name, email, and password) as state using a hook.
    * const [input, setInput] = useState("")
