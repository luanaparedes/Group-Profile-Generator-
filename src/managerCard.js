//manager card html
function managerCard(manager) {
    return `<div class="card">
    <h1>${manager.name}</h1>
    <h2>${manager.getRole()}</h2>
     <div class="card-container">
         <div class="col-14">${manager.id}</div>
         <div class="col-14">${manager.email}</div>
         <div class="col-14">${manager.officeNumber}</div>
    </div>
 </div>`
}

module.exports = managerCard;