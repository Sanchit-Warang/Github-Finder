class UI {
    constructor() {
        this.profile = document.querySelector('.profile')
    }
    
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 bg-primary text-white" style="width :100%;">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-light">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">
                Company: ${user.company}
              </li>
              <li class="list-group-item">
                Website/Blog: ${user.blog}
              </li>
              <li class="list-group-item">
                Location: ${user.location}
              </li>
              <li class="list-group-item">
                Member Since: ${user.created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `
    }

    showAlert(message, className){
      //Clear any remaining alert
      this.clearAlert()
      //Create a div
      const div = document.createElement('div')
      //Add class
      div.className = `alert alert-dismissible ${className}`
      //Add button
      div.innerHTML = '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>'
      //append message
      div.appendChild(document.createTextNode(message))
      //get card search
      const container = document.querySelector('.searchContainer')
      //Get search div
      const search =document.querySelector('.search')
      //Insert alert
      container.insertBefore(div,search)
      //three sec timeout
      setTimeout(() => {
         this.clearAlert()
      },3000)
    }

    showRepos(repos){
      let output = ''
      
      repos.forEach(repo =>{
        output += `
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-light">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
        `
      })
      //Output repos
      document.querySelector('#repos').innerHTML = output
    }

    clearProfile(){
      this.profile.innerHTML = ''
    }


    clearAlert(){
      const cunrrentAlert = document.querySelector('.alert')

      if(cunrrentAlert){
        cunrrentAlert.remove()
      }
    }
}