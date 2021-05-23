var currPage = 1; 
var numPages = 0;
var thePDF = null;
var url = 'assets/docs/ama-y-no-sufras.pdf';

function handlePages(page) {
    var canvas = document.createElement("canvas");
    var viewport = page.getViewport(2);
    
    //canvas.width = window.innerWidth;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    var context = canvas.getContext('2d');
    //Draw it on the canvas
    page.render({
        canvasContext: context,
        viewport: viewport
    });

    //Add it to the web page
    document.getElementById('modal-content-pdf').appendChild(canvas);

    //Move to next page
    currPage++;
    if (thePDF !== null && currPage <= numPages) {
        thePDF.getPage(currPage).then(handlePages);
    }
}

pdfjsLib.getDocument(url).then(function(pdf) {

    //Set PDFJS global object (so we can easily access in our page functions
    thePDF = pdf;

    //How many pages it has
    numPages = pdf.numPages;

    //Start with first page
    pdf.getPage(1).then(handlePages);
});