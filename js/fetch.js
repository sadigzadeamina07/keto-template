  const DivRoom = document.querySelector('.CardsOfRoom')
  const DivGallery = document.querySelector('.CardsOfGallery')
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
fetch('https://6980b9ab6570ee87d5102a27.mockapi.io/gallery')
.then((res)=>res.json())
.then((data)=>{
    alldataofphotos=data
    showphotocards()
})
function showphotocards(){
alldataofphotos.map((item)=>{
    DivGallery.innerHTML+=`
    <div class="m-auto w-[80%] p-[15px] md:w-full ">
 <div class="overflow-hidden">
    <img src="${item.image}" class="hover:scale-[1.2] w-full transition-transform duration-400" />
    </div>
    </div>
   
    `
})

}