(function(){

    fetch('https://qq-music-api.now.sh/top')
    .then(res => res.json())
    .then(json => json.data.topList)
    .then(renderrank)
    
    function renderrank(ranklists) {
         render(ranklists)
         addwan()
         lazyload()
    }
    function addwan(){
        let nums = [].slice.call(document.querySelectorAll(`.listen_count`))
        for (let num of nums){
            num.innerText = (num.innerText/10000).toFixed(1)+`万`
        }
    }

    function render(ranklists){
        let $ranklists = document.querySelector(`.rank-view ul`)
        let html = ranklists.map(ranklist =>`
        <li class="topic-item">
        <a href="#" class="topic-media">
            <img class="lazyload" data-src="${ranklist.picUrl}">
            <span class="listen_count">
                <i class="icon icon_listen"></i>${ranklist.listenCount}
            </span>
        </a>
        <div class="topic-info">
            <div class="topic-cont">
                <h3 class="topic-tit">${ranklist.topTitle}</h3>
                <p>1
                    <span class="text-name">${ranklist.songList[0].songname})</span>- ${ranklist.songList[0].singername}</p>
                <p>2
                    <span class="text-name">${ranklist.songList[1].songname}</span>- ${ranklist.songList[1].singername}</p>
                <p>3
                    <span class="text-name">${ranklist.songList[2].songname}</span>- ${ranklist.songList[2].singername}</p>
            </div>
            <i class="topic-arrow"></i>
        </div>
        </li>`).join(``)
        $ranklists.innerHTML = html;
    }
})()