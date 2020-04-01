// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){
    console.log("Tab Clicked");
    console.log(id);
    document.getElementById(id).classList.add('slds-is-active');
    console.log('Updated Class');
}