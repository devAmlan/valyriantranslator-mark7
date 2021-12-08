const inputtext = document.querySelector('#inputtext')
const output = document.querySelector('#output')
const translatebtn = document.querySelector('#translatebtn')
const api = "https://api.funtranslations.com/translate/valyrian.json?text="
function valyrianTranslation(){
  if(inputtext.value !== ""){
    var input = inputtext.value;
    fetch(api+input)
    .then(resp=>resp.json())
    .then((data)=>{console.log(data.contents.translated)
      output.innerText = data.contents.translated
     })
     .catch((err)=>{alert("Some thing went wrong please try again later")})
  }
  else{
    alert('Please type any word')  
  }
}

translatebtn.addEventListener('click',valyrianTranslation)