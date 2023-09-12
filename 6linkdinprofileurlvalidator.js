//Define a regex pattern for matching valid linkdin profile url
const linkedinProfilePattern=/^https:\/\/www\.linked\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

//function to validate a linldin profile url
function validatInLinkedInProfile(url){
    if(linkedinProfilePattern.test(url)){
        console.log("valid linkedin profile url");
    }else{
        console.log("Invalid linkedin profile url");
    }
}

//test the linkedin profile url validation function
validatInLinkedInProfile("https://www.linked.com/in/johndoe123");
validatInLinkedInProfile("https://www.linked.com/in/jane-smith");
validatInLinkedInProfile("https://www.linked.com/in/user-name-is-too-long-for-valid-url");
validatInLinkedInProfile("https://www.linked.com/company/cmpany-name");
validatInLinkedInProfile("http://www.linked.com/in/nothttps");