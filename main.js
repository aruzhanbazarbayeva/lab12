console.log("Hello, World!");

//change h1 element
let h1_arr = document.getElementsByTagName ("h1")
console.log (h1_arr[0])
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue" 

//added hr element 
let hr = document.createElement ("hr")
console.log (hr)
document.body.appendChild(hr)

//added h2 element 
let h2 = document.createElement ("h2")
h2.innerHTML = "Task"
h2.style.color = "red" 
console.log (h2)
document.body.appendChild(h2)

//added p1 with bold "only"
let p1 = document.createElement ("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
console.log (p1)
document.body.appendChild(p1)


//create ul
let ul = document.createElement ("ul")
console.log (ul)
document.body.appendChild(ul)

//create li
let li = document.createElement ("li")
li.innerHTML = "find elements in the DOM <b>(5 points);</b>"
li.style.color = "green"
ul.appendChild(li)

//create li
li = document.createElement ("li")
li.innerHTML = "create/add/remove elements <b>(5 points);</b>"
li.style.color = "purple"
ul.appendChild(li)

//create li
li = document.createElement ("li")
li.innerHTML = "change content of the elements <b>(5 points);</b>"
li.style.color = "green"
ul.appendChild(li)

//create li
li = document.createElement ("li")
li.innerHTML = "change styles of the elements <b>(5 points);</b>"
li.style.color = "purple"
ul.appendChild(li)

//create li
li = document.createElement ("li")
li.innerHTML = "change attributes of the elements <b>(5 points);</b>"
li.style.color = "green"
ul.appendChild(li)

//create li
li = document.createElement ("li")
li.innerHTML = "change classes of the elements <b>(5 points);</b>"
li.style.color = "purple"
ul.appendChild(li)

//added p2 with link 
let p2 = document.createElement ("p")
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
console.log (p2)
document.body.appendChild(p2)

// create an HTML element - a
let a1 = document.createElement("a");
a1.setAttribute("href"
, "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerText = "link.";
p2.appendChild(a1);

//added hr element 
let hr1 = document.createElement ("hr")
console.log (hr1)
document.body.appendChild(hr1)

//added h3 element 
let h3 = document.createElement ("h2")
h3.innerHTML = "Submission1"
h3.style.color = "red" 
console.log (h3)
document.body.appendChild(h3)

//added p3
let p3 = document.createElement ("p")
p3.innerHTML = "To submit your work, follow these instructions:"
console.log (p3)
document.body.appendChild(p3)


//create ul1
let ul1 = document.createElement ("ul")
console.log (ul1)
document.body.appendChild(ul1)

//create li
let li1 = document.createElement ("li")
li1.innerHTML = "Create a new repository on Github, named <b>lab12 (1 point).</b>"
li1.style.color = "green"
ul1.appendChild(li1)


//create li
li1 = document.createElement ("li")
li1.innerHTML = "Clone this repository to your local machine and work inside it."
li1.style.color = "purple"
ul1.appendChild(li1)

//create li
li1 = document.createElement ("li")
li1.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one h1 tag with 'Hello,World!' message <b>(1 point).</b>"
li1.style.color = "green"
ul1.appendChild(li1)

//create li
li1 = document.createElement ("li")
li1.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point).</b>"
li1.style.color = "purple"
ul1.appendChild(li1)

//create li
li1 = document.createElement ("li")
li1.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li1.style.color = "green"
ul1.appendChild(li1)

//create li
li1 = document.createElement ("li")
li1.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points).</b>"
li1.style.color = "purple"
ul1.appendChild(li1)

//create li
li1 = document.createElement ("li")
li1.innerHTML = "After you finish your work, submit it to the Github <b>(2 points).</b>"
li1.style.color = "green"
ul1.appendChild(li1)

//added hr element 
let hr2 = document.createElement ("hr")
console.log (hr2)
document.body.appendChild(hr2)