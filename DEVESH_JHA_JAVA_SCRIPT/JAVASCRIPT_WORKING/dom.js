<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>

<body>
    <div id="main">
        <h1 id="title">Hello DOM</h1>
        <p id="hint">This is DOM Manipulation</p>
    </div>


    <button onclick="addNode()">Add Node</button>

    <script>
        //adding node function
        function addNode() {
            console.log("adding node");
            //creating node
            let divElement = document.createElement("form");
            console.log(divElement);


            //create a textnode
            let textElement = document.createTextNode("This is GoDigital")

        }
    </script>

</body>

</html>
