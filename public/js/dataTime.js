const visor = document.querySelector('#dataTime')

var dt = new Date()
var hr = dt.getHours()
var min = dt.getMinutes()
var dia = dt.getDate()
var mes = dt.getUTCMonth()
var ano = dt.getFullYear()

visor.innerHTML = `
<div class="exibeDataHr">
<ul>
<li>
<h2>Hr: ${hr}:${min}</h2>
</li>
<li>
<h2>Data:${dia}/${mes}/${ano}</h2>
</li>
</ul>
</div>`