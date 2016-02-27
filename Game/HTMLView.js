/**
 * Created by ArielYanarico on 2/24/2016.
 */

var HTMLView = function(){
    this.mc = "";
    this.matt = [];

    this.turn = 1;
    this.firstCard = '';
};

HTMLView.prototype.startGame = function(){
    console.log('Hello');
    var size = parseInt($("#SIZE").val());
    view.mc = new MainController(size);
    view.matt = view.mc.getBoard();//this
    view.mc.setPlayer($("#PLAYER1").val());
    view.mc.setPlayer($("#PLAYER2").val());
    $(".INIT").hide(1000);
    view.initTable(size);
};

HTMLView.prototype.displayField = function(c){
    var pos = c.target.id.split('-');


    if(view.matt[pos[0]][pos[1]].getStatus() === false){

        c.target.innerText = view.matt[pos[0]][pos[1]].getID();

        if(view.turn === 1){
            view.matt = view.mc.move(c.target.id);
            view.turn++;
            view.firstCard = document.getElementById(c.target.id);
        }else{
            view.matt = view.mc.move(c.target.id);
            view.matt = view.mc.compareCards();

            if(view.matt[pos[0]][pos[1]].getStatus() === false){

                setTimeout(function(){
                    c.target.innerText = "@@";
                },1500);

                setTimeout(function(){
                    view.firstCard.innerText = "@@";
                },1500);

            }

            view.turn--;
        }

        if(view.mc.getStatusBoard() === true){
            view.printWinner();
        }

    }
};


HTMLView.prototype.initTable =  function(size)
{
    //var table = $('<TABLE id = "table"></TABLE>');
    var table = document.createElement("TABLE");
    table.id = "table";
    for (var a = 0; a < size; a++)
    {
        var tr = document.createElement("TR");
        //var tr = $('<TR>@@</TR>');
        table.appendChild(tr);
        for (var i = 0; i < size; i++)
        {
            var td = document.createElement("TD");
            //var td = $('<TD>@@</TD>');
            tr.appendChild(td);
            td.id = a + '-' + i;
            td.innerText = "@@";
            td.addEventListener('click', this.displayField);
        }
    }
    //$('TD').click(view.displayField);
    $('body').append(table);

};


HTMLView.prototype.printWinner = function(){

    var winner = view.mc.getWinner();
    console.log('LOLOLOLO');
};
