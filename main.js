const game = () =>{
    // Word Setup
    words = ['dog', 'monkey', 'snake', 'butterfly', 'camel', 'tiger', 'elephant'];
    word = words[Math.floor(Math.random() * words.length)]; 
    word = word.split("");
    wordFloor=[];
    for(var i=0; i<word.length; i++){
        wordFloor.push('_ ');
    }
    // Helps To Display Final Results, When Won
    wordCheck=[];
    for(var i=0; i<word.length;i++){
        wordCheck.push(word[i].toUpperCase()+' ');
    }
    // Display word With Floor Signs
    var wordOutput = document.querySelector('.word');
    wordOutput.innerHTML=`${wordFloor.join('')}`;
    // Get correct And wrong Notifications
    var wrong1 = document.querySelector('.wrong1');
    var correct1 = document.querySelector('.correct1');
    var wrong2 = document.querySelector('.wrong2');
    var correct2 = document.querySelector('.correct2');
    // Attempts Variable
    var attempts=7;
    // Get Image Div
    var imageDiv = document.querySelector('.image');
    imageDiv.innerHTML = '<img src="hang'+attempts+'.png">'

    // GUESSING AND SCORE 
    document.querySelector('.guessing').addEventListener('submit', (e)=>{
        var check=false;
        e.preventDefault();
        // Get Guess
        var guess = document.querySelector('.guess').value;
        console.log(imageDiv);
        // Check If 1 Letter Typed
        if(guess.length>1){
            alert('Type Only ONE Letter!!!');
            return;
        }
        // Check If Correct Answer
        for(var i=0; i<word.length;i++){
            if(guess==word[i]){
                wordFloor[i]=(guess+' ').toUpperCase();
                wordOutput.innerHTML=`${wordFloor.join('')}`;
                check=true;
            }
        }
        // Animations
        if (check==true){
            if(correct1.style.animation){
                correct1.style.animation="";
                correct2.style.animation=`fading 2s ease forwards 0s`;
            }
            else{
                correct1.style.animation=`fading 2s ease forwards 0s`;
                correct2.style.aniamtion=`0`;
            }    
        }
        else if (check==false){
            if(wrong1.style.animation){
                wrong1.style.animation='';
                wrong2.style.animation=`fading 2s ease forwards 0s`;
            }
            else{
                wrong1.style.animation=`fading 2s ease forwards 0s`;
                wrong2.style.animation=``;
            }  
            attempts -= 1;
            
        }
        // Display Image
        imageDiv.innerHTML = '<img src="hang'+attempts+'.png">'

        // Final Output
        if(attempts==1){
            correct2.classList.toggle('displayNO');
            correct1.classList.toggle('displayNO');
            wrong2.classList.toggle('displayNO');
            wrong1.classList.toggle('displayNO');
            wordOutput.classList.toggle('wordoutput');
            document.querySelector('.guessing').classList.toggle('displayNO');
            var lost=document.querySelector('.lost');
            lost.innerHTML="You Lost!";
            console.log(lost);
        }
        
        if(wordFloor.join('')===wordCheck.join(''))
        {
            correct2.classList.toggle('displayNO');
            correct1.classList.toggle('displayNO');
            wrong2.classList.toggle('displayNO');
            wrong1.classList.toggle('displayNO');
            wordOutput.classList.toggle('wordoutput');
            document.querySelector('.guessing').classList.toggle('displayNO');
            var won=document.querySelector('.won');
            won.innerHTML="You Won!";
        }
    }); 
    
}
game();