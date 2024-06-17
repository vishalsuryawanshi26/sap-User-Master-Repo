sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ibspl.iven.ivenusermasterfiori',
            componentId: 'MasterIvenUsersList',
            contextPath: '/MasterIvenUsers'
        },
        CustomPageDefinitions
    );
});