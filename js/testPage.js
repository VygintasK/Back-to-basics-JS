import initNav from '../components/nav.js'
initNav()


function light(color) {
    let result

    switch (color) {

        case 'red':
            result = 'STOP!'
            break

        case 'yellow':
            result = 'get ready'
            break

        case 'green':
            result = 'can walk'
            break

        default:
            result = 'wrong input';

    }
    console.log(result)
}
light('red')


function rateGrade(grade) {
    let gradeInWord = '';
    switch (grade) {
        case 1:
        case 2:
            gradeInWord = 'Labai blogai';
            break;
        case 3:
        case 4:
            gradeInWord = 'Blogai';
            break;
        case 5:
        case 6:
            gradeInWord = 'Vidutiniškai';
            break;
        case 7:
        case 8:
            gradeInWord = 'Gerai';
            break;
        case 9:
        case 10:
            gradeInWord = 'Labai gerai';
            break;
        default:
            gradeInWord = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
    }
    return gradeInWord
}
console.log(rateGrade(5))

