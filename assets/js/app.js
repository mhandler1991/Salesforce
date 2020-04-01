// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){
    console.log("Tab Clicked!");
    console.log(id);

    switch(id) {
        case 'tab1':
            console.log('Switch Result: Tab1');
            document.getElementById('tab1').classList.add('slds-is-active');
            document.getElementById('tab2').classList.remove('slds-is-active');
            document.getElementById('tab3').classList.remove('slds-is-active');
            document.getElementById('tab1content').classList.add('slds-show');
            document.getElementById('tab2content').classList.remove('slds-show');
            document.getElementById('tab2content').classList.add('slds-hide');
            document.getElementById('tab3content').classList.remove('slds-show');
            document.getElementById('tab3content').classList.add('slds-hide');
            break;
        case 'tab2':
            console.log('Switch Result: Tab2..');
            // Remove Classes - Tabs
            document.getElementById('tab1').classList.remove('slds-is-active');
            document.getElementById('tab3').classList.remove('slds-is-active');
            // Add Classes - Tabs
            document.getElementById('tab2').classList.add('slds-is-active');
            // Remove Classes - Content
            document.getElementById('tab1content').classList.remove('slds-show');
            document.getElementById('tab3content').classList.remove('slds-show');
            document.getElementById('tab2content').classList.remove('slds-hide');
            // Add Classes - Content
            document.getElementById('tab2content').classList.add('slds-show');

            break;
        case 'tab3':
            console.log('Switch Result: Tab3');
            break;
        default:
    }
}