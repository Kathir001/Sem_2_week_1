function word(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      const wordCount ={};
      const length = word.length;
    return count;
    }, {});
  } 
  console.log();
 
let para = "Holi is the festival of colors celebrated with our loved ones. It is one of the biggest festivals in our country which comes every year during March. Children, adults and even the elder citizens take part in the fun and preparations of Holi for three days starting from a full moon day. People from all religions play Holi by exchanging sweets, gujiya, thandai and splashing colors on each other. Water guns and water balloons are also used by children during the Holidays.The festival of Holi finds a place not only in our real life but also in art, media and music as various songs, movies and shows mention Holi with diverse forms and references. More often than not, people embrace this occasion to wipe memories of hurt and anguish and replace them with brotherhood, kindness and enjoyment. People across the barriers of age, generations, caste and creed become a part of the celebrations in all their colors.";
let result = word(para);
console.log(para.match(/(\w+)/g).length);
console.log(result);