var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var lista = [];
var cont = 0;
while (cont < 3) {
    do {
        var num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    } while (lista.includes(num));
    lista.push(num);
    cont++;
}

lista.forEach(function (elemento, index, array) {
    if (index == 0) {
        switch (elemento) {
            case 1:
                t1.innerHTML = "1. Alimentação Balanceada";
                d1.innerHTML = "Mantenha uma dieta equilibrada, rica em frutas, vegetais, proteínas magras, grãos integrais e alimentos ricos em fibras. Evite o excesso de alimentos processados, açúcares refinados e gorduras saturadas.";
                break;
            case 2:
                t1.innerHTML = "1. Atividade Física Regular";
                d1.innerHTML = "Pratique exercícios regularmente para manter seu corpo ativo e saudável. Tente incluir uma combinação de exercícios aeróbicos, treinamento de força e flexibilidade em sua rotina.";
                break;
            case 3:
                t1.innerHTML = "1. Hidratação Adequada";
                d1.innerHTML = "Beba bastante água ao longo do dia para manter seu corpo hidratado. A quantidade exata pode variar de pessoa para pessoa, mas um bom objetivo é consumir cerca de 2 litros de água por dia.";
                break;
            case 4:
                t1.innerHTML = "1. Sono de Qualidade";
                d1.innerHTML = "Priorize o sono adequado, geralmente entre 7 a 9 horas por noite. O sono é essencial para a recuperação do corpo e a saúde mental.";
                break;
            case 5:
                t1.innerHTML = "1. Gerenciamento do Estresse";
                d1.innerHTML = "Encontre maneiras saudáveis de lidar com o estresse, como a prática de técnicas de relaxamento, meditação, ioga ou hobbies que tragam prazer.";
                break;
            case 6:
                t1.innerHTML = "1. Consultas Médicas Regulares";
                d1.innerHTML = "Faça check-ups médicos regulares para monitorar sua saúde e detectar problemas precocemente. Não ignore exames preventivos, como exames de sangue e mamografias.";
                break;

        }
    }

    if (index == 1) {
        switch (elemento) {
            case 1:
                t2.innerHTML = "2. Alimentação Balanceada";
                d2.innerHTML = "Mantenha uma dieta equilibrada, rica em frutas, vegetais, proteínas magras, grãos integrais e alimentos ricos em fibras. Evite o excesso de alimentos processados, açúcares refinados e gorduras saturadas.";
                break;
            case 2:
                t2.innerHTML = "2. Atividade Física Regular";
                d2.innerHTML = "Pratique exercícios regularmente para manter seu corpo ativo e saudável. Tente incluir uma combinação de exercícios aeróbicos, treinamento de força e flexibilidade em sua rotina.";
                break;
            case 3:
                t2.innerHTML = "2. Hidratação Adequada";
                d2.innerHTML = "Beba bastante água ao longo do dia para manter seu corpo hidratado. A quantidade exata pode variar de pessoa para pessoa, mas um bom objetivo é consumir cerca de 2 litros de água por dia.";
                break;
            case 4:
                t2.innerHTML = "2. Sono de Qualidade";
                d2.innerHTML = "Priorize o sono adequado, geralmente entre 7 a 9 horas por noite. O sono é essencial para a recuperação do corpo e a saúde mental.";
                break;
            case 5:
                t2.innerHTML = "2. Gerenciamento do Estresse";
                d2.innerHTML = "Encontre maneiras saudáveis de lidar com o estresse, como a prática de técnicas de relaxamento, meditação, ioga ou hobbies que tragam prazer.";
                break;
            case 6:
                t2.innerHTML = "2. Consultas Médicas Regulares";
                d2.innerHTML = "Faça check-ups médicos regulares para monitorar sua saúde e detectar problemas precocemente. Não ignore exames preventivos, como exames de sangue e mamografias.";
                break;

        }


    }

    if (index == 2) {
        switch (elemento) {
            case 1:
                t3.innerHTML = "3. Alimentação Balanceada";
                d3.innerHTML = "Mantenha uma dieta equilibrada, rica em frutas, vegetais, proteínas magras, grãos integrais e alimentos ricos em fibras. Evite o excesso de alimentos processados, açúcares refinados e gorduras saturadas.";
                break;
            case 2:
                t3.innerHTML = "3. Atividade Física Regular";
                d3.innerHTML = "Pratique exercícios regularmente para manter seu corpo ativo e saudável. Tente incluir uma combinação de exercícios aeróbicos, treinamento de força e flexibilidade em sua rotina.";
                break;
            case 3:
                t3.innerHTML = "3. Hidratação Adequada";
                d3.innerHTML = "Beba bastante água ao longo do dia para manter seu corpo hidratado. A quantidade exata pode variar de pessoa para pessoa, mas um bom objetivo é consumir cerca de 2 litros de água por dia.";
                break;
            case 4:
                t3.innerHTML = "3. Sono de Qualidade";
                d3.innerHTML = "Priorize o sono adequado, geralmente entre 7 a 9 horas por noite. O sono é essencial para a recuperação do corpo e a saúde mental.";
                break;
            case 5:
                t3.innerHTML = "3. Gerenciamento do Estresse";
                d3.innerHTML = "Encontre maneiras saudáveis de lidar com o estresse, como a prática de técnicas de relaxamento, meditação, ioga ou hobbies que tragam prazer.";
                break;
            case 6:
                t3.innerHTML = "3. Consultas Médicas Regulares";
                d3.innerHTML = "Faça check-ups médicos regulares para monitorar sua saúde e detectar problemas precocemente. Não ignore exames preventivos, como exames de sangue e mamografias.";
                break;

        }


    }
})