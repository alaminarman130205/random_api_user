const LoadData = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = (randPerson) =>{
    const userContainer = document.getElementById('userContainer'); 
    userContainer.innerHTML = `
        <div class="row z-depth-3">
        <div class="col-sm-4 bg-info rounded-left">
            <div class="card-block text-center text-white">
                <i class="fas fa-user-tie fa-7x mt-5"></i>
                <h2 class="font-weight-bold mt-4">${randPerson.name.first}</h2>
                <p>web designer</p>
                <i class="far fa-edit fa-2x mb-4"></i>
            </div>
        </div>
        <div class="col-sm-8 bg-white rounded-bottom">
            <h3 class="mt-3 text-center">information</h3>
            <hr class="badge-primary mt-0 w-25">
            <div class="row">
                <div class="col-sm-6">
                    <p class="font-weight-bold">Email:</p>
                    <h6 class="text-muted overflow-hidden">${randPerson.email}</h6>
                </div>
                <div class="col-sm-6">
                    <p class="font-weight-bold">Phone:</p>
                    <h6 class="text-muted">${randPerson.phone}</h6>
                </div>

            </div>
            <h4 class="mt-3">projects</h4>
            <hr class="bg-primary">
            <div class="row">
                <div class="col-sm-6">
                    <p class="font-weight-bold">Age:</p>
                    <h6 class="text-muted">${randPerson.dob.age}</h6>
                </div>
                <div class="col-sm-6">
                    <p class="font-weight-bold">Time-Zone:</p>
                    <h6 class="text-muted">${randPerson.location.city}</h6>
                </div>

            </div>
            <hr class="bg-primary">
            <ul class="list-unstyled d-flex justify-content-center">
                <li> <a href="#"><i class="fab fa-facebook px-3 h4 text-info"></i> </a> </li>
                <li> <a href="#"><i class="fab fa-youtube px-3 h4 text-info"></i> </a> </li>
                <li> <a href="#"><i class="fab fa-twitter px-3 h4 text-info"></i> </a> </li>
            </ul>
        </div>
    </div>
    `


}