function sensor(){
    const censoredArr = [];
    return function(str1, str2 = ''){
        if (str2) {
            sensorArr.push([str1, str2]);
        } else {
            for (let pair of sensoredArr) {
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }
            return str1;
        }
    }
}
const changeScene = sensor();
changeScene('PHP', 'Js');
changeScene('backend', 'frontend');
console.log(changeScene('PHP is the most popular programming language for backend web-development'));//Должно распечатать: JS is the most popular programming language for frontend web-development