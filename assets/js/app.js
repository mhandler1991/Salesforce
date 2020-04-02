// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){

    // Log the function as run & Id of Tab
    console.log("Tab Clicked!");
    console.log(id);

    removeClass = [];
    addClass;
    removeContentShow = [];
    removeContentHide;
    addContentShow;
    addContentHide = [];

    function tabHandeler(removeClass, addClass, removeContentShow, removeContentHide, addContentShow, addContentHide){

        var i;

        for (i = 0; i < removeClass.length; i++) {
            document.getElementById(removeClass[i]).classList.remove('slds-is-active');
        };

        document.getElementById(addClass).classList.add('slds-is-active');

        for (i = 0; i < removeContentShow.length; i++) {
            document.getElementById(removeContentShow[i]).classList.remove('slds-show');
        };

        document.getElementById(removeContentHide).classList.remove('slds-show');

        document.getElementById(addContentShow).classList.add('slds-show');

        for (i = 0; i < addContentHide.length; i++) {
            document.getElementById(addContentHide[i]).classList.remove('slds-hide');
        };

    }

    switch(id) {
        case 'tab1':

            removeClass = ['tab2', 'tab3'];
            addClass = 'tab1';
            removeContentShow = ['tab2content', 'tab3content'];
            removeContentHide = 'tab1content';
            addContentShow = 'tab1content';
            addContentHide = ['tab2content', 'tab3content'];

            tabHandeler(removeClass, addClass, removeContentShow, removeContentHide, addContentShow, addContentHide);

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


// console.log('Switch Result: Tab1');

// document.getElementById('tab2').classList.remove('slds-is-active');
// document.getElementById('tab3').classList.remove('slds-is-active');

// document.getElementById('tab1').classList.add('slds-is-active');

// document.getElementById('tab2content').classList.remove('slds-show');
// document.getElementById('tab3content').classList.remove('slds-show');
// document.getElementById('tab1content').classList.remove('slds-hide');

// document.getElementById('tab1content').classList.add('slds-show');
// document.getElementById('tab2content').classList.add('slds-hide');
// document.getElementById('tab3content').classList.add('slds-hide');

// console.log('Boy, we handeled those tabs...');