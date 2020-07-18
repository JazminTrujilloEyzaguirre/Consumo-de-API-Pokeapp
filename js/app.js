$(document).ready(function(){
    //boton todos
    $(".btn-danger").prop('disabled', true);
    $('.btn-danger').click(function(){
        for(var i=101; i<=805; i++){
            $("#group2").append("<img id="+ i + " data-toggle=modal data-target=#exampleModal src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png>");
        };
        $(".btn-danger").prop('disabled', true);
        $('img').click(modal);
    });

    //boton primeros 100
    $('.btn-warning').click(function(){
        for(var i=1; i<=100; i++){
            $("#group1").append("<img id="+ i + " data-toggle=modal data-target=#exampleModal src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png>");
        };
        $(".btn-warning").prop('disabled', true);
        $(".btn-danger").prop('disabled', false);
        $('img').click(modal);
        $(".btn-danger").addClass("d-block");
    });
    
    let modal = function modal(){
        let ide = $(this).attr("id");
        let imagen = "";
    
        $.get("https://pokeapi.co/api/v2/pokemon/"+ ide +"/", function(res) {
            console.log(res);
    
            imagen =  "<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + ide + ".png>"
            $("#imgn").html(imagen);
    
            let name = res.species.name;
            $("#name").html(name);
    
            let type = " "; 
            type += "Tipos: " ; 
                 for(var i = 0; i < res.types.length; i++) {
                    type += res.types[i].type.name;
                    if(i === 0){
                        type += " - "
                    };
                };
            $("#tipo").html(type);

            let weight = "Ancho:   " + res.weight + " cm.";
            $("#ancho").html(weight);
    
            let height = "Alto:    " + res.height + " cm.";
            $("#altura").html(height);

            let Habilidades = " "; 
            Habilidades += "Habilidades: " ; 
                 for(var i = 0; i < res.abilities.length; i++) {
                    Habilidades += res.abilities[i].ability.name;
                    if(i < res.abilities.length - 1){
                        Habilidades += " , "
                    };
                };
            $("#Habilidades").html(Habilidades);
    
        }, "json");
    };
});

