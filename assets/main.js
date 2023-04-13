const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

const pathImg = "./assets/img/";

const htmlCardContainer = document.querySelector('.row')

for (let i=0; i<team.length; i++){
    htmlCardContainer.innerHTML += `
    <div class="col-4 gy-5 d-flex justify-content-center">
        <div class="card">
        <img src="${pathImg}${team[i]['image']}" class="card-img-top" alt="${team[i]['name']}">
        <div class="card-body">
            <h5 class="card-title">${team[i]['name']}</h5>
            <p class="card-text">${team[i]['role']}</p>
        </div>
        </div>
    </div>`
}
