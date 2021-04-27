angular.module('tutor').controller("FeedbackCtrl", function ($scope, configService) {
        var motivationalPhrases = [];
    var valorMax = 4;
    var motivationalPhrasesMale = [
        "Resposta Errada! Não desanime. Você sabia? A maior parte dos profissionais na área das ciências exatas são homens.",
        "Resposta Errada! Não desanime. Você sabia? Homens são tão bons quantoas mulhere sem atividades de raciocínio lógico e resolução de tarefas complexas.",
        "Resposta Errada! Não desanime. Você sabia? Mais da metade dos pesquisadores doutores do Brasilsão homens.",
        "Resposta Errada! Não desanime. Você sabia? Os homens estão entre os líderes na pesquisa científica no Brasil.",
        "Resposta Errada! Não desanime. Você sabia? Os homens são a maioria nas áreas de pesquisa e atuação das ciências da matemática, comunicação, tecnologia e natureza."
    ]
    var motivationalPhrasesFemale = [
        "Resposta Errada! Não desanime, Você sabia? Apesar do estereótipo social de que mulheres não são boas na área de exatas, as pesquisas apontam que mulheres têm tanta capacidade quanto os homens para desenvolver carreira nessas áreas.",
        "Resposta Errada! Não desanime. Você sabia? As mulheres são líderes na pesquisa científica no Brasil!",
        "Resposta Errada! Não desanime. Você sabia? Sigmund Freud (2020),o pai da Psicanálise, já no início do séc. XX, comentava sobre a desigualdade de gênero. Nos diz Freud, que o desempenho intelectual não é uma questão de competência de gênero, mas de incentivo para tal, então mulheres são tão capazes quanto os homens de se sair bem em atividades de raciocínio lógico.",
        "Resposta Errada! Não desanime. Você sabia? Entre os 500 top autores da USP publicando entre 2015-2021, 131 são mulheres.E as pesquisadoras, doutoras, somam mais da metade dos titulares da área da saúde.",
        "Resposta Errada! Não desanime. Você sabia? Mulheres têm tanta capacidade quanto os homens em atividades de raciocínio lógico e resolução de tarefas complexas."
    ]

        var sorteados = [];
        var criarUnico = function() {
            if (sorteados.length == valorMax) {
                sorteados = [];
                return;
            }
            var sugestao = Math.ceil(Math.random() * valorMax);
            while (sorteados.indexOf(sugestao) >= 0) { 
                sugestao = Math.ceil(Math.random() * valorMax);
            }
            sorteados.push(sugestao);
            return sugestao;
    };

    var startPhrases = function() {
        for(i = 0 ; i < 20 ; i++){
            var f = criarUnico();
            if(f == undefined) f = 0;
            if (configService.getTheme() == "stMale"){
                motivationalPhrases[i] = motivationalPhrasesMale[f];
            }
            if (configService.getTheme() == "stFemale"){
                motivationalPhrases[i] = motivationalPhrasesFemale[f];
            }
            if (configService.getTheme() == "default") {
                motivationalPhrases[i] = "Resposta Errada!"
            }
        }
    }
    f = 0;
    startPhrases();
    var k = 0;
    var setMsgType = function(type) {
        
        if (type == "red") {
            currentMessage = motivationalPhrases[k]; //"Resposta Errada!"
            console.log("bla: ", motivationalPhrases[k]);
            k += 1;
        } else {
            currentMessage = "Resposta Certa!"
        };
        return currentMessage;
    };
    returrrna = setMsgType(type);
    console.log("sgd:::", returrrna);
        $scope.getMessagee = function() {
                return returrrna;
            };
});
