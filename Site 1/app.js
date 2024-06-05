const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
    });
});

const hiddenElements = document.querySelectorAll('.con2');