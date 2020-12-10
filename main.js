let prev_url = '';
let next_url = '';

window.onload = async () => {
    window.onkeypress = e => {
        console.log(e.code);
    }

    let url = '/README.md';
    if(window.location.search.includes('?url=')) url = window.location.search.replace('?url=', '');

    const result = await fetch(url);
    const text = await result.text();
    document.getElementById('main').innerHTML = marked(text);

    setup();
}

function setup() {
    document.querySelectorAll('a').forEach(el => {
        el.onclick = async e => {
            e.preventDefault();
            history.pushState(null, null, `?url=${el.href}`);
            const result = await fetch(el.href);
            const text = await result.text();
            document.getElementById('main').innerHTML = marked(text);
            setup();

            if(el.innerHTML.includes('<--')) prev_url = el.href;
            if(el.innerHTML.includes('-->')) next_url = el.href;
        }
    });
}