sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ibspl.iven.ivenusermasterfiori',
            componentId: 'MasterIvenUserEntityObjectPage',
            contextPath: '/MasterIvenUsers/TO_USER_ENTITIES'
        },
        CustomPageDefinitions
    );
});