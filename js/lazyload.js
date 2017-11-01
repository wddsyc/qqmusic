function lazyload() {
    window.addEventListener(`scroll`, scroll)
    window.dispatchEvent(new Event(`scroll`))
    
    function scroll() {
        let imgs = [].slice.call(document.querySelectorAll(`.lazyload`))
        if (imgs.length === 0) {
            return window.removeEventListener(`scroll`, scroll)
        }
        imgs.forEach(img => {
            if (inViewport(img)) {
                loadImage(img)
            }
        })
    }
    function inViewport(img) {
        let { top, left, bottom, right } = img.getBoundingClientRect()
        let vpWidth = window.innerWidth
        let vpHeight = window.innerHeight
        return ((top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && (right > 0 && right < vpWidth && left > 0 && left < vpWidth))
    }
    function loadImage(img) {
        img.src = img.dataset.src
        img.classList.remove(`lazyload`)
    }
}