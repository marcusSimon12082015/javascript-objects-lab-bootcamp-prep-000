var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({},object,{key:value});
  return newRecipes
}
