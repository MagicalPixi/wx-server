/**
 * Created by zyg on 16/2/11.
 */

var nameTransToIndexMap = function (name) {
  var m = {
    boom:0,
    scream:1,
    fire:2,
    clean:3,
  }

  var index = m[name];

  if(index === undefined){
    throw new Error(name + ' attackName invalid');
  }

  return index;
};

module.exports = {
  //0 > 1 > 2 > 3 > 0, 0 === 2, 1 === 3
  byIndex: function (myIndex,enemyIndex) {
    var result = myIndex === enemyIndex ? 0 :
      Math.abs(myIndex - enemyIndex) === 2 ? 0 :
        myIndex < enemyIndex ? 1 : -1;

    if(myIndex === 0 && enemyIndex === 3 || myIndex === 3 && enemyIndex === 0 ){
      result = -(result);
    }

    return result;
  },
  // boom > scream > fire > clean,
  byName: function (myAttackName,enemyAttackName) {

    if(typeof myAttackName === 'string'){
      myAttackName = nameTransToIndexMap(myAttackName);
    }

    if(typeof enemyAttackName === 'string'){
      enemyAttackName = nameTransToIndexMap(enemyAttackName);
    }

    return this.byIndex(
      myAttackName,
      enemyAttackName
    );
  }
};