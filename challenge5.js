function challenge5(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    console.log("Reversed text:", reversed);
}

challenge5("Desafio 5");