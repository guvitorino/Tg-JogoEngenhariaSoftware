$(document).ready(function(){
  $("#formcod").submit(function(){
    return false; 
  });

   $("#btnenvcod").click(function(){
   	var cod = document.getElementById("txtcod").value;
    carregaCombo(cod);
    alert("Selecione um aluno para visualizar as informações da partida!")
  });
});