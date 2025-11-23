function comparar() {
    const v1 = document.getElementById("v1").value.trim(); //trim elimina espaços antes e depois
    const v2 = document.getElementById("v2").value.trim();
    const res = document.getElementById("res1");

    // validação
    if (v1 === "" || v2 === "") { //três iguais para ser mais específico, verifica o valor e o tipo
        res.value = "Preenche os dois valores!";
        return;
    }

    if (isNaN(v1) || isNaN(v2)) {
        res.value = "Só números são permitidos!";
        return;
    }

    // conversão
    const n1 = Number(v1);
    const n2 = Number(v2);

    let texto = "";

    if (n1 === n2) { 
        texto = `Os valores são iguais (${n1}).`;
    } else {
        const maior = Math.max(n1, n2);
        const menor = Math.min(n1, n2);
        texto = `Maior: ${maior} | Menor: ${menor} | São diferentes.`; //$ serve para inserir variáveis dentro de strings
    }

    res.value = texto;
}

function comparar3() {
    const t1 = document.getElementById("t1").value.trim();
    const t2 = document.getElementById("t2").value.trim();
    const t3 = document.getElementById("t3").value.trim();
    const res = document.getElementById("res2");

    // validação
    if (t1 === "" || t2 === "" || t3 === "") {
        res.value = "Preenche todos os valores.";
        return;
    }

    if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
        res.value = "Só números são permitidos.";
        return;
    }

    const n = [Number(t1), Number(t2), Number(t3)]; // array com os 3 números

    const maior = Math.max(...n);  // ... separam array em valores separados para a função os "ler", porque a função não aceita arrays    
    const menor = Math.min(...n);
    
    let texto = "";

    if (n[0] === n[1] && n[1] === n[2]) {
        texto = `Os 3 valores são iguais (${n[0]}).`;
    } else {
        texto = `Maior: ${maior} | Menor: ${menor} | Existem diferenças.`;
    }

    res.value = texto;
}