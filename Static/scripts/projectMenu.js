// we are going to add a drop down menu at the top to switch between different projects 
//           we are going to switch the content within the id="changingContent" div
// the function will accept html as an argument and replace the mentioned div with the html

function changeContentSG() {
    document.getElementById("projTitle").innerHTML = "Stick Game<br>";
    document.getElementById("videoContent").innerHTML = "<video width='100%' height='100%' controls><source src='clips/stickGameFinal.mp4' type='video/mp4'></video>";
    document.getElementById("descriptionProject").innerHTML = "Stick Game is a game I made in Unity. It is a 2D game where you play as a stick figure and you have to avoid the obstacles, collect the coins and get to the door. The game is made in C# and uses the Unity engine. The game is still in development and I plan to add more levels and features to it.";
    document.getElementById("descriptionTech").innerHTML = "Unity, C#, UI design";
    document.getElementById("descriptionCode").innerHTML = "The source code for this project is available on my GitHub, or Download the most recent build if you trust me ;)!";
    document.getElementById("projectLinks").innerHTML = "<a href='https://github.com/konradmh3/Stick-Game-Unity' target='_blank' class='button_Primary col-3'> GitHub</a> <a href='BUILDS/Linux_Build_1.1.zip' target='_blank' class='button_Primary col-3'> Download</a>";

    // 
    //         <!-- insert autoplaying video-->
    //         <video width="100%" height="100%" autoplay controls>
    //           <source src="clips/stickGameFinal.mp4" type="video/mp4">
    //       
}
function changeContentFD() {
    document.getElementById("projTitle").innerHTML = "FooDood<br>";
    document.getElementById("videoContent").innerHTML = "";
    document.getElementById("descriptionProject").innerHTML = "FooDood is a mobile application that combines the concept of Tinder-swiping with selecting something to eat. Science says that it is easier to make a decision when presented with simple options such as 'yes' or 'no' rather than a large list of options. FooDood will present users with a list of food options in their area and they will be able to swipe left or right on the options to decide what to eat. With this product, we will be able to help people make decisions on what to eat more easily and efficiently.";
    document.getElementById("descriptionTech").innerHTML = "Front End Stack: React Native, Expo, TailwindCSS<br>Back End Stack: Java, Spring, NoSQL, Google Cloud";
    document.getElementById("descriptionCode").innerHTML = "The source code and other documents for this project are available on my GitHub!";
    document.getElementById("projectLinks").innerHTML = "<a href='https://github.com/Brenden-Smith/FooDood' target='_blank' class='button_Primary col-3'> GitHub</a>";
}
function changeContentKL() {
    document.getElementById("projTitle").innerHTML = "Key Logger<br>";
    document.getElementById("videoContent").innerHTML = "";
    document.getElementById("descriptionProject").innerHTML = "Created a python executable that uses HTTP POST requests to send the keypresses of a user to a Python server hosted on a Raspberry Pi. Then created a frontend html/js page served by the same python server to view the key logs in a user friendly way.";
    document.getElementById("descriptionTech").innerHTML = "malware, python executables, python server, javascript, html, css";
    document.getElementById("descriptionCode").innerHTML = "The source code for this project is available on my GitHub!";
    document.getElementById("projectLinks").innerHTML = "<a href='https://github.com/konradmh3/378-KEY-LOGGER#readme' target='_blank' class='button_Primary col-3'> GitHub</a>";

}
function changeContentFB() {
    document.getElementById("projTitle").innerHTML = "Front/Back End Projects<br>";
    document.getElementById("videoContent").innerHTML = "";
    document.getElementById("descriptionProject").innerHTML = "Full stack program, with javascript/html on the front end sending HTTP requests to a server hosted on a raspberry pi in order to remote control a car. That same Pi also being the microprocessor for a small motor that was used to move and steer the car. We also modeled and designed the car from scratch and 3d printed it in order to house the electronics for the car. There is also a similar project in the Github repo to control a light from a webserver that is connected to the gpio pins on the Pi.";
    document.getElementById("descriptionTech").innerHTML = "javascript, html, css, python, flask, raspberry pi, gpio pins, 3d printing";
    document.getElementById("descriptionCode").innerHTML = "The source code for this project is available on my GitHub!";
    document.getElementById("projectLinks").innerHTML = "<a href='https://github.com/konradmh3/mechprojects' target='_blank' class='button_Primary col-3'> GitHub</a>";
}