const github = new Github
const ui = new UI
// Search Input
const searchButton = document.querySelector('.searchButton')
// console.log(searchButton)
// const Input = document.querySelector('#searchUser')
// event for search
searchButton.addEventListener('click', (e) => {
    //Get input
    const userText = document.querySelector('#searchUser').value
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User not found','alert-danger')
                ui.clearProfile()
            }
            else{
                //Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
                ui.showAlert('User found!!!!','alert-success')
            }
        })
    }
    else{
        ui.clearProfile()
    }

})