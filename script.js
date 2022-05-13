// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// // Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

const member = [
    {
        imagePerson: "img/wayne-barnett-founder-ceo.jpg",
        namePerson: " Wayne Barnett",
        work: "Founder & CEO"
    },
    {
        imagePerson: "img/angela-caroll-chief-editor.jpg",
        namePerson: " Anegla Caroll",
        work: "Chef editor"
    },
    {
        imagePerson: "img/angela-lopez-social-media-manager.jpg",
        namePerson: " Wayne Barnett",
        work: "Founder & CEO"
    },
    {
        imagePerson: "img/barbara-ramos-graphic-designer.jpg",
        namePerson: " Wayne Barnett",
        work: "Founder & CEO"
    },
    {
        imagePerson: src="img/new-team-member-02.jpg",
        namePerson: " Wayne Barnett",
        work: "Founder & CEO"
    },
    {
        imagePerson: "img/scott-estrada-developer.jpg",
        namePerson: " Wayne Barnett",
        work: "Founder & CEO"
    },

];

const teamContainer = document.querySelector(".team-container");

for (let i=0; i<member.length; i++){
    const worker = `
    <div class="team-card">
    <div class="card-image">
      <img
        src="${member[i].imagePerson}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${member[i].namePerson}</h3>
      <p>${member[i].work}</p>
    </div>
  </div>
</div>
</div> 
    `;

    teamContainer.innerHTML+=worker;
}