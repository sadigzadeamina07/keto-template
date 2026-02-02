  const DivRoom = document.querySelector('.CardsOfRoom')
        fetch('https://6980a5df6570ee87d50fee52.mockapi.io/keto')
        .then((res)=>res.json())
        .then ((data)=>{
         alldata=data
         showcards()
        })
function showcards(){
    alldata.map((item)=>{
DivRoom.innerHTML+=`
<div class="px-[15px]">
<div class="overflow-hidden ">
<img src="${item.image}" class="w-full hover:scale-[1.2] transition-transform duration-400 ease-in-out"/>
</div>

<div class="text-center p-[30px]">
<h3 class="text-[25px] font-semibold  ">${item.title}</h3>
<p class=" w-[90%] m-auto text-[#666] font-semibold ">${item.description}</p>
</div>
</div>

`
    })
}