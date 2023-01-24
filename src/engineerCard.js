//engineer card html
function engineerCard(engineer) {
    return `<div class="card">
    <h1>${engineer.name}</h1>
    <h2>${engineer.getRole()}</h2>
     <div class="card-container">
         <div class="col-14">${engineer.id}</div>
         <div class="col-14">${engineer.email}</div>
         <div class="col-14">${engineer.github}</div>
    </div>
 </div>`
}

module.exports = engineerCard;