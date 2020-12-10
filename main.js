let prev_url;
let next_url;

window.onload = async () => {
    window.onkeydown = e => {
        if(e.code == 'ArrowLeft') prev_url.click();
        if(e.code == 'ArrowRight') next_url.click();
    }

    let url = 'README.md';
    if(window.location.search.includes('?url=')) url = window.location.search.replace('?url=', '');
    else history.pushState(null, null, '?url=/kotlin-bukkit-plugin-tutorial/README.md');

    const result = await fetch(url);
    const text = await result.text();
    document.getElementById('main').innerHTML = marked(text);

    setup();
}

function setup() {
    prev_url = null;
    next_url = null;

    document.querySelectorAll('a').forEach(el => {
        el.onclick = async e => {
            if(!el.getAttribute('href').startsWith('#')) e.preventDefault();
            else return;
            console.log(el.getAttribute('href'));
            history.pushState(null, null, `?url=${new URL(el.getAttribute('href'), decodeURIComponent(`${location.protocol}//${location.hostname}${location.search.replace('?url=', '')}`)).pathname}`);
            const result = await fetch(decodeURIComponent(location.search.replace('?url=', '')));
            const text = await result.text();
            document.getElementById('main').innerHTML = marked(text);
            setup();

            if(el.innerHTML.includes('$lt;--')) prev_url = el;
            if(el.innerHTML.includes('--$gt;')) next_url = el;
        }
    });
}