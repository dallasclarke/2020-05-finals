
const makeRunOn = function(str) {
  let result = "";
  // result = result + str.replace(/\./g, ',')
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' && i != str.length-1) {
      result += ','
    } else {
      result += str[i]
    }
  }
  return result;
}

const totalScore = function(level, multiplier, bonus) {
  let score = 0;

  for (const levels of level) {
    score += levels.score;
  } if(multiplier) {
    score *= multiplier;
  } if (bonus) {
    score += bonus;
  }
  return score;
}

const nightOwls = function(people) {
  return people.filter((person) => {
    if (person.asleep === false && person.localTime >= 100 && 400 >= person.localTime) {
      return true;
    }
  })
}

const getToBed = function(people) {
return people.filter((person) => {
  if (person.asleep === false && person.localTime >= 100 && 400 >= person.localTime) {
    return //????
  }
})
}

const findIndices = function(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      result.push(i)
    }
  }
  return result;

}

const Faqtory = function() {
  return {
    questions: [],
    length: 0,
    addQuestion: function(text) {
    this.questions.push(
      {text: text, id: this.length, answered: false}
    )
    this.length++
  },
  answerQuestion: function(id, answer) {
    if(this.questions[id].answered === false) {
      this.questions[id].answer = answer;
      this.questions[id].answered = true;
    }
  }
}
}





if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
