
const inputarray=JSON.parse(localStorage.getItem("itemslist"))||[];
loopArray();
function call()
{
  const inputk=document.getElementById("input1");
  inputitems=inputk.value;
  inputarray.push(inputitems);
  loopArray();
  inputk.value=' ';
  locals();
  animation();
}
function animation(){
const fed = document.getElementById("trans");
  fed.style.backgroundColor="#F31559"
    fed.innerText="Loading...."
    
  setTimeout(function(){
    
    fed.innerText="added..!"
    fed.style.backgroundColor="green"
  },500)
  setTimeout(function(){
    fed.innerText="Add"
    fed.style.backgroundColor="white"
  },1500)
}


function loopArray()
{
    let listItems =' '
    for(let i=0;i<=inputarray.length-1;i++)
    {
        const res = inputarray[i];
        const htmlcode = `<p>${res}
        <button onclick =" 
        inputarray.splice(${i},1)
        loopArray();
        locals();
        "><i class="fa-solid fa-trash"></i> Remove</button>
        </p> `
        listItems +=htmlcode;
    }
    const html = document.getElementById("output");
    html.innerHTML=listItems;
}


function locals (){
  localStorage.setItem("itemslist", JSON.stringify(inputarray));
}




