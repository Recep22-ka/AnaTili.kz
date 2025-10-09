import React from "react";
<link rel="stylesheet" href=".\style.css" />

const Contact = () => {
    return(
        <div>
            <h1>Баптаулар</h1>
            <p>Сіздерде бір мәселе шықса немесе бір зат ұнамаса осында пікірлеріңізді жазыңыз</p>
            <form>
            <label for="name">Атыңыз:</label>
            <input type="text" id="name" name="name" placeholder="Атыңыз" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Емайл почтаңыз" required />

            <label for="message">Хабарлама:</label>
            <textarea name="message" id="message" placeholder="Сұрағыңызды жазыңыз" required></textarea>


            
            <button style={{ backgroundColor: "blue", color: "white", padding: "10px 20px" }}>
                Жіберу
            </button>


        </form>
        </div>
        
        
    );
};

export default Contact;