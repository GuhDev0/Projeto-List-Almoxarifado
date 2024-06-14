let name_responsavel = window.document.querySelector('#name-responsavel');
let name_ferramenta = window.document.querySelector('#name-ferramenta');

let btn = window.document.querySelector('#btn-enviar');

let text = window.document.querySelector('#container-right')
const guardaDados  = [id:,]; 

function Add(){
    guardaDados.unshift(name_responsavel.value)
    guardaDados.push(name_ferramenta.value)
   

    text.innerHTML =  `id ${guardaDados } `

}
