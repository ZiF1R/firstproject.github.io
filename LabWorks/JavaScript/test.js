$('#print').click(() => {
    let color = $('.graphColor').val()

    let graph = $('[name="graph"]')
    for(let i = 0; i < graph.length; i++)
        if(graph[i].checked)
            graph = graph[i].value

    let x = 0, z
    let interval = setInterval(move, 1)

    if(Number.parseInt(graph) > 2)
        z = 800
    else
        z = 100

    function move(){
        if(x < z){
            x++
            let functions = new Array(
                Math.pow(x/4,2),
                Math.pow(x/4,3),
                Math.sin(x/50)*100,
                Math.cos(x/50)*100,
            )

            let exprY = functions[Number.parseInt(graph) - 1]

            if(Number.parseInt(graph) > 2){
                $("<span/>",{
                    "style": 'position: absolute; top:' + ((exprY / -1) + 250) + 'px; left: ' + x + 'px; width: 5px; height: 5px; border-radius: 50%; background:' + color + ';'
                }).appendTo("#wrap")
            }
            else{
                $("<span/>",{
                    "style": 'position: absolute; top:' + ((exprY / -1) + 478) + 'px; left: ' + x + 'px; width: 5px; height: 5px; border-radius: 50%; background:' + color + ';'
                }).appendTo("#wrap")
            }
        }
        else{
            clearInterval(interval)
        }
    }
})

$('#clear').click(() => $('#wrap').html(''))