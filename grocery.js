var  grocery=document.getElementsByClassName('groceries')[0];
var pen=document.getElementById('pencil');
var allitem=document.getElementById('allitems');
var input=document.getElementById('userinput');


pen.addEventListener('click' ,function()
{
    allitems.innerHTML="";
})

input.addEventListener("keydown",function(event)
{
    if(event.key == "Enter")
    {
        additem();
    }
})


function additem()
{
    var h2=document.createElement('h2');
    h2.innerHTML="-"+input.value;

    h2.addEventListener("click",function()
    {
        h2.style.textDecoration="line-through";
    })

    allitem.insertAdjacentElement("beforeend",h2);

    input.value="";
}