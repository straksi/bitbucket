window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#column4'),
    description = document.querySelector('.column5'),
    photos = document.querySelector('.column6'),
    title_add = document.querySelector('#button1'),
    description_add = document.querySelector('#button2'),
    photos_add = document.querySelector('#button3'),
    title_del = document.querySelector('#button1-del'),
    description_del = document.querySelector('#button2-del'),
    photos_del = document.querySelector('#button3-del'),
    column_edit = document.querySelectorAll('.edit');
    let column_title = document.querySelectorAll('.column > h2');


    title_add.addEventListener('click', addTitle);
    description_add.addEventListener('click', addDescription);
    photos_add.addEventListener('click', addPhotos);
    title_del.addEventListener('click', delTitle);
    description_del.addEventListener('click', delDescription);
    photos_del.addEventListener('click', delPhotos);

    column_edit.forEach(function(btn, i){
        btn.addEventListener('click', () =>{
            let new_title = prompt('Введите новый заголовок'),
            item = column_title[i];
            item.innerHTML = new_title;
            title_add.innerHTML = new_title;
            title_del.innerHTML = new_title;
        });
    });

    function addTitle(){
        title.style.display = 'block';
    }
    function addDescription(){
        description.style.display = 'block';
    }
    function addPhotos(){
        photos.style.display = 'block';
    }
    function delTitle(){
        title.style.display = 'none';
    }
    function delDescription(){
        description.style.display = 'none';
    }
    function delPhotos(){
        photos.style.display = 'none';
    }

});
