 //esto te separa el haystack en un array de 2 elementos el lenght del primer elemento es el indice donde comienza el needle



if (!haystack.includes(needle)) return -1
 const res = haystack.split(needle)
 return res[0].length

//////////

for( let i=0; i< heystack.length ; i++){
	for( let j=0; i< needle.length ; j++){
		if (haystack[i+j] !==needle[j])
		if(j==needle.lenght-1) return i

	}
}
return -1
///////

 for (let i = 0; i < haystack.length; i++) {
      const element = haystack[i];
      
    let result = haystack.slice([i], needle.length+[i]);
    if(result === needle){
      return [i]
    }
    }
  return -1

//////////
//va cortando el heystack 

for( let i=0; i< heystack.length ; i++){
	if(haystack.slice(i, i+needle.length)===needle) return i

}
return -1

////////////////

let needleLength = needle.length;
let haystackLength = haystack.length;
  if (needleLength === 0) return 0;
for(i = 0; i < haystackLength; i++) {
    if (haystack.substr(i, needleLength === needle) return i;
  }
  
  return -1;
