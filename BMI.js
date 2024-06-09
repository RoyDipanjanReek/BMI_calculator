const form = document.querySelector('form');
const weightGuide = document.querySelector('#weight-guide');

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === ' ' || height<0 || isNaN(height)){
        result.innerText  = `Please give a valid height${height}`;
    } else if(weight === ' ' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weigth${weight}`;
    }
    else{
        let BMI  = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${BMI}</span>`;
        if(BMI < 18.6){
            weightGuide.innerHTML = `you are Under Weigth`;
        }else if (BMI >= 18.6 && BMI<=24.9){
            weightGuide.innerHTML = `you are Normal Weigth`;
        }else{
            weightGuide.innerHTML = `you are Over Weigth`;
        }
    }
});


