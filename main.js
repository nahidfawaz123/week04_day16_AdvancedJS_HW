
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


function runTimeout(){
    alert('The timeout has been started')
    setTimeout(alartRun(), 3000)

};
function alartRun() {
    alert("The timeout has been triggered!");
  };


  function clear(){   
       alert("The timeout has been cleared");

    clearTimeout(setTimeout())
  }


