module.exports = function towelSort (matrix) {
  array=[]
  if (arguments.length == 0 || matrix.length == 0){
    return(array);
  }
  else{
   for(var i = 0; i < matrix.length; i++){
    if(i%2==0){
      for(var j = 0; j < matrix[i].length; j++){
      array.push(matrix[i][j])
      }
    }
    else{
      for(var j =matrix[i].length-1 ; j >= 0; j--){
      array.push(matrix[i][j])
      }

    }
   }
    return(array)
 } 
}