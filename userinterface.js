class UserInterface {
    
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2 img-thumbnail"  src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-1">
                            View Profile
                        </a>
                    </div>
                    <div class="col-md-9">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos} </span>
                            <span class="badge badge-success">Public Gists: ${user.public_gists} </span>
                            <span class="badge badge-warning">Followers: ${user.followers} </span>
                            <span class="badge badge-danger">Following: ${user.following} </span>
                            <br><br>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company} <li>
                                <li class="list-group-item">WebSite: ${user.blog} <li>
                                <li class="list-group-item">Location: ${user.location} <li>
                                <li class="list-group-item">Member Since: ${user.created_at} <li>
                            </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // show alert message if user is not found
    showAlert(message, className) {
        // Clear alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class to div
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert above search input
        container.insertBefore(div, search);

        // Timeout after 2 sec
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
    // remove profile
    removeProfile() {
        this.profile.innerHTML= '';
    }
}