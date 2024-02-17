const NUMBER_OF_STAR = 5;

const messages = [`We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.`,
`We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.`,
`Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.`,
`Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.`,
`Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform`]

const starDiv =  document.getElementsByClassName('star')[0];
const star = document.getElementsByClassName('fa');
const endNote = document.getElementsByClassName('end-note')[0];

let clickedStarIndex = null;

const addSpanWithClass = (classArray) => {
    const starSpan = document.createElement('span');
    classArray.forEach(cls => {
        starSpan.classList.add(cls)
    });
    starDiv.appendChild(starSpan);
}

window.onload = () => {
    for(let i=0;i< NUMBER_OF_STAR;i++) {
        addSpanWithClass(['fa' , 'fa-star'])
    }
}

starDiv.addEventListener('click', (e) => {
   const clickedStar = e.target;  
   if(clickedStar.tagName === 'SPAN') {
        if(clickedStarIndex) {
            addRemoveClass(star , NUMBER_OF_STAR-1 , 'checked' ,'REMOVE')
        }
        const indexOfClickedStar = Array.from(e.target.parentElement.children).indexOf(clickedStar);
        addRemoveClass(star , indexOfClickedStar , 'checked' , 'ADD')
        endNote.innerText = messages[indexOfClickedStar]
        clickedStarIndex = indexOfClickedStar;
   }
});

starDiv.addEventListener('mouseover', (e) => {
    const clickedStar = e.target;  
    if(clickedStar.tagName === 'SPAN') {
        const indexOfClickedStar = Array.from(e.target.parentElement.children).indexOf(clickedStar);
        addRemoveClass(star , indexOfClickedStar , 'checked' , 'ADD')
   }
})

starDiv.addEventListener('mouseout', (e) => {
    const clickedStar = e.target;  
    if(clickedStar.tagName === 'SPAN') {
        const indexOfClickedStar = Array.from(e.target.parentElement.children).indexOf(clickedStar);
        addRemoveClass(star , indexOfClickedStar , 'checked' , 'REMOVE')
        if(clickedStarIndex !== null) {
            addRemoveClass(star , clickedStarIndex , 'checked' , 'ADD')
        }
   }
})

const addRemoveClass = (arr , idx , className , action) => {
    for(let i= 0;i <=idx;i++) {
        console.log(arr[i].classList)
        if(action === 'ADD') {
            arr[i].classList.add(className)
        }  
        if(action === 'REMOVE') {
            arr[i].classList.remove(className)
        }
    }
}

