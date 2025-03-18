const title = document.getElementById("title");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let count = 0;

btn1.addEventListener("click",()=>{
    count++;
    title.innerHTML = count;
});

btn2.addEventListener("click",()=>{
    if(count > 0)                                                                   
        {
            count--;
        }
    title.innerHTML = count;
});

btn3.addEventListener("click",()=>{
    if(count == 0)
    {
        title.innerHTML = "you cant multiply with 0 digit.";
    } else {
            count *= 2;
            title.innerHTML = count;
        }
});

btn4.addEventListener("click",()=>{
    if(count == 0)
        {
            title.innerHTML = "you cant devide with 0 digit.";
        } else {
                count /= 2;
                title.innerHTML = count;
            }
});
