const container = document.querySelector('div.container');
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    
    const teamMemberCard = addElement('div', '', container);
    teamMemberCard.classList.add('card');
    addElement('p', `<img src = "img/${teamMembers[i].photo}">`, teamMemberCard);
    addElement('p', teamMembers[i].name, teamMemberCard);
    addElement('p', teamMembers[i].role, teamMemberCard);
    addElement('hr', '', container);
}


/* FUNCTIONS */

/**
 * This function creates an html element of the chosen type and class, with the chosen text, and adds it at the end of the selected container.
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, container) {
    type = document.createElement(type);
    type.innerHTML = innerText;
    container.append(type);
    return type;
}

/**
 * This function generates an image at the end of the chosen container.
 * @param {*} source The source of the image.
 * @param {*} container The container at the end of which the image will be generated.
 */
function imageGenerator(source, container) {
    const image = document.createElement('img');
        image.src = source;
        container.append(image);
}