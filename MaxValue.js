MaxValue

let maxDif= shares[1] - shares[0]

for (let i = 0; i< shares.length-1; i++){
	const buy=shares[i]
	for(let j = i+1; j<shares.length; j++){
		const sell = shares[j]
		const currentDif = sell - buy
		if (currentDif>maxDif) maxDif = currentDif

	}
}
return maxDif;

////////////////////////////////////

let minPrice = shares[0]
let maxDif= shares[1] - shares[0]

shares.forEach(shares=>{
	const currentDif=share-minPrice
	if(share < minPrice) minPrice = share
	if (currentDif>maxDif) maxDif = currentDif
	
})
return maxDif;


////////////////////////////////////

function maxDiff(arr) {
 
 var diff=0
 if(arr?.length) diff=arr?.length?Math.max(...arr)-Math.min(...arr):0
 
  return diff;
}

solo para ES2020
OJO