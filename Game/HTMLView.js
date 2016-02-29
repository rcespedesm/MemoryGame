/**
 * Created by ArielYanarico on 2/24/2016.
 */

var HTMLView = function(){
    this.mc = "";
    this.matt = [];

    this.turn = 1;
    this.firstCard = '';
    this.players = [];
};

HTMLView.prototype.displayPlayers = function(){
    $('#P1N').text(this.players[0].name);
    $('#P2N').text(this.players[1].name);
    $('#P1G').text(this.players[0].goodAttempts);
    $('#P2G').text(this.players[1].goodAttempts);
    $('#P1W').text(this.players[0].wrongAttempts);
    $('#P2W').text(this.players[1].wrongAttempts);
};


HTMLView.prototype.startGame = function(){
    if (/^([a-zA-Z0-9]{1,15})$/.test($("#PLAYER1").val()) &&
        /^([a-zA-Z0-9]{1,15})$/.test($("#PLAYER2").val()) &&
        /^([1]{1}[0]{1}|[2-9]{1})$/.test($("#SIZE").val())){
        console.log('Hello');
        var size = parseInt($("#SIZE").val());
        view.mc = new MainController(size);
        view.matt = view.mc.getBoard();//this
        view.mc.setPlayer($("#PLAYER1").val());
        view.mc.setPlayer($("#PLAYER2").val());
        $(".INIT").hide(1000);
        view.players = view.mc.getPlayers();
        view.displayPlayers();
        view.initTable(size);
        $('#ScoreTable').css('display','table');
    }else{
        alert('Enter Valid Values');
    }
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
                    c.target.innerText = "---";
                },1500);

                setTimeout(function(){
                    view.firstCard.innerText = "---";
                },1500);

            }
            view.players = view.mc.getPlayers();
            view.displayPlayers();
            view.turn--;
        }

        if(view.mc.getStatusBoard() === true){
            view.printWinner();
        }

    }
};


/*HTMLView.prototype.initTable2 =  function(size)
{
    var matrix = $('<TABLE id = "table" class="CSSTableGenerator"></TABLE>');
    for (var a = 0; a < size; a++)
    {
        var tr = $('<TR></TR>');

        for (var i = 0; i < size; i++)
        {
            var td = $('<TD>@@</TD>');
            td.on('click', view.displayField);
            tr.append(td);
        }
        matrix.append(tr)
    }
    $('body').append(matrix);
};*/

HTMLView.prototype.initTable =  function(size)
{
    var matrix = document.createElement("TABLE");
    matrix.id = "MATRIX";
    matrix.className = "CSSTableGenerator";
    for (var a = 0; a < size; a++)
    {
        var tr = document.createElement("TR");
        matrix.appendChild(tr);
        for (var i = 0; i < size; i++)
        {
            var td = document.createElement("TD");
            tr.appendChild(td);
            td.id = a + '-' + i;
            td.innerText = "---";
            td.addEventListener('click', this.displayField);
        }
    }
    $('body').append(matrix);

};


HTMLView.prototype.printWinner = function(){
    alert('The winner is :' + view.mc.getWinner() + ' with score' + view.mc.getWinner().calculateFinalScore());
};
