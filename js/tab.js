let $tabbar = document.querySelector(`#tabbar`)

$tabbar.addEventListener(`click`, (event) => {
    let target = event.target
    if (target.dataset.role == `tab`) {
        [].forEach.call(target.parentElement.children, li => {  //另一种 ES6 Array.from
            li.classList.remove(`active`)                    //另两种 [].slice.call(target.parentElement.children).forEach(li=>li.classList.remove(`active`))
        })

        target.classList.add(`active`)
        for (let i of document.querySelectorAll(`.tab-content`)) {
            if (i.matches(`.${target.dataset.view}`)) {
                i.classList.remove(`hide`);
            } else {
                i.classList.add(`hide`);
            }
        }
    }
})