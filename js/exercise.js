/*Congratulations Prepsters, you've been selected for another top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: 
Team Member: 

In the index.html file, target the div element with the id of 'name' and change the contents to: 'Tiger Express'
*/

company.innerHTML = 'Tiger Express';

 /*Mission 2: 
 Team Member: 

 In the index.html file, target the div element with the id of 'motto' and change the contents to:
 'The best Chinese food to wok yo world!'
 */
 
 motto.innerHTML = 'The best Chinese food to wok yo world!';

 /*Mission 3: 
 Team Member: 

In the index.html file, target the first li element and change the content to: 'Our Food'
 */

var liElem = document.getElementsByClassName('menu');
liElem[0].innerHTML = 'Our Food';
 
 /*Mission 4: 
 Team Member: 

 In the index.html file, change the layout of the li element from block to inline.
 */

var liBox = document.getElementsByClassName('menu');

for(var i = 0; i<liBox.length; i++){
    liBox[i].style.display = "inline" 
}
 /*Mission 5:
 Team Member: 
 In the index.html file, create a paragraph element, give it an id of 'food' and give it the following content: 'Orange Chicken' and append it into the div element with the id of 'specials'
 */

var pElem = document.createElement('p');
pElem.id = 'food';
pElem.innerHTML = 'Orange Chicken';
specials.appendChild(pElem);


 /*Mission 6:
 Team Member: 

 In the index.html file target the div element with the id of 'story' and change the content to: 'Brining hungry people together to share joy has been our family's inspiration.'
 */

 story.innerHTML = "test"
 
 /*Mission 7:
 Team Member: 

 In the index.html file target the div element with the id of 'locate' and change the content to: 'Find A Tiger Express'
 */
 
 locate.innerHTML = 'Find A Tiger Express'

 /*Mission 8:
 Team Member: 
 */
 
 /*Mission 9:
 Team Member:
 */
 
 /*Mission 10:
 Team Member:
 */
 

