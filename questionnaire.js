window.addEventListener("DOMContentLoaded" , (Event) => {
    const Temperature = document.getElementById('label1') ; 
    const Select = document.getElementById('select') ; 
    const Contact = document.getElementById('select2') ; 
    const Voyage = document.getElementById('select3') ;
    const Verifier = document.getElementById('button') ;
    const Toux = document.getElementById('toux') ;
    const Fatigue = document.getElementById('fatigue') ;
    const Mauxdetete = document.getElementById('maux de tete') ;
    

    //Verication des reponses
    let etat = '' ; 
    if (Temperature>= 37 && (Toux || Fatigue || Mauxdetete || Select === 'OUI' || Voyage==='OUI' || Contact==='OUI'  )){
        etat = 'positif' ; 
    } 


    

}) ; 