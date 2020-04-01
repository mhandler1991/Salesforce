// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){

    // Log the function as run & Id of Tab
    console.log("Tab Clicked!");
    console.log(id);

    switch(id) {
        case 'tab1':

            console.log('Switch Result: Tab1');

            // Tab Handeling...
            // Remove Classes - Tabs
            document.getElementById('tab2').classList.remove('slds-is-active');
            document.getElementById('tab3').classList.remove('slds-is-active');
            // Add Classes - Tabs
            document.getElementById('tab1').classList.add('slds-is-active');
            // Remove Classes - Content
            document.getElementById('tab2content').classList.remove('slds-show');
            document.getElementById('tab3content').classList.remove('slds-show');
            document.getElementById('tab1content').classList.remove('slds-hide');
            // Add Classes - Content
            document.getElementById('tab1content').classList.add('slds-show');
            document.getElementById('tab2content').classList.add('slds-hide');
            document.getElementById('tab3content').classList.add('slds-hide');
            // End Tab Handeling...
            console.log('Boy, we handeled those tabs...');

            break;
        case 'tab2':

            console.log('Switch Result: Tab2');

            // Tab Handeling...
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
            document.getElementById('tab1content').classList.add('slds-hide');
            document.getElementById('tab3content').classList.add('slds-hide');
            // End Tab Handeling...
            console.log('Boy, we handeled those tabs...');

            break;
        case 'tab3':

            console.log('Switch Result: Tab3');

            // Tab Handeling...
            // Remove Classes - Tabs
            document.getElementById('tab1').classList.remove('slds-is-active');
            document.getElementById('tab2').classList.remove('slds-is-active');
            // Add Classes - Tabs
            document.getElementById('tab3').classList.add('slds-is-active');
            // Remove Classes - Content
            document.getElementById('tab1content').classList.remove('slds-show');
            document.getElementById('tab2content').classList.remove('slds-show');
            document.getElementById('tab3content').classList.remove('slds-hide');
            // Add Classes - Content
            document.getElementById('tab3content').classList.add('slds-show');
            document.getElementById('tab1content').classList.add('slds-hide');
            document.getElementById('tab2content').classList.add('slds-hide');
            // End Tab Handeling...
            console.log('Boy, we handeled those tabs...');

            break;

        default:
            
            // Log Unknown Tab Action
            console.log('Oh No!.. Something went wrong with all this Tabbing - Opps');
            break;
    }
}