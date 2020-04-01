// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){
    console.log("Tab Clicked!");
    console.log(id);
    document.getElementById('tab1').classList.remove('slds-is-active');
    console.log('Removed Class...');
    document.getElementById(id).classList.add('slds-is-active');
    console.log('Updated Class...');
    var idContent = id+'content';
    console.log('id content:');
    console.log(idContent); 
    document.getElementById(idContent).classList.add('slds-show');
}