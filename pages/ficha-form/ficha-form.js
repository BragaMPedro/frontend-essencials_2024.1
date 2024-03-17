function handleSubmit(e) {
   e.preventDefault();
   let formData = new FormData(e.currentTarget);

   let nome = formData.get("nome");
   let genero = formData.get("genero");
   let raca = formData.get("raca");
   let classe = formData.get("classe");
   let historia = formData.get("historia");

   console.log("Form", { nome, raca, classe, genero, historia });
}

function racaAleatoria() {
   let races = document.getElementById("raca");
   let racescount = 25;
   let racesArray = [];

   for (let i = 0; i < racescount; i++) {
      const el = races[i];
      racesArray.push(el.value);
   }

   let randomIndex = Math.floor(Math.random() * racesArray.length);

   selectValue("raca", racesArray[randomIndex]);
}

function classeAleatoria() {
   let classes = document.getElementById("classe");
   let classesArray = classes.textContent.match(/\S+/gm);
   let randomIndex = Math.floor(Math.random() * classesArray.length);

   selectValue("classe", classesArray[randomIndex]);
}

function selectValue(id, value) {
   let selectElement = document.getElementById(id);
   selectElement.value = value.toLowerCase()
}
