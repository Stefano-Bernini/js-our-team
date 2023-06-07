// milestone 0
const team = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg',
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg',
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-socila-media-manager.jpg',
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg',
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-deisgner.jpg',
    }

];

// milestone 1
for(let i=0; i<team.length; i++){
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
}

// milestone 2
const infos = document.getElementById('infos');

for(let i=0; i<team.length; i++){
    infos.innerHTML += team[i].name+'<br>';
    infos.innerHTML += team[i].role+'<br>';
    infos.innerHTML += team[i].image+'<br><br>';
}