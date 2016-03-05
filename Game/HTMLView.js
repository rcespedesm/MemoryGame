/**
 * Created by ArielYanarico on 2/24/2016.
 */

var HTMLView = function(){
    this.mc = "";
    this.matt = [];

    this.turn = 1;
    this.firstCard = '';
};

HTMLView.prototype.displayPlayers = function(){
    $('#P1N').text(this.mc.getPlayers()[0].name);
    $('#P2N').text(this.mc.getPlayers()[1].name);
    $('#P1G').text(this.mc.getPlayers()[0].goodAttempts);
    $('#P2G').text(this.mc.getPlayers()[1].goodAttempts);
    $('#P1W').text(this.mc.getPlayers()[0].wrongAttempts);
    $('#P2W').text(this.mc.getPlayers()[1].wrongAttempts);
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
        view.displayPlayers();
        view.initTable(size);
        $('#ScoreTable').css('display','table');
    }else{
        alert('Enter Valid Values');
    }
};

HTMLView.prototype.displayField = function(){
    var e = $(this);
    var pos = e.attr('id').split('-');


    if(view.matt[pos[0]][pos[1]].getStatus() === false){

        e.text(view.matt[pos[0]][pos[1]].getID());

        if(view.turn === 1){
            view.matt = view.mc.move(e.attr('id'));
            view.turn++;
            view.firstCard = $('#'+e.attr('id'));
        }else{
            view.matt = view.mc.move(e.attr('id'));
            view.matt = view.mc.compareCards();

            if(view.matt[pos[0]][pos[1]].getStatus() === false){

                setTimeout(function(){
                    e.text('---');
                },1100);

                setTimeout(function(){
                    view.firstCard.text('---');
                },1100);

            }
            view.displayPlayers();
            view.turn--;
        }

        if(view.mc.getStatusBoard() === true){
            view.printWinner();
        }

    }
};


HTMLView.prototype.initTable =  function(size)
{
    var matrix = $('<TABLE id = "table" class="CSSTableGenerator"></TABLE>');
    for (var a = 0; a < size; a++)
    {
        var tr = $('<TR></TR>');

        for (var i = 0; i < size; i++)
        {
            var td = $('<TD id="'+i+'-'+a+'">---</TD>');
            td.on('click', view.displayField);
            tr.append(td);
        }
        matrix.append(tr)
    }
    $('body').append(matrix);
};


HTMLView.prototype.printWinner = function(){
    var player1 = view.mc.getPlayers()[0].name +' -> '+  view.mc.getPlayers()[0].calculateFinalScore();
    var player2 = view.mc.getPlayers()[1].name +' -> '+  view.mc.getPlayers()[1].calculateFinalScore();
    alert('The winner is "' + view.mc.getWinner() + '" with scores:\n' + player1 + '\n' + player2);
    location.reload();
};
