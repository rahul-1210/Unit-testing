const km=document.getElementById('km');
const min=document.getElementById('min');
const calfarebtn=document.getElementById('cal-fare');



calfarebtn.addEventListener('click',async()=>{

const res=await axios.post('/calfare',{km:km.value,min:min.value})

console.log(res);
})