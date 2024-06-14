
let count=0
let cards=document.querySelectorAll(".content")
function toggleTheme(){
    count++;
    if(count % 2 !==0){
        document.querySelector("body").classList.remove("bg-black","text-white");
        document.querySelector("body").classList.add("bg-light","text-black");
        for(let i=0;i<cards.length;i++){
            let card = cards[i]
            card.classList.remove("bg-dark","text-light");
            card.classList.add("bg-white","text-dark");
        }
        document.querySelector('#acaTable').classList.remove("border-white","table-dark");
    }else{
        document.querySelector("body").classList.remove("bg-light","text-black");
        document.querySelector("body").classList.add("bg-black","text-white");
        for(let i=0;i<cards.length;i++){
            let card = cards[i]
            card.classList.remove("bg-white","text-black");
            card.classList.add("bg-dark","text-white");
        }
        document.querySelector('#acaTable').classList.remove("border-white","table-dark");
    }

}