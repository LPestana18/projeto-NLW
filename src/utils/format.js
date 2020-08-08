const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física", 
    "Geografia",
    "História",
    "Matematica",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//Funcionalidades 

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}