window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.column4'),
    description = document.querySelector('.column5'),
    photos = document.querySelector('.column6'),
    column = document.querySelector('.column'),
    title_add = document.querySelector('#button1'),
    description_add = document.querySelector('#button2'),
    photos_add = document.querySelector('#button3'),
    title_del = document.querySelector('#button1-del'),
    description_del = document.querySelector('#button2-del'),
    photos_del = document.querySelector('#button3-del'),
    column_edit = document.querySelectorAll('.edit'),
    prev =  document.querySelectorAll('.pref'),
    next =  document.querySelectorAll('.next');
    let column_title = document.querySelectorAll('.column > h2'),
    title_title = document.querySelectorAll('.column4 > h2'),
    description_title = document.querySelectorAll('.column5 > h2'),
    photo_title = document.querySelectorAll('.column6 > h2');
    const prev1 = document.getElementsByClassName('.pref');

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
                if(new_title == ''   ){
                    alert('Поле не может быть пустым');
                }else if(new_title == null){
                }
                else{
                item.innerHTML = new_title;
            }
        });
    });
    prev.forEach(function(btn, i){
        btn.addEventListener('click', () =>{
            let item = prev[i].parentNode,
            order = window.getComputedStyle(item).order;
            if(order<=0){
                order = parseInt(order) +9;
            }
            if(i==1){
                order = parseInt(order) -9;
            }else if(i==2){
                order = parseInt(order) -10;
            }else{
                order = parseInt(order) -10;
            }
            item.style.order = (order);
            console.log(order);

        });
    });
    next.forEach(function(btn, i){
        btn.addEventListener('click', () =>{
            let item = next[i].parentNode,
            order = window.getComputedStyle(item).order;
            if(order>=60){
                order = parseInt(order) -9;
            }
            if(i==1){
                order = parseInt(order) +9;
            }else if(i==2){
                order = parseInt(order) +11;
            }else{
                order = parseInt(order) +9;
            }
            item.style.order = (order);
                console.log(order);
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
