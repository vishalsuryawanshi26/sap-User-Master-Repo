sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ibspl/iven/ivenusermasterfiori/test/integration/FirstJourney',
		'com/ibspl/iven/ivenusermasterfiori/test/integration/pages/MasterIvenUsersList',
		'com/ibspl/iven/ivenusermasterfiori/test/integration/pages/MasterIvenUsersObjectPage',
		'com/ibspl/iven/ivenusermasterfiori/test/integration/pages/MasterIvenUserEntityObjectPage'
    ],
    function(JourneyRunner, opaJourney, MasterIvenUsersList, MasterIvenUsersObjectPage, MasterIvenUserEntityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ibspl/iven/ivenusermasterfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMasterIvenUsersList: MasterIvenUsersList,
					onTheMasterIvenUsersObjectPage: MasterIvenUsersObjectPage,
					onTheMasterIvenUserEntityObjectPage: MasterIvenUserEntityObjectPage
                }
            },
            opaJourney.run
        );
    }
);