
     fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function ( res)
     {return res.json()})
    .then(function (result) {
          items= result.items
          console.log(result);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function(error) {
       console.log(error);
      }

const request = async()=>{
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const json = await response.json();
    items=json.items
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        
        console.log(items[i].volumeInfo.title);
        console.log(items[i].volumeInfo.description);
    }

} 
request() 
let time;       
const div=document.createElement('div')

const divId =document.getElementById('divId')
function runTheTimeout(){
  div.innerHTML=`<h1> The timeout has been started</h1>`
 
  time=setTimeout(()=> { div.innerHTML=`<h1 style='color:green'>The timeout has been triggered!</h1> `} , 3000)
 divId.appendChild(div);
};



  function clearTheTime(){   
       div.innerHTML=`<h1 >The timeout has been cleared"!</h1> `

           clearTimeout(time)

         divId.appendChild(div);
    

  }


