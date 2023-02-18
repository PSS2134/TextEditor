// console.log("wlcome")
let input=document.getElementById("content1")


console.log(input);
// input.addEventListener("onkeypress",()=>{
//     console.log(input.value);
// })
let text=input.value;
// console.log(text);

let Bold=document.getElementById("bold");//  get element by class kyun nahi work kar rha aur queryselector waala bhi nahi chal rha hai
// console.log(Bold);
input.style.fontWeight="normal";//input ka fontweight null dikha rha tha(console.log(input.style.fontweight karke dekhlo iske bina)) so pehle normal karde rahe hain
Bold.addEventListener("click", function(){
    if(input.style.fontWeight=="normal")
    {
        input.style.fontWeight="bold";//input.style.fontWeight use kar rahe hain input.value.style.fontWeight nahi as input.value ek value return karde jo quotes me hoga "" jo ab string nahi hai so no styling but input me string hoga jiska styling jo string me hota hai font and all ho sakta hai      
        
    }
    else{
        input.style.fontWeight="normal"
       
    }
   
    
    // console.log(text); --> THis is not working because pehle hi text ko input.value se empty string store ho jaa raha hai text me and we are writing then also the text value is same but now hum usi instant pe input.value karke us instant ka text nikaal rahe hain
    
    });
    //Italics
    input.style.fontStyle="normal";
    let Italics=document.getElementById("italics");
    Italics.addEventListener("click",function(){

        if(input.style.fontStyle=="normal")
        {
            input.style.fontStyle="italic";
        }
        else{
            input.style.fontStyle="normal";
        }

    });
//Underline
    input.style.textDecoration="none";//normal jaisa kuch nahi hota bkl
    
    let Underline=document.getElementById("underline");
    Underline.addEventListener("click",function(){
        // console.log(input.style.textDecoration);
        if(input.style.textDecoration=="none")
        {
            input.style.textDecoration="underline";
            console.log(input.style.textDecoration);
        }
        else{
            input.style.textDecoration="none";
        }

    });

    let change=document.getElementById("Heading");
    let header=document.getElementById("name");
    header.contentEditable="false";
    change.addEventListener("click",function()
    {
        if(header.contentEditable=="false")
        {
            header.contentEditable="true";
            change.innerHTML="Save"
        }
        else{
            header.contentEditable="false";
            change.innerHTML="Edit"
        }
        // console.log(header.contentEditable)
       
    });