document.addEventListener('DOMContentLoaded', () => {
    // Obtém a referência para o elemento de resultado e o botão
    let res = document.getElementById('res');
    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        // Obtém o ano de nascimento digitado e calcula a idade
        let yearInput = Number(document.getElementById('year').value);

        if (isNaN(yearInput)) {
            // Se o ano não for um número, exibe um alerta
            alert('Somente números na área de nascimento, por favor!.');
        } else {
            // Obtém a data atual e calcula a idade
            let date = new Date();
            let idade = date.getFullYear() - yearInput;

            if (yearInput.length == 0 || yearInput > date.getFullYear()) {
                // Verifica se o ano inserido é válido
                alert('Verifique os dados e tente novamente!');
            } else {
                // Obtém o gênero selecionado
                let fsex = document.getElementsByName('gender');
                let gender = '';
                let imgSrc = '';
                
                // Cria um elemento img
                let img = document.createElement('img');
                img.setAttribute('id', 'foto');

                if (fsex[0].checked) {
                    // Se o gênero for masculino
                    gender = 'Homem';

                    if (idade >= 0 && idade < 10) {
                        // Faixa etária: 0-9 anos
                        let babyImgsMale = [
                            './img/baby-m.jpg',
                            './img/baby-m02.jpg',
                        ];

                        imgSrc = babyImgsMale[Math.floor(Math.random() * babyImgsMale.length)];

                    } else if (idade < 18) {
                        // Faixa etária: 10-17 anos
                        let maleTeenImages = [
                            './img/teen.jpg',
                            './img/teen02.jpg',
                            './img/teen03.jpg',
                        ];

                        imgSrc = maleTeenImages[Math.floor(Math.random() * maleTeenImages.length)];

                    } else if (idade > 18 && idade < 30) {
                        // Faixa etária: 18-29 anos
                        let imgMalesYoungAdult = [
                            './img/man.jpg',
                            './img/man03.jpg',
                            './img/man04.jpg',
                        ];

                        imgSrc = imgMalesYoungAdult[Math.floor(Math.random() * imgMalesYoungAdult.length)];

                    } else if (idade < 50) {
                        // Faixa etária: 30-49 anos
                        let maleAdultImages = [
                            './img/adult-m-1.jpg',
                            './img/adult-m-2.jpg',
                            './img/adult-m-3.jpg',
                            './img/adult-m-4.jpg',
                        ];

                        imgSrc = maleAdultImages[Math.floor(Math.random() * maleAdultImages.length)];

                    } else {
                        // Faixa etária: 50 anos ou mais
                        let maleElderlyImages = [
                            './img/old.jpg',
                            './img/old02.jpg',
                        ];

                        imgSrc = maleElderlyImages[Math.floor(Math.random() * maleElderlyImages.length)];
                    }

                } else if (fsex[1].checked) {
                    // Se o gênero for feminino
                    gender = 'Mulher';

                    if (idade >= 0 && idade < 10) {
                        // Faixa etária: 0-9 anos
                        let babyImgsFemale = [
                            './img/baby-f.jpg',
                            './img/baby-f02.jpg',
                        ];

                        imgSrc = babyImgsFemale[Math.floor(Math.random() * babyImgsFemale.length)];

                    } else if (idade < 18) {
                        // Faixa etária: 10-17 anos
                        let femaleTeenImages = [
                            './img/teen-f1.jpg',
                            './img/teen-f2.jpg',
                            './img/teen-f3.jpg',
                        ];

                        imgSrc = femaleTeenImages[Math.floor(Math.random() * femaleTeenImages.length)];

                    } else if (idade > 18 && idade < 25) {
                        // Faixa etária: 18-24 anos
                        let femaleYoungAdultImages = [
                            './img/woman.jpg',
                            './img/woman02.jpg',
                        ];

                        imgSrc = femaleYoungAdultImages[Math.floor(Math.random() * femaleYoungAdultImages.length)];

                    } else if (idade < 50) {
                        // Faixa etária: 25-49 anos
                        let femaleAdultImages = [
                            './img/woman03.jpg',
                        ];

                        imgSrc = femaleAdultImages[Math.floor(Math.random() * femaleAdultImages.length)];

                    } else {
                        // Faixa etária: 50 anos ou mais
                        let femaleElderlyImages = [
                            './img/old-woman.jpg',
                            './img/old-woman02.jpg',
                        ];

                        imgSrc = femaleElderlyImages[Math.floor(Math.random() * femaleElderlyImages.length)];
                    }
                }

                // Configura a imagem e exibe os resultados
                img.setAttribute('src', imgSrc);
                res.style.textAlign = 'center';
                res.innerHTML = `Detectamos ${gender} com ${idade} anos.`;
                res.appendChild(img);
            }
        }
    });
});
