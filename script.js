const display=document.querySelector('.display-value');
const btns=document.querySelectorAll('.calc-button');
const clear=document.querySelector('#clear');
const equal=document.querySelector('#equal');

btns.forEach(btn=>
{
    btn.addEventListener("click", (e)=>
    {
        display.value+=e.target.value
    })

})

equal.addEventListener("click", (e)=>
{
    if(display.value.includes('+'))
    {
        const a=display.value.split('+')
        display.value =Number(a[0]) + Number(a[1])
    }
    else if(display.value.includes('-'))
    {
        const a=display.value.split('-')
        display.value =Number(a[0]) - Number(a[1])
    }
    else if(display.value.includes('*'))
    {
        const a=display.value.split('*')
        display.value =Number(a[0]) * Number(a[1])
    }
    else if(display.value.includes('/'))
    {
        const a=display.value.split('/')
        if(a[1]==0)
        {
            display.value ="0-a bolmek olmaz"
        }
        else{
        display.value =Number(a[0]) / Number(a[1])}
    }
    else if(display.value.includes('%'))
    {
        const a=display.value.split('%')
        display.value =(Number(a[0]) * Number(a[1])) /100
    }
})

clear.addEventListener("click", (e)=>
{
    display.value=" "
})