function createNote(){
    const section = document.querySelector('.cubes');
    const createElement = document.createElement('span');

    var size = Math.random() * 500;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + "px";

    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    },6000)
}
  
setInterval(createNote,1000)