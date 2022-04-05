Has Balance Brackets

const openingBrackets = ['(', '{', '[']
const closingBrackets = [')','{',']']

const brackets = {
'(':')',
'{': '}',
'[':']'
}

//metemos los brackets que abran para formar una estructura de datos que me permita las in firs out;
const openingBrackets=[];

for (const bracket of string){
	if(brackets[bracket]){            //aca busca si es una apertura y de ser asi luego la pushea en el array de oppenings
	openingBrackets.push(bracket)
	}else{
		const lasOpeningBracket = oppeningBrackets[oppeningBrackets.length - 1]
		if(brackets[lastOppeningBracket] === bracket){
		oppeningBrackets.pop()
		} else return false
	}
}
if (oppeningBrackets.length) return false; //se puede reemplazar por return !openingBrackets.length

////////////////////////////////

