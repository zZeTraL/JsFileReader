<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript | File </title>   

    <!-- CSS -->
    <link rel="stylesheet" href="css/editor.css">

</head>
<body>
    <main>
        <section class="drop-container">
            <div class="drop-frame">
                <div class="drop-header-text">
                    <h2>Upload your files</h2>
                    <p>File should be .txt or .yaml</p>
                </div>
                <div class="drop-area">
                    <div class="drop-folder-svg">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-open" class="svg-inline--fa fa-folder-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#7ea8be" d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"></path></svg>
                    </div>
                    <div class="drop-folder-desc">
                        <p>Drag & Drop your files here</p>
                    </div>
                    <input type="file" name="myFile" class="drop-input">
                </div>
            </div>
            <div class="reader-container">
                <h2 class="h2-title">TEXT READER OUTPUT</h2>
                <pre id="file-content"></pre>
            </div>
        </section>
    </main>

    <script src="js/FileManager.js"></script>

</body>
</html>