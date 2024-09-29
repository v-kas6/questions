const buttons = document.querySelectorAll('.button')
const paras = document.querySelectorAll('.para')

for (const button of buttons) {
     button.addEventListener('click', open)
}

function open(){
    const para = this.parentElement.nextElementSibling.nextElementSibling
    const buttonOne = this.children[0]
    const buttonTwo = this.children[1]
    for (const par of paras) {
        const isParaClose = par.classList.contains('hidden')
        console.log(this);
        if(par !== para){
            const button = par.parentElement.children[0].children[1]
            const buttonFirst = button.children[0]
            const buttonSec = button.children[1]
            if(isParaClose == false){
                par.classList.add('hidden')
                buttonFirst.classList.toggle('hidden')
                buttonSec.classList.toggle('hidden')
            }
        }
    }

    para.classList.toggle('hidden')
    buttonOne.classList.toggle('hidden')
    buttonTwo.classList.toggle('hidden')

}




