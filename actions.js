

function pair()
{
    if(tour / 2 == true)
    {
        return true; 
    }
    
    else
    {
        return false;
    } 
}

function caseOccuper(button)
{
    return button.innerHTML.length == 1;
}

$(".selection").click(execute);
  var joueur1 = [];
  var joueur2 = [];
  var tour = 1;
  var taille = $("#game");

  function execute(event)
  {
    for (var i=0; i<taille.length; i++)
    {
        
        if (tour == 0 || tour == 2 || tour == 4 || tour == 6 || tour == 8 || tour == 10) 
        {
            $("button").html(event.target.id);
            joueur1.push(event.target.id);
            gainJoueur1();
            

            $(".selection").empty();

            if (caseOccuper(this))
            {
            return;
            }

            event.target.id = this;
            $(this).html("X");
        
            
        }


        else
        {
            $("button").html(event.target.id);
            joueur2.push(event.target.id);
            gainJoueur2();

            $(".selection").empty();
        
            if (caseOccuper(this))
            {
            return;
            }

        event.target.id = this;
        $(this).append("0");
        }
        
    tour = tour + 1;  
  }
  

  console.log(joueur1);
  console.log(joueur2);
} 

var compteur = 1;

function gainJoueur1()
{
    for (var i = 0; i < joueur1.length; i++) 
    {
        if(joueur1[i] == 1)
        {
           $("#result").html("Joueur 1 a gagné");
           $(".compteur").html(compteur);
        }
        
       
    }
    compteur = compteur + 1;
}

var compteur2 = 1;

function gainJoueur2()
{
    for (var i = 0; i < joueur1.length; i++) 
    {
        if(joueur2[i] == 3 || joueur2[i] == 2)
        {
           $("#result").html("Joueur 2 a gagné");
           $(".compteur2").html(compteur2);
        }
        
    }
    compteur2 = compteur2 + 1;
}

$(".partie").click(nouvellePartie);
function nouvellePartie()
{
    $(".selection").empty();
}