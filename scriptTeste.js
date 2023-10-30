let $eixo = document.getElementById('eixo')
        let $pergunta = document.getElementById('pergunta')

        let eixos = ['Eixo 1', 'Eixo 2', 'Eixo 3', 'Eixo 4', 'Eixo 5']
        let perguntas = ['E1P1', 'E1P2', 'E1P3','E2P1', 'E2P2', 'E2P3', 'E2P4', 'E2P5', 'E2P6', 'E2P7', 'E2P8', 'E2P9', 'E2P10,', 'E2P11', 'E2P12', 'E2P13', 'E2P14', 'E2P15', 'E2P16' ,'E3P1', 'E3P2', 'E3P3', 'E3P4', 'E3P5', 'E3P6', 'E3P7', 'E3P8', 'E3P9', 'E3P10', 'E3P11', 'E3P12', 'E3P13', 'E3P14', 'E3P15', 'E3P16', 'E3P17', 'E3P18', 'E3P19', 'E3P20', 'E3P21', 'E3P22' , 'E4P1', 'E4P2', 'E4P3', 'E4P4', 'E4P5', 'E4P6', 'E4P7', 'E4P8', 'E4P9', 'E4P10', 'E4P11', 'E4P12', 'E4P13', 'E4P14', 'E4P15', 'E4P16', 'E4P17', 'E4P18', 'E4P19', 'E4P20', 'E4P21', 'E422', 'E4P22', 'E4P23', 'E4P24', 'E4P25', 'E4P26' , 'E5P1', 'E5P2', 'E5P3', 'E5P4', 'E5P5', 'E5P6', 'E5P7', 'E5P8', 'E5P9', 'E5P10', 'E5P11', 'E5P12', 'E5P13', 'E5P14', 'E5P15', 'E5P16', 'E5P17', 'E5P18', 'E5P19', 'E5P20', 'E5P21', 'E5P22', 'E5P23', 'E5P24', 'E5P25', 'E5P26', 'E5P27', 'E5P28', 'E5P29', 'E5P30', 'E5P31', 'E5P32', 'E5P33', 'E5P34']

        function mostrarOpcao(arreglo, lugar){
            let elementos = '<option selected disables>--Selecionar--</option>'

            for(let i = 0; i < arreglo.length; i++) {
                elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
            }

            lugar.innerHTML = elementos
        }

        mostrarOpcao(eixos, $eixo)

        function recortar(array, inicio, fim, lugar){
            let recortar = array.slice(inicio, fim)
            mostrarOpcao(recortar, lugar)
        }




        $eixo.addEventListener('change', function() {
            let valor = $eixo.value

            switch(valor) {
                case 'Eixo 1' :
                     recortar(perguntas, 0, 3, $pergunta)
                    break;

                case 'Eixo 2' : 
                    recortar(perguntas, 3, 19, $pergunta)
                    break;

                case 'Eixo 3' : 
                    recortar(perguntas, 19, 41, $pergunta)
                    break;

                case 'Eixo 4' : 
                    recortar(perguntas, 41, 68, $pergunta)
                    break;

                    case 'Eixo 5' : 
                    recortar(perguntas, 68, 102, $pergunta)
                    break;


            }
        })


        let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let aside = document.querySelector('aside')
let main = document.querySelector('main')
let footer = document.querySelector('footer')



trilho.addEventListener('click', () =>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    aside.classList.toggle('dark')
    main.classList.toggle('dark')
    footer.classList.toggle('dark')
    
   
})

trilho.addEventListener('click', () =>{
    trilho.classList.toggle('light')
    body.classList.toggle('light')
    aside.classList.toggle('light')
    aside.classList.toggle('light')
    footer.classList.toggle('light')
    
    
})


        const categoria = [
            { name: 'Discentes', data: [0.69, 12.41, 8.2, 26.21, 40.69, 11.72, 0] },
            { name: 'Docentes', data: [0, 1.79, 1.79, 8.93, 57.14, 30.36, 0] },
            { name: 'TAE', data: [0, 6.25, 3.13, 18.75, 56.25, 15.63, 0.0] }
        ];

        const curso = [
            { name: 'Engenharia de Controle e Automação', data: [0.0, 6.90, 17.24, 13.79, 48.28, 13.79, 0] },
            { name: 'Licenciatura em Matemática', data: [0, 12.20, 4.88, 21.95, 51.22, 9.76, 0] },
            { name: 'Tecnologia em Análise e Desenvolvimento de Sistemas', data: [0, 14.29, 7.14, 34.29, 31.43, 12.86, 0.0] }
        ];

        const labels = ['Não se aplica', 'Desconheço', 'Ruim', 'Razoável', 'Bom', 'Ótimo', 'Sem resposta'];

        var ctx = document.getElementById('orders').getContext('2d');
        var ctx2 = document.getElementById('cursos').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: categoria.map((order, index) => ({
                    label: order.name,
                    data: order.data,
                    backgroundColor: index === 0 ? 'blue' : index === 1 ? 'red' : 'gold'
                })),
            },
            options: {
                animation: {
                    delay: (context) => {
                        return context.dataIndex * 100;
                    },
                    duration: 1000,
                    easing: 'easeOutBounce'
                },

                plugins: {
            legend: {
                position: 'bottom' // Posição da legenda na parte inferior
            },
            title: {
                display: true,
                text: 'E1Q1' // Título do gráfico
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: function(value) {
                    return value + '%'; // Adiciona o símbolo % aos rótulos
                }
            }
        },
        scales: {
            x: {
                stacked: false // Barras agrupadas no eixo X
            },
            y: {
                stacked: false, // Barras agrupadas no eixo Y
                suggestedMax: 60, // Define o valor máximo sugerido
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo % aos valores do eixo Y
                    }
                }
            }
        }  
            },
        });

        const myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: curso.map((curso, index) => ({
                    label: curso.name,
                    data: curso.data,
                    backgroundColor: index === 0 ? 'red' : index === 1 ? 'lime' : 'deepskyblue',
                })),
            },
            options: {
                animation: {
                    delay: (context) => {
                        return context.dataIndex * 100;
                    },
                    duration: 1000,
                    easing: 'easeOutBounce',
                },
                
                scales: {
            x: {
                stacked: false // Barras agrupadas no eixo X
            },
            y: {
                stacked: false, // Barras agrupadas no eixo Y
                suggestedMax: 60, // Define o valor máximo sugerido
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo % aos valores do eixo Y
                    }
                }
            }
        }     
            },
        });