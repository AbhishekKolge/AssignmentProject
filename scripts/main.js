const navBtn = document.getElementById('nav-btn')
const navIcon = document.getElementById('nav-icon')
const nav = document.getElementById('mobile-nav')
const slideIndicator = document.querySelectorAll('.slider__indicator')
const sliderNext = document.getElementById('slider-next')
const sliderPrev = document.getElementById('slider-prev')
const sliderImg = document.querySelectorAll('.slider__img')
const dealsItems = document.getElementById('deals-items')
const dealsPrev = document.getElementById('deals-prev')
const dealsNext = document.getElementById('deals-next')
const dealsItem = document.querySelector('.deals__item')
const lastDealItem = document.getElementById('last-deal-item')

let scroll = ''

const toggleNav = () => {
    navIcon.classList.toggle('click')
    nav.classList.toggle('show')

    if (nav.classList.contains('show')) {
        scroll = window.scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scroll}px`
    } else {
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, scroll)
    }
}

let current = 0

const nextSlide = () => {
    const maxSlide = sliderImg.length - 1
    
    current++

    if (current > maxSlide) {
        current = 0
    }

    let previous = current - 1

    if (previous < 0) {
        previous = maxSlide
    }

    sliderImg[current].style.visibility= 'visible'
    sliderImg[current].style.opacity = '1'
    slideIndicator[current].style.background = 'var(--clr-light)'
    sliderImg[previous].style.visibility= 'hidden'
    sliderImg[previous].style.opacity = '0'
    slideIndicator[previous].style.background = 'var(--clr-secondary-2)'
}

const previousSlide = () => {
    const maxSlide = sliderImg.length - 1
    
    current--

    if (current < 0) {
        current = maxSlide
    }

    let previous = current + 1

    if (previous > maxSlide) {
        previous = 0
    }

    sliderImg[current].style.visibility= 'visible'
    sliderImg[current].style.opacity = '1'
    slideIndicator[current].style.background = 'var(--clr-light)'
    sliderImg[previous].style.visibility= 'hidden'
    sliderImg[previous].style.opacity = '0'
    slideIndicator[previous].style.background = 'var(--clr-secondary-2)'
}

const options = {
    rootMargin: '0px -200px 0px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            dealsNext.style.visibility = 'visible'
        } else {
            dealsNext.style.visibility = 'hidden'
            console.log('dasd')
        }
    })
}, options)

observer.observe(lastDealItem)

let itemWidth = dealsItem.offsetWidth
let nextValue = itemWidth

const slideLeft = () => {
    if (nextValue < 0) {
        nextValue = itemWidth
    }
    nextValue += itemWidth
    dealsItems.style.transform = `translateX(-${nextValue}px)`
    console.log(nextValue)
}

const slideRight = () => {
    nextValue -= itemWidth
    dealsItems.style.transform = `translateX(-${nextValue}px)`
    console.log(nextValue)
}

navBtn.addEventListener('click', toggleNav)
sliderNext.addEventListener('click', nextSlide)
sliderPrev.addEventListener('click', previousSlide)
dealsNext.addEventListener('click', slideLeft)
dealsPrev.addEventListener('click', slideRight)