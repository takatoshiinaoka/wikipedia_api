let input = '';
const searchURL = 'https://ja.wikipedia.org/w/api.php?action=query&format=json&list=backlinks&bllimit=50&bltitle='

function setup(){
    noCanvas();
    clear();
    input = select('#input');
    input.changed(search);
}

function search(){
    let url = searchURL + input.value();
    loadJSON(url, show, 'jsonp');
}

function show(data){
    clear();
    let links = data.query.backlinks;
    links.forEach(link => {
        createDiv(link.title);
    });
}

