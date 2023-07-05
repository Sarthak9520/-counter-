



const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')


let count = 0

 btns.forEach((btn)=> {
    btn.addEventListener('click' , (e) => {
        const styles = e.currentTarget.classList
        
        if(styles.contains('increment')){
            count++
          
            } else if(styles.contains('decrement')){
                    count--
            }
            
            counter.textContent = count
    })
})
