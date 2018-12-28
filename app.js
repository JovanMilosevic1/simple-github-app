// github instance
const github = new GitHub;
// UserInteface instance
const userI = new UserInterface;
// search
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        //  http call
        github.getUser(userText)
            .then(data => {

                if(data.profile.message === 'Not Found'){
                //show alert
                    userI.showAlert('User not found', 'alert alert-danger');
                }
                else{
                    // show profile
                    userI.showProfile(data.profile);
                }
            }
            );
    }
    else {
        // remove profile
        userI.removeProfile();
    }
})

