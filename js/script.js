let messages = [
    "Eid Mubarak! Que cette journée bénie vous apporte la joie et le bonheur.",
    "Que cette occasion spéciale d'Eid illumine votre vie de bonheur, de succès et de prospérité.",
    "Que le doux parfum des fleurs d'Eid vous rappelle les moments de bonheur partagés en famille et entre amis.",
    "Eid Mubarak! Puisse Allah exaucer tous vos souhaits et vous accorder une vie remplie de bonheur et de prospérité.",
    "Que les bénédictions d'Eid vous apportent la paix et la joie dans votre vie.",
    "Eid Mubarak! Que chaque instant de cette journée soit rempli de souvenirs précieux et de moments heureux.",
    "Que la magie d'Eid illumine votre vie et vous apporte de la joie et du bonheur sans fin.",
    "Eid Mubarak! Que cette journée spéciale vous comble de bonheur et vous apporte de merveilleux souvenirs."
];

let btn = document.getElementById("btn");
let message = document.getElementById("message");

btn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * messages.length);
    let randomMessage = messages[randomIndex];
    let myName = "Alpha";

    let messageWithMyName = randomMessage.replace("Eid Mubarak", "Eid Mubarak, " + myName);
    message.textContent = messageWithMyName;
});