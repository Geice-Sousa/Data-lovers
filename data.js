export const searchByName =  (characters, name) => {
  const filterName = characters.filter(function(character) {
    const filteredSearch = character.name.toLowerCase().includes(name);//***toLowerCase() O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo
    //***includes() O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
    return filteredSearch;
  });
  return filterName;
} 
  
export const filter = (characters, value, key) => {
  const filterData = characters.filter(function(character) {
    const filterSearch = character[key].toLowerCase() === value;
    return filterSearch;
  });
  return filterData;
}  

export const alphabeticalOrder = (value, characters) => {
  const filterOrder = [...characters]
  if(value === "a-z"){
    filterOrder.sort(function(a,b){
      if (a.name < b.name){
        return -1
      }
      return 1
    })
  }
  else if (value === "z-a") {
    filterOrder.sort(function(a,b){
      if(a.name < b.name){
        return 1;
      }
      return -1;
    })
  }
  return filterOrder
}

export const calculatePercentage = (dataList, dataListFiltered)=> {    
  return parseInt((dataListFiltered*100)/dataList)
}
    


