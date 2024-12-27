function start() {
    var rotator = document.getElementById('rotator');  
    var rotator2 = document.getElementById('rotator2');  
    var imageDir1 = '.\\images\\rotationCycleTop\\';
    var imageDir2 = '.\\images\\rotationCyclePortfolio\\';                          
    var delayInSeconds = 1.5;                            

    var topProjects = ['Hamster.jpg', 'Koenigsegg.jpg', 'Amigos.png', 'Piano.jpg','Arduino.jpg'];
    var portfolioProjects = ['ContentImg.png', 'HciImg.png', 'InformatieArchitectuurImg.png', 'InternetImg.png', 'MaatschappijImg.png', 'NPDImg.png', 'OGImg.jpg', 'SoundMachine.jpg', 'Team1Img.png', 'UCDImg.png', 'VidImg.png', 'Vormgeving2.jpg', 'VormgevingImg.png'];

    var num = 0;
    var num2 = 0;
    var changeImage = function() {
        var len = topProjects.length;
        var len2 = portfolioProjects.length;
        rotator.src = imageDir1 + topProjects[num++];
        rotator2.src = imageDir2 + portfolioProjects[num2++];
        if (num == len) {
            num = 0;
        }
        if (num2 == len2) {
            num2 = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function(){
start();
}
