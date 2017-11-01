class Slider {
    constructor(options = {}) {   //服务器传来的是个对象，这里就要给对象加上属性PS：={}选填
        this.$el = options.el
        this.slides = options.slides
        this.interval = options.interval || 2000   //???!!!
        this.duration = options.duration || 300
        this.render()
        this.index = 0
        this.start()
    }
    render() {   //注意先后顺序，为啥不建议放在构造器里呢，因为要尽量减少自带属性，并且要也注意先后顺序
        this.$el.innerHTML = `<div class="qq-slider-wrap"></div>`
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = `${100 * this.slides.length}%`
        this.$wrap.innerHTML = this.slides.map(slide =>
            `
        <div class="qq-slider-item">
        <a href="${slide.link}">
            <img src="${slide.image}">
        </a>
    </div>`
        ).join(``)
    }
    start() {
        setInterval(this.next.bind(this), this.interval)  //可怕的操作，复习bind,setinnerval
    }
    next() {
        this.$wrap.style.transform = `translateX(-${1 / this.slides.length * this.index * 100}%)`
        this.index += 1
        if(this.index === this.slides.length) {
            this.$wrap.style.transform = `translateX(0)`
            console.log(this.index)
            this.index = 0
            return
        }   
    }
}