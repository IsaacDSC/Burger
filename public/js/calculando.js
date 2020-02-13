function calculando() {

    //document.write(burger10)

    //Recebendo dados de Burgers
    var burger_1 = document.querySelector('#burger1')
    var burger1 = Number(burger_1.value)
    var burger_2 = document.querySelector('#burger2')
    var burger2 = Number(burger_2.value)
    var burger_3 = document.querySelector('#burger3')
    var burger3 = Number(burger_3.value)
    var burger_4 = document.querySelector('#burger4')
    var burger4 = Number(burger_4.value)
    var burger_5 = document.querySelector('#burger5')
    var burger5 = Number(burger_5.value)
    var burger_6 = document.querySelector('#burger6')
    var burger6 = Number(burger_6.value)
    var burger_7 = document.querySelector('#burger7')
    var burger7 = Number(burger_7.value)
    var burger_8 = document.querySelector('#burger8')
    var burger8 = Number(burger_8.value)
    var burger_9 = document.querySelector('#burger9')
    var burger9 = Number(burger_9.value)
    var burger_10 = document.querySelector('#burger10')
    var burger10 = Number(burger_10.value)
    var obsBurger = document.querySelector('#obsBurger')
        //recebendo dados de Bebidas
    var bebida_1 = document.querySelector('#bebida1')
    var bebida1 = Number(bebida_1.value)
    var bebida_2 = document.querySelector('#bebida2')
    var bebida2 = Number(bebida_2.value)
    var bebida_3 = document.querySelector('#bebida3')
    var bebida3 = Number(bebida_3.value)
    var bebida_4 = document.querySelector('#bebida4')
    var bebida4 = Number(bebida_4.value)
    var bebida_5 = document.querySelector('#bebida5')
    var bebida5 = Number(bebida_5.value)
    var bebida_6 = document.querySelector('#bebida6')
    var bebida6 = Number(bebida_6.value)
    var bebida_7 = document.querySelector('#bebida7')
    var bebida7 = Number(bebida_7.value)
    var bebida_8 = document.querySelector('#bebida8')
    var bebida8 = Number(bebida_8.value)
    var bebida_9 = document.querySelector('#bebida9')
    var bebida9 = Number(bebida_9.value)
    var bebida_10 = document.querySelector('#bebida10')
    var bebida10 = Number(bebida_10.value)
        // recebendo dados de Fritas
    var fritas_1 = document.querySelector('#fritas1')
    var fritas1 = Number(fritas_1.value)
    var fritas_2 = document.querySelector('#fritas2')
    var fritas2 = Number(fritas_2.value)
    var fritas_3 = document.querySelector('#fritas3')
    var fritas3 = Number(fritas_3.value)
        //recebendo dados de Doces
    var doces_1 = document.querySelector('#doces1')
    var doces1 = Number(doces_1.value)
    var doces_2 = document.querySelector('#doces2')
    var doces2 = Number(doces_2.value)
    var doces_3 = document.querySelector('#doces3')
    var doces3 = Number(doces_3.value)
    var doces_4 = document.querySelector('#doces4')
    var doces4 = Number(doces_4.value)
    var doces_5 = document.querySelector('#doces5')
    var doces5 = Number(doces_5.value)


    //adicionando visor
    var TotalBurger = burger1 + burger2 + burger3 + burger4 + burger5 + burger6 + burger7 + burger8 + burger9 + burger10
    var TotalBebidas = bebida1 + bebida2 + bebida3 + bebida4 + bebida5 + bebida6 + bebida7 + bebida8 + bebida9 + bebida10
    var TotalFritas = fritas1 + fritas2 + fritas3
    var TotalDoces = doces1 + doces2 + doces3 + doces4 + doces5
    var tela = document.querySelector('#tela')
        //tela.innerHTML = `ola mundo`
    tela.innerHTML = `
        Burger: ${TotalBurger}<br>
        Bebidas: ${TotalBebidas}<br>
        Fritas: ${TotalFritas} <br>
        Doces: ${TotalDoces}`
    var totalPedido = TotalBebidas + TotalBurger + TotalFritas + TotalDoces
    var tela2 = document.querySelector('#telaTotal')
    tela2.innerHTML = `Total: ${totalPedido}`

    //adicionando tela de troco
    var telaTroco = document.querySelector('#telaTroco')
        //valor que o cliente ira pagar em dinheiro
    var txtdinheiro = document.querySelector('#dinheiro')
    var dinheiro = Number(txtdinheiro.value)
    var txtvalorCompra = document.querySelector('#valorCompra')
    var valorCompra = Number(txtvalorCompra.value)

    var troco = dinheiro - valorCompra
    telaTroco.innerHTML = `Troco: ${troco}`

}