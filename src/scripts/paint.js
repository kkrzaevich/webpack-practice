export function paintRed() {
    document.querySelector("button").addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("red");
    })
} 
