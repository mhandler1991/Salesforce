// *******************************
// Javascript Page Handling
// *******************************

// Tab Main Section - Tab Handeling 
function tabUpdate(id){

    // Log the function as run & Id of Tab
    console.log("Tab Clicked!");
    console.log(id);

    removeClass = [];
    addClass = "";
    removeContentShow = [];
    addRemoveContent = "";
    addContentHide = [];

    function tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide){

        console.log('Tab Handeler Called...');

        var i;
        // Remove SLDS Active
        for (i = 0; i < removeClass.length; i++) {
            document.getElementById(removeClass[i]).classList.remove('slds-is-active');
        };
        // Add SLDS Active
        document.getElementById(addClass).classList.add('slds-is-active');
        // Remove SLDS Show
        for (i = 0; i < removeContentShow.length; i++) {
            document.getElementById(removeContentShow[i]).classList.remove('slds-show');
        };
        // Remove SLDS Hide
        document.getElementById(addRemoveContent).classList.remove('slds-hide');
        // Add SLDS Show
        document.getElementById(addRemoveContent).classList.add('slds-show');
        // Add SLDS Hide
        for (i = 0; i < addContentHide.length; i++) {
            document.getElementById(addContentHide[i]).classList.add('slds-hide');
        };
        document.querySelectorAll()

        //Do some Logging...
        console.log('Boy, I am I glad we handeled that Tab...');

    }

    switch(id) {
        case 'tab1':

            // Define Variables
            removeClass = ['tab2', 'tab3', 'tab4', 'tab5'];
            addClass = 'tab1';
            removeContentShow = ['tab2content', 'tab3content', 'tab4content', 'tab5content'];
            addRemoveContent = 'tab1content';
            addContentHide = ['tab2content', 'tab3content', 'tab4content', 'tab5content'];
            // Call Tab Handeler
            tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

            break;
        case 'tab2':

            // Define Variables
            removeClass = ['tab1','tab3', 'tab4', 'tab5'];
            addClass = 'tab2';
            removeContentShow = ['tab1content','tab3content', 'tab4content', 'tab5content'];
            addRemoveContent = 'tab2content';
            addContentHide = ['tab1content', 'tab3content', 'tab4content', 'tab5content'];
            // Call Tab Handeler
            tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

            break;
        case 'tab3':

            // Define Variables
            removeClass = ['tab1','tab2', 'tab4', 'tab5'];
            addClass = 'tab3';
            removeContentShow = ['tab1content','tab2content', 'tab4content', 'tab5content'];
            addRemoveContent = 'tab3content';
            addContentHide = ['tab1content', 'tab2content', 'tab4content', 'tab5content'];
            // Call Tab Handeler
            tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

            break;
        case 'tab4':

            // Define Variables
            removeClass = ['tab1','tab2', 'tab3', 'tab5'];
            addClass = 'tab4';
            removeContentShow = ['tab1content','tab2content', 'tab3content', 'tab5content'];
            addRemoveContent = 'tab4content';
            addContentHide = ['tab1content', 'tab2content', 'tab3content', 'tab5content'];
            // Call Tab Handeler
            tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

            break;
        case 'tab5':

            // Define Variables
            removeClass = ['tab1','tab2', 'tab3', 'tab4'];
            addClass = 'tab5';
            removeContentShow = ['tab1content','tab2content', 'tab3content', 'tab4content'];
            addRemoveContent = 'tab5content';
            addContentHide = ['tab1content', 'tab2content', 'tab3content', 'tab4content'];
            // Call Tab Handeler
            tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);        

            break;
        default:
            
            // Log Unknown Tab Action
            console.log('Oh No!.. Something went wrong with all this Tabbing - Opps');
            break;
    }
}
