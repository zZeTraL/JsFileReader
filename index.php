<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript | File </title>   

    <!-- CSS -->
    <link rel="stylesheet" href="css/main.css">

</head>
<body>
    <main>
        <div class="link-v2">
            <a href="drag&drop.php">Lien vers la V2</a>
            <br>
            <span>V1 is fully functionnal</span>
        </div>
        <div class="drop-zone" id="upload">
            <span class="drop-zone-text">Drop file here or click to upload</span>
            <input type="file" name="myFile" class="drop-zone-input">
        </div>
        <div class="container">
            <h2 class="h2-title">TEXT READER OUTPUT</h2>
            <pre id="file-content"></pre>
        </div>
    </main>

    <script src="js/FileManager.js"></script>

</body>
</html>