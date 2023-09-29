const calcular = () => {
    var peso = (document.getElementById('valor01').value).replace(',', '.');
    var altura = (document.getElementById('valor02').value).replace(',', '.');
    var tipo = document.getElementById('tipo');
    var explicacao = document.getElementById('explicacao');
    var IMC = peso / (altura * altura);
    if (IMC < 18.5) {
        tipo.innerHTML = 'Peso abaixo da média (' + IMC.toFixed(1) + ')';
        explicacao.innerHTML = 'Peso abaixo da média no IMC é quando o índice de massa corporal de uma pessoa está abaixo da faixa considerada saudável. Isso pode indicar subnutrição ou outros problemas de saúde.';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        tipo.innerHTML = 'Peso Normal (' + IMC.toFixed(1) + ')';
        explicacao.innerHTML = 'Peso normal no Índice de Massa Corporal (IMC) refere-se a uma faixa de valores de IMC que é considerada saudável para a maioria das pessoas.Isso indica que a pessoa tem um peso que está em equilíbrio com sua altura e é associado a um menor risco de problemas de saúde relacionados ao peso';
    } else if (IMC >= 25 && IMC <= 29.9) {
        tipo.innerHTML = 'Excesso de Peso (' + IMC.toFixed(1) + ')';
        explicacao.innerHTML = 'O excesso de peso no Índice de Massa Corporal (IMC) ocorre quando o valor do IMC de uma pessoa está acima da faixa considerada saudável. Isso geralmente significa que a pessoa está carregando um peso maior em relação à sua altura, o que pode estar associado a um maior risco de problemas de saúde relacionados ao peso, como doenças cardiovasculares, diabetes tipo 2 e problemas articulares. O excesso de peso é uma preocupação de saúde e pode exigir mudanças no estilo de vida, incluindo dieta equilibrada, aumento da atividade física e acompanhamento médico para gerenciar e reduzir o excesso de peso.';
    } else if (IMC >= 30 && IMC < 35) {
        tipo.innerHTML = 'Obesidade (' + IMC.toFixed(1) + ')';
        explicacao.innerHTML = 'A obesidade no Índice de Massa Corporal (IMC) ocorre quando o valor do IMC de uma pessoa está significativamente acima da faixa considerada saudável, geralmente acima de 30. Isso indica que a pessoa está carregando um excesso de peso corporal, o que pode estar associado a riscos substanciais para a saúde, incluindo doenças cardiovasculares, diabetes tipo 2, hipertensão e outros problemas de saúde relacionados ao peso. A obesidade é uma condição séria que geralmente requer intervenções médicas, como mudanças na dieta, aumento da atividade física, terapia comportamental e, em alguns casos, cirurgia bariátrica, para gerenciar e reduzir o excesso de peso e melhorar a saúde geral.';
    } else if (IMC >= 35) {
        tipo.innerHTML = 'Obesidade Extrema (' + IMC.toFixed(1) + ')';
        explicacao.innerHTML = 'A obesidade extrema no Índice de Massa Corporal (IMC) refere-se a uma condição em que o valor do IMC de uma pessoa está muito acima da faixa considerada saudável, geralmente acima de 40. Isso indica que a pessoa está carregando um peso corporal excessivamente elevado, o que apresenta riscos graves para a saúde, incluindo maior probabilidade de doenças cardiovasculares, diabetes, apneia do sono, problemas articulares e outras complicações sérias. A obesidade extrema é uma condição médica séria que geralmente requer tratamentos intensivos, como cirurgia bariátrica, acompanhamento médico contínuo, mudanças significativas no estilo de vida e apoio psicológico para gerenciar o excesso de peso e melhorar a saúde. O tratamento da obesidade extrema deve ser realizado sob a supervisão e orientação de profissionais de saúde especializados.';
    } else {
        tipo.innerHTML = 'Algum erro ocorreu. Tente novamente!';
        explicacao.innerHTML = '';
    }
}