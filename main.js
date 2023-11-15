const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
//const API_URL="/fhu-faculty-api.json"

      
let cardInnerHTML = 

addAllCards();

async function  addAllCards() {

    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log( person );
    });

    ` <div class="flexbox max-w-md  h-auto rounded-md  bg-blue-600  text-white border-8 border-purple-500 border-style: outline-double outline-black -outline-offset-8">
      
    <div class="flex justify-between">
      <div class="flex">
        <span class="bg-gradient-to-b from-slate-300 via-slate-600 via to-slate-400 opacity-100 -ml-1 px-1 -my-1 h-6 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm z-40 text-lg text-slate-50">Basic</span>
        <span class=" pl-2 pt-2 text-3xl">"DadJoke" Casey</span>
      </div>
      
      <div class="flex p-1">
        <span class="pt-6 text-sm">HP</span>
        <span class="pt-3 pl-1 text-3xl">83</span>
        <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-11 h-11  mx-2">
          <span class="  fa-solid fa-heart text-lg text-red-700"></span>
        </element>
      </div>
    </div>

    <div class="bg-[url('/images/headshots/kenan.jpg')] mt-2 mx-6 rounded-md border-slate-400 border-2 bg-cover bg-center bg-no-repeat  h-64 w-96 flex justify-end ">
      <div class="bg-violet-800 text-slate-200 w-20 h-20 flexbox text-3xl text-center rounded-bl-3xl">
        <span>Cost</span>
        <span>6</span>
      </div>
    </div>


    <div class="bg-gradient-to-b from-slate-500 via-slate-200 via to-slate-500 text-center mx-2 rounded-bl-lg rounded-tl-xl rounded-br-3xl">
      <div class="bg-gradient-to-b from-slate-300 via-slate-50 via to-slate-300  mx-5 m-1 text-slate-500 rounded-bl-md rounded-tl-3xl rounded-br-xl rounded-tr-3xl">No. 001 Wizard Faculty HT. 5'8" S:LOW Male</div>
    </div>

    <div class="flex justify-between mt-10">
      <div class="flex">
        <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-9 h-9  mx-2">
          <span class=" fa-solid fa-heart text-red-700 text-md"></span>
        </element>
      </div>

      <div class="pt-2 text-xl  font-bold">Indiscriminating Dad Joke</div>
      
      <div class="flex p-1">
        <span class="text-3xl">62</span>
        <span class=" pl-1 text-3xl">+</span>
        
      </div>
    </div>

    <span class="flex px-5 flex-wrap text-slate-300">Stun the opponent in disbelief. Decrease opponents attacks by 62 and stun them for a turn.</span>
    
    <div class="flex justify-between mt-10">
      <div class="flex">
        <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-9 h-9  mx-2">
          <span><i class="fas fa-heart text-red-700 text-md"></i></span>
        </element>
      </div>

      <div class="pt-2 text-xl font-bold">Ignorant Slang</div>
      
      <div class="flex p-1">
        <span class="text-3xl">74</span>
        <span class=" pl-1 text-3xl">+</span>
        
      </div>
    </div>

    <span class="flex px-5 flex-wrap text-slate-300">Hurt the feelings of the faculty through spiteful slang. Take 74 Health.</span>

    <div class="my-6">
      <div class="text-2xl text-center">Character Attributes</div>
      <div class="mx-3 mt-2 text-slate-300 flex justify-between">
        <span><span class="fa-solid fa-circle mr-1"></span>Associate Professor<span class="fa-solid fa-circle ml-1"></span></span>
        <span><span class="fa-solid fa-circle mr-1"></span>Ph.D<span class="fa-solid fa-circle ml-1"></span></span>
        <span><span class="fa-solid fa-circle mr-1"></span>Tenure<span class="fa-solid fa-circle ml-1"></span></span>
       
      </div>
      <div class="mx-3 text-slate-300 flex justify-between">
        <span><span class="fa-solid fa-circle mr-1"></span>Comp. Sci. Prof.<span class="fa-solid fa-circle ml-1"></span></span>
        <span><span class="fa-solid fa-circle mr-1"></span>Math Eng and Comp Dept<span class="fa-solid fa-circle ml-1"></span></span>
      </div>
      
    </div>
    

    <div class="flex mt-10">
      <div class="bg-gradient-to-b from-slate-500 via-slate-200 via to-slate-500 text-center rounded-bl-lg rounded-tl-xl rounded-br-3xl">
        <div class="flex bg-gradient-to-b from-slate-300 via-slate-50 via to-slate-300  mx-5 m-1 text-slate-500 rounded-bl-md rounded-tl-3xl rounded-br-xl rounded-tr-3xl">
          <span class=" text-black text-xs font-bold mx-2 mt-2">Weaknesses</span>
          <span>
            <element class="bg-slate-400 flex items-center justify-center rounded-full w-7 h-7 ">
              <span class="  fa-solid fa fa-clock text-slate-700 text-md"></span>
            </element>
          </span>
          <span>
            <element class="bg-slate-400 flex items-center justify-center rounded-full w-7 h-7 ml-1 mr-1 ">
              <span class="  fa-solid fa fa-church text-slate-700 text-md "></span>
            </element>
          </span>
          <span class=" text-black text-xs font-bold mx-2 mt-2">Resistance: Children</span>
          <span class=" text-black text-xs font-bold mx-2 mt-2">#CODEHARD</span>
        
        </div>
      </div>
    </div>

    <button class="heart" id="heart"></button>

     

  </div>`
    // for each item in data set (each person)
        // add that person's card to the DOM

    people.forEach( person => {

        let div = document.createElement('div');
        let cardInnerHTML = 
       
        ` <div class="flexbox max-w-md  h-auto rounded-md  bg-blue-600  text-white border-8 border-purple-500 border-style: outline-double outline-black -outline-offset-8">
      
        <div class="flex justify-between">
          <div class="flex">
            <span class="bg-gradient-to-b from-slate-300 via-slate-600 via to-slate-400 opacity-100 -ml-1 px-1 -my-1 h-6 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm z-40 text-lg text-slate-50">Basic</span>
            <span class=" pl-2 pt-2 text-3xl">"${person.NickName}" ${person.FirstName} ${person.LastName}</span>
          </div>
          
          <div class="flex p-1">
            <span class="pt-6 text-sm">HP</span>
            <span class="pt-3 pl-1 text-3xl">${person.HitPoints}</span>
            <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-11 h-11  mx-2">
              <span class="  fa-solid fa-heart text-lg text-red-700"></span>
            </element>
          </div>
        </div>

        
        <div class="bg-[url(https://fhu-faculty-api.netlify.app/images/headshots/${person.Image})] mt-2 mx-6 rounded-md border-slate-400 border-2 bg-cover bg-center bg-no-repeat  h-64 w-96 flex justify-end ">
          <div class="bg-violet-800 text-slate-200 w-20 h-20 flexbox text-3xl text-center rounded-bl-3xl">
            <span>Cost</span>
            <span>${person.Cost}</span>
          </div>
        </div>
  
  
        <div class="bg-gradient-to-b from-slate-500 via-slate-200 via to-slate-500 text-center mx-2 rounded-bl-lg rounded-tl-xl rounded-br-3xl">
          <div class="bg-gradient-to-b from-slate-300 via-slate-50 via to-slate-300  mx-5 m-1 text-slate-500 rounded-bl-md rounded-tl-3xl rounded-br-xl rounded-tr-3xl">No. ${person.id} ${person.Type}  HT. ${person.Height}" S:${person.Stamina} Gender:${person.Gender}</div>
        </div>
  
        <div class="flex justify-between mt-10">
          <div class="flex">
            <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-9 h-9  mx-2">
              <span class=" fa-solid fa-heart text-red-700 text-md"></span>
            </element>
          </div>
  
          <div class="pt-2 text-xl  font-bold">${person.Attack1}</div>
          
          <div class="flex p-1">
            <span class="text-3xl">${person.Attack1Damage}</span>
            <span class=" pl-1 text-3xl">+</span>
            
          </div>
        </div>
  
        <span class="flex px-5 flex-wfrap text-slate-300">Stun the opponent in disbelief. Decrease opponents attacks by 62 and stun them for a turn.</span>
        
        <div class="flex justify-between mt-10">
          <div class="flex">
            <element class="bg-red-300 flex items-center justify-center rounded-full border-4 w-9 h-9  mx-2">
              <span><i class="fas fa-heart text-red-700 text-md"></i></span>
            </element>
          </div>
  
          <div class="pt-2 text-xl font-bold">${person.Attack2}</div>
          
          <div class="flex p-1">
            <span class="text-3xl">${person.Attack2Damage}</span>
            <span class=" pl-1 text-3xl">+</span>
            
          </div>
        </div>
  
        <span class="flex px-5 flex-wrap text-slate-300">Hurt the feelings of the faculty through spiteful slang. Take 74 Health.</span>
   
        <div class="my-6">
          <div class="text-2xl text-center">Character Attributes</div>
          <div class="mx-3 mt-2 text-slate-300 flex justify-between">
            <span><span class="fa-solid fa-circle mr-1"></span>${person.Rank}<span class="fa-solid fa-circle ml-1"></span></span>
            <span><span class="fa-solid fa-circle mr-1"></span>${person.EducationLevel}<span class="fa-solid fa-circle ml-1"></span></span>
            <span><span class="fa-solid fa-circle mr-1"></span>Tenure: ${person.Tenure}<span class="fa-solid fa-circle ml-1"></span></span>
           
          </div>
          <div class="mx-3 text-slate-300 flex justify-between">
            <span><span class="fa-solid fa-circle mr-1"></span>${person.Department}<span class="fa-solid fa-circle ml-1"></span></span>
             </div>
          
        </div>
        
        <div id="buttons" class="flex justify-between">
      <button class=" w-20 h-20 z-50 bg-white m-1 rounded-full text-slate-950 text-2xl" onclick="likeToggle(this)" id="like">Like</button>
      <button class=" w-20 h-20 z-50 bg-white m-1 rounded-full text-slate-950 text-2xl" onclick="dislikeToggle(this)" id="dislike">Dislike</button>
    </div>
  
        <div class="flex mt-5">
          <div class="bg-gradient-to-b from-slate-500 via-slate-200 via to-slate-500 text-center rounded-bl-lg rounded-tl-xl rounded-br-3xl ">
            <div class="flex bg-gradient-to-b from-slate-300 via-slate-50 via to-slate-300  mx-2 m-1 text-slate-500 rounded-bl-md rounded-tl-3xl rounded-br-xl rounded-tr-3xl">
              <span class=" text-black text-s font-bold mx-2 mt-2">Weaknesses: ${person.Weaknesses}</span>
              
              <span class=" text-black text-s font-bold mx-2 mt-2">Resistance: ${person.Resistances}</span>
              <span class=" text-black text-s font-bold mx-2 mt-2">${person.HashTag}</span>
            
            </div>
          </div>
        </div>
        
      </div> 
      `
    

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);

        
      
        
    

 })}




