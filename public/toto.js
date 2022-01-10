console.log("tamere en short")
const axiosTest =()=>{
    axios.post('/name',{test:"prout"})
}
document.querySelector('#valider').addEventListener('click',axiosTest)
