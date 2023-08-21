document.getElementById("intro-btn").addEventListener('click', (e) => {
    document.getElementById("intro-msg").style.display = `block`
    document.getElementById("hobbies-msg").style.display = `none`
    document.getElementById("likes-msg").style.display = `none`
})
document.getElementById("hobbies-btn").addEventListener('click', (e) => {
    document.getElementById("intro-msg").style.display = `none`
    document.getElementById("hobbies-msg").style.display = `block`
    document.getElementById("likes-msg").style.display = `none`
})
document.getElementById("likes-btn").addEventListener('click', (e) => {
    document.getElementById("intro-msg").style.display = `none`
    document.getElementById("hobbies-msg").style.display = `none`
    document.getElementById("likes-msg").style.display = `block`
})



document.getElementById("home-nav").addEventListener('click', (e) => {
    document.getElementById("home-view").scrollIntoView({ behavior: 'smooth' });      
})
document.getElementById("about-nav").addEventListener('click', (e) => {
    document.getElementById("about-view").scrollIntoView({ behavior: 'smooth' });      
})
document.getElementById("contact-nav").addEventListener('click', (e) => {
    document.getElementById("contact-view").scrollIntoView({ behavior: 'smooth' });      
})