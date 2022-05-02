const container = document.querySelector('.container')

const thanks = document.querySelector('.thanks')
console.log(thanks)
const button = document.querySelector(".btn")
const ratList = document.querySelectorAll('.rate')
const msg = document.getElementById('msg')



ratList.forEach(item=> {
    item.addEventListener('click', function() {
        msg.textContent = `You selected ${item.innerText} out of 5`
        button.addEventListener('click', ()=> {
            container.classList.add('hide')
            thanks.classList.add('show')
        })
    })
})