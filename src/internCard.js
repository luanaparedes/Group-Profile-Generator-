//intern card html
function internCard(intern) {
    return `<div class="card">
    <h1>${intern.name}</h1>
    <h2>${intern.getRole()}</h2>
     <div class="card-container">
         <div class="col-14">${intern.id}</div>
         <div class="col-14">${intern.email}</div>
         <div class="col-14">${intern.school}</div>
    </div>
 </div>`
}

module.exports = internCard;