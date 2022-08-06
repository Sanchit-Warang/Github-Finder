class Github{
    constructor(){
        this.client_id = '2a38b977acb705be6f4f'
        this.client_secret = '29714ae554b36599c2e35c9def89c4214e3966bb'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort }client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return{
            profile,
            repos
        }
    }
}