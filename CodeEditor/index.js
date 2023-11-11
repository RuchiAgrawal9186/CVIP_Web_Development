let htmlEditor = CodeMirror(document.querySelector(".editor .code #html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml"
})

let cssEditor = CodeMirror(document.querySelector(".editor .code #css-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css"
})

let jsEditor = CodeMirror(document.querySelector(".editor .code #js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
})

function run()
{

    let htmlcode = htmlEditor.getValue();
    let csscode = "<style>"+cssEditor.getValue()+"</style>";
    let jscode = "<scri"+"pt>" + jsEditor.getValue()+"</scri"+"pt>";
    let output = document.querySelector(".editor .preview #output").contentWindow.document
    output.open()
    output.write(htmlcode+csscode+jscode)
    output.close()


    // output.contentDocument.body.innerHTML = htmlcode+csscode
    // output.contentWindow.eval(jscode)

    // console.log(output)

}

document.querySelector(".editor .code #html-code").addEventListener("keyup",run)

document.querySelector(".editor .code #css-code").addEventListener("keyup",run)

document.querySelector(".editor .code #js-code").addEventListener("keyup",run)