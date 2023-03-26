
function sayHello() {
  console.log("Executed");
}



window.onload=function(){


  


  function loadTwitterMessages() {
    chrome.windows.create({
      url: "https://google.com",
      type: "popup",

    }, function(newWindow) {
      chrome.scripting.executeScript({
        target: {tabId: newWindow.tabs[0].id},
        function: function() {
          window.alert();
          window.scrollBy(0, 500);
        }
      });
    });
  }

  document.getElementById("startButton").addEventListener("click", loadTwitterMessages);




}




