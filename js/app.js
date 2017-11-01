(function() {

    fetch(`https://qq-music-api.now.sh`)                      //复习fetch
        .then(rec => rec.json())
        .then(render)

    function render(json) {
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)
    }

    function renderSlider(sliders) {
        let slides = sliders.map(slide => {
            return { link: slide.linkUrl, image: slide.picUrl }
        })
        new Slider({
            el: document.querySelector(`#slider`),
            slides: slides
        })
    }
    function renderRadios(radios) {
        document.querySelector(`.radios .list`).innerHTML = radios.map(radio => `
        <li class="list-item">
        <a href="#">
            <div class="item-media">
                <img src="${radio.picUrl}" alt="">
                <span class="icon icon-play"></span>
            </div>
            <div class="item-info">
                <h3 >${radio.Ftitle}</h3>
            </div>
        </a>
    </li>
        `).join('')
    }
    // let slider = new Slider({//为了能够链接后端，使后端发来的内容呈现
    //     el: document.querySelector(`#slider`),
    //     slides: [
    //         { lick: '#1', image: 'img/bufan.jpg' },
    //         { lick: '#2', image: 'img/mengmian.jpg' },
    //         { lick: '#3', image: 'img/zhanghan.jpg' },
    //         { lick: '#4', image: 'img/zhangliangyin.jpg' },
    //         { lick: '#5', image: 'img/zj.jpg' },
    //     ]
    // })
})()