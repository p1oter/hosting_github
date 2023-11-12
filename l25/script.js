document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.triangle-green').addEventListener('mouseover', () => {
        document.querySelector('.triangle').style.backgroundColor = 'green'
    })
    document.querySelector('.triangle-blue').addEventListener('mouseover', () => {
        document.querySelector('.triangle').style.backgroundColor = 'blue'
    })
    document.querySelector('.triangle-red').addEventListener('mouseover', () => {
        document.querySelector('.triangle').style.backgroundColor = 'red'
    })
    document.querySelector('.triangle-yellow').addEventListener('mouseover', () => {
        document.querySelector('.triangle').style.backgroundColor = 'yellow'
    })
    document.querySelector('.triangle-green').addEventListener('mouseleave', () => {
        document.querySelector('.triangle').style.backgroundColor = 'transparent'
    })
    document.querySelector('.triangle-blue').addEventListener('mouseleave', () => {
        document.querySelector('.triangle').style.backgroundColor = 'transparent'
    })
    document.querySelector('.triangle-red').addEventListener('mouseleave', () => {
        document.querySelector('.triangle').style.backgroundColor = 'transparent'
    })
    document.querySelector('.triangle-yellow').addEventListener('mouseleave', () => {
        document.querySelector('.triangle').style.backgroundColor = 'transparent'
    })


    document.querySelector('.platki_button').addEventListener('mousedown', () => {
        document.querySelector('.dot1').style.opacity = 100;
        document.querySelector('.dot2').style.opacity = 100;
        document.querySelector('.dot3').style.opacity = 100;
        document.querySelector('.dot4').style.opacity = 100;
        document.querySelector('.dot5').style.opacity = 100;
        document.querySelector('.dot6').style.opacity = 100;
    })

    document.querySelector('.platki_button').addEventListener('mouseup', () => {
        document.querySelector('.dot1').style.opacity = 0;
        document.querySelector('.dot2').style.opacity = 0;
        document.querySelector('.dot3').style.opacity = 0;
        document.querySelector('.dot4').style.opacity = 0;
        document.querySelector('.dot5').style.opacity = 0;
        document.querySelector('.dot6').style.opacity = 0;
    })
})