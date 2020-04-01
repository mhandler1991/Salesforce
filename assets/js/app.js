// Tab Handeling 
function tabUpdate(id){
    console.log("Tab Clicked");
    console.log('Id: ' & id);
    document.getElementById(id).classList.add('slds-is-active');
    console.log('Updated Class');
}