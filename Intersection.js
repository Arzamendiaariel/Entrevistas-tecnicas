Intersection//// 2 array ordenados!!

const result = []
arr1.forEach(num=>{
if (arr2.includes(num))result.push(num)
})
return result

/////////////////////

const result = []
arr1.forEach(num=>{
	arr2.forEach(num2=>{
		if(num===num2) result.push(num)
	})
})
return result

//////////////

const result = []

let i =0
let j =0

while (i<arr1.length && j < arr2.length){
	const num1=arr1[i]
	const num2 = arr2[j]
	if(num1==num2){
		result.push(num1)
		i++
		j++
	}
	else if if(num1< num2) i++
	else j++
	}
return result

////////////////////////////si los array estan desordenados

const result= []

const hashMap={}

for(const num of arr1) hashMap[num]=true;
for(const num2 of arr2){
	if(hash.Map[num2]) result.push(num2)
}
return result


////////////////////

const hashMap={}

for(const num of arr1) hashMap[num]=true;
return  arr2.filter(num2=> hashMap[num2])

////////////////////

const arrayAsociativo = []
for(const num of arr1) arrayAsociativo[num]=true;
return  arr2.filter(num2=> arrayAsociativo[num2])

//////// ES6 MAP
const hashMap= new Map()
form(const num of arr1) hashMap.set(num, true)
return arr2.filter(num => hashMap.get(num))








