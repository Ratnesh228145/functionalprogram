//define regex pattern for matching valid url's
const urlpattern=/^(https?:\/\/)[\w\d.]+\.[a-zA-Z]+$/;

//function to validate a url
function validateurl(url){
    if(urlpattern.test(url)){
        console.log("valid url");
    }else{
        console.log("invalid url");
    }
}

//test the url validation function
validateurl("http://www.example.com");
validateurl("ftp://invalid-url.com");
validateurl("https://invalid-url");