let slider__img=document.querySelectorAll('.slider__img');
let slider__main__img=document.querySelectorAll('.slider__main__img');
const puntajeButtons = document.querySelectorAll('.puntaje button');
let cont=0;

slider__img.forEach((cadaImg, i)=>{
    slider__img[i].addEventListener('click',()=>{
        document.getElementById('body').style.overflow='hidden';
        document.getElementById('slider__main').style.display='flex';
        slider__main__img.forEach((cadaTest, i)=>{
            slider__main__img[i].classList.remove('slider__main__img--visible');
        })
        slider__main__img[i].classList.add('slider__main__img--visible')
    })
})

document.querySelector('.slider__main--black').addEventListener('click',()=>{
    document.getElementById('slider__main').style.display='none';
    document.getElementById('body').style.overflow='auto';
})

puntajeButtons.forEach((button , i)=> {
  button.addEventListener('click', () => {
    puntajeButtons.forEach((cadaBtn, i)=>{
        puntajeButtons[i].classList.remove('btn__star--active');
    })
    const puntajeInput = document.querySelector('#puntaje');
    puntajeInput.value = button.value;
    for(let n=0; n<=i ;n++){
        puntajeButtons[n].classList.add('btn__star--active');
    }
  });
});

function anterior(){
    if(cont>0){
        cont--;
        slider__img.forEach((cadaTest, i)=>{
            slider__img[i].classList.remove('slider__img--visible');
        })
        slider__img[cont].classList.add('slider__img--visible')
    }
}

function anteriorMain(){
    if(cont>0){
        cont--;
        slider__main__img.forEach((cadaTest, i)=>{
            slider__main__img[i].classList.remove('slider__main__img--visible');
        })
        slider__main__img[cont].classList.add('slider__main__img--visible')
    }
}

function siguiente(){
    if(cont+1<slider__img.length){
        cont++;
        slider__img.forEach((cadaTest, i)=>{
            slider__img[i].classList.remove('slider__img--visible');
        })
        slider__img[cont].classList.add('slider__img--visible');
    }
}

function siguienteMain(){
    if(cont+1<slider__main__img.length){
        cont++;
        slider__main__img.forEach((cadaTest, i)=>{
            slider__main__img[i].classList.remove('slider__main__img--visible');
        })
        slider__main__img[cont].classList.add('slider__main__img--visible');
    }
}