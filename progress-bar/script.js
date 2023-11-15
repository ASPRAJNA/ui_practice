const num = document.querySelectorAll('.circle')
const hr = document.getElementsByClassName('hr');


num.forEach(n => {
    n.addEventListener('click', () => {
        removeActiveClasses()
        n.classList.add('active')
        i=n.childNodes[0].nodeValue
        callhr(i-2)
    })
});

function callhr(i){
    for(j=0;j<=2;j++){
        console.log(j)
        hr[j].classList.remove('activeh')
        }
    if(i>=0){
    for(j=0;j<=i;j++){
    hr[j].classList.add('activeh')
    }
}
}

function removeActiveClasses() {
    num.forEach(n => {
        n.classList.remove('active')

    })
}