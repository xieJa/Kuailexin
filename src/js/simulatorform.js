var radioButton = function radioButton(name,e){
    let a = document.getElementsByName(name)
    for(let i = 0; i<a.length;i++){
        a[i].classList.remove('checked')
    }
    e.target.classList.add('checked')
};
export default {radioButton}