//  function buttonColor(){
//   document.getElementById("like").style.backgroundColor='#911';
//  }

//  buttonColor();
//  let lindex = 0; 
//  let disdex = 0;
 
//  let likeButton = document.getElementById("like").addEventListener('click', function() {
//   // if (lindex = 0) {
//   //   likeButton.style.backgroundColor = "green";
//   //   lindex++;
//   // }
//   // else {
//   //   likeButton.style.backgroundColor = "white";
//   //   lindex--;
//   // }
//   likeButton.style.backgroundColor = "green"
  
// })


// let dislikeButton = document.getElementById("dislike").addEventListener('click', function() {
//   if (disdex = 0) {
//     dislikeButton.style.backgroundColor = "red";
//     disdex++;
//   }
//   else {
//     dislikeButton.style.backgroundColor = "white";
//     disdex--;
//   }

// })

function addCard(person) {

}

function likeToggle(element){
  var currentColor = element.style.backgroundColor;
  if(currentColor=="green"){
    element.style.backgroundColor="white"
  }
  else{
    element.style.backgroundColor="green"
  }
}

function dislikeToggle(element){
  var currentColor = element.style.backgroundColor;
  if(currentColor=="red"){
    element.style.backgroundColor="white"
  }
  else{
    element.style.backgroundColor="red"
  }
}


