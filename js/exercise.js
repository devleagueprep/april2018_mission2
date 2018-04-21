/*Congratulations Prepsters, you've been selected for another top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

You will be using your DOM knowledge to manipulate the index.html file. 

As always, should you be caught copy and pasta, the Secretary will disavow any knowledge of your actions. 

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: 
Team Member: Camille

Target the div element with the id of 'company' and change the contents to: 'Tiger Express'
*/
var nameElem = document.getElementById('company');
nameElem.innerHTML = 'Tiger Express';

 /*Mission 2: 
 Team Member: Valzey

 Target the div element with the id of 'motto' and change the contents to:
 'The best Chinese food to wok yo world!'
 */
 

 /*Mission 3: 
 Team Member: Matt

 Target the first li element and change the content to: 'Our Food'
 */


 /*Mission 4: 
 Team Member: Erin

 Change the layout of the li element from block to inline.
 */


 /*Mission 5:
 Team Member: Harsh
 Create a paragraph element, create an id of 'tangy', give it the following content: 'Orange Chicken' and append it into the div element with the id of 'specials' and change the font color to 'orangered'
 */


 /*Mission 6:
 Team Member: Sarah

 Create an image element and use the following link for your source:
 http://www.quickneasyrecipes.net/wp-content/uploads/2012/09/Panda-Express-Orange-Chicken.jpg

 Append this image element into div element with the id of 'specials'
 */

 
 /*Mission 7:
 Team Member: Doug

 Target the header 2 element with the id of 'story' and change the content to: 'Bringing hungry people together to share joy has been our family's inspiration.' And change the font color to 'cornflowerblue'
 */


 /*Mission 8:
 Team Member: Cassandra
 
 Add the following link as a background image in the body element:
 'https://i.pinimg.com/originals/ab/05/e7/ab05e7969e42fea2249c18e9fe461188.jpg'
 */


 /*Mission 9:
 Team Member: Chaz

 Target the div element with the id of 'locate' and change the content to: 'Find a Tiger Express in your area.'
 */
 

 /*Mission 10:
 Team Member: Erik

 Create a div element, create an id of 'designer', give it a content of: 'Copyright 2018 Gin Drinkers Association (GDA)' and append it to the footer element.
 */
var footerElemE = document.getElementsByTagName('footer');

var divElemE = document.createElement('div');
divElemE.id = 'designer';
divElemE.innerHTML = 'Copyright 2018 Gin Drinkers Association (GDA)';
footerElemE[0].appendChild(divElemE);