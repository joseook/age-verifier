document.addEventListener('DOMContentLoaded', () => {
    let res = document.getElementById('res');
    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        let yearInput = Number(document.getElementById('year').value);

        if (isNaN(yearInput)) {
            alert('Somente números na área de nascimento, por favor!.');
        } else {
            let date = new Date();
            let idade = date.getFullYear() - yearInput;

            if (yearInput.length == 0 || yearInput > date.getFullYear()) {
                alert('Verifique os dados e tente novamente!');
            } else {
                let fsex = document.getElementsByName('gender');
                let gender = '';
                let imgSrc = '';
                
                // Crie o elemento img aqui
                let img = document.createElement('img');
                img.setAttribute('id', 'foto');

                if (fsex[0].checked) {
                    gender = 'Homem';

                    if (idade >= 0 && idade < 10) {
                        let babyImgsMale = [
                            './img/baby-m.jpg',
                            './img/baby-m02.jpg',
                        ];

                        imgSrc = babyImgsMale[Math.floor(Math.random() * babyImgsMale.length)];

                    } else if (idade < 18) {
                        let maleTeenImages = [
                            './img/teen.jpg',
                            './img/teen02.jpg',
                            './img/teen03.jpg',
                        ];

                        imgSrc = maleTeenImages[Math.floor(Math.random() * maleTeenImages.length)];

                    } else if (idade > 18 && idade < 30) {
                        let imgMalesYoungAdult = [
                            './img/man.jpg',
                            './img/man03.jpg',
                            './img/man04.jpg',
                        ];

                        imgSrc = imgMalesYoungAdult[Math.floor(Math.random() * imgMalesYoungAdult.length)];

                    } else if (idade < 50) {
                        let maleAdultImages = [
                            './img/adult-m-1.jpg',
                            './img/adult-m-2.jpg',
                            './img/adult-m-3.jpg',
                            './img/adult-m-4.jpg',
                        ];

                        imgSrc = maleAdultImages[Math.floor(Math.random() * maleAdultImages.length)];

                    } else {
                        let maleElderlyImages = [
                            './img/old.jpg',
                            './img/old02.jpg',
                        ];

                        imgSrc = maleElderlyImages[Math.floor(Math.random() * maleElderlyImages.length)];
                    }

                } else if (fsex[1].checked) {
                    gender = 'Mulher';

                    if (idade >= 0 && idade < 10) {
                        let babyImgsFemale = [
                            './img/baby-f.jpg',
                            './img/baby-f02.jpg',
                        ];

                        imgSrc = babyImgsFemale[Math.floor(Math.random() * babyImgsFemale.length)];

                    } else if (idade < 18) {
                        let femaleTeenImages = [
                            './img/teen-f1.jpg',
                            './img/teen-f2.jpg',
                            './img/teen-f3.jpg',
                        ];

                        imgSrc = femaleTeenImages[Math.floor(Math.random() * femaleTeenImages.length)];

                    } else if (idade > 18 && idade < 25) {
                        let femaleYoungAdultImages = [
                            './img/woman.jpg',
                            './img/woman02.jpg',
                        ];

                        imgSrc = femaleYoungAdultImages[Math.floor(Math.random() * femaleYoungAdultImages.length)];

                    } else if (idade < 50) {
                        let femaleAdultImages = [
                            './img/woman03.jpg',
                        ];

                        imgSrc = femaleAdultImages[Math.floor(Math.random() * femaleAdultImages.length)];

                    } else {
                        let femaleElderlyImages = [
                            './img/old-woman.jpg',
                            './img/old-woman02.jpg',
                        ];

                        imgSrc = femaleElderlyImages[Math.floor(Math.random() * femaleElderlyImages.length)];
                    }
                }

                img.setAttribute('src', imgSrc);
                res.style.textAlign = 'center';
                res.innerHTML = `Detectamos ${gender} com ${idade} anos.`;
                res.appendChild(img);
            }
        }
    });
});
