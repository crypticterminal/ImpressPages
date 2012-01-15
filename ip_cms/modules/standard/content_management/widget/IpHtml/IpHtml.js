/**
 * @package ImpressPages
 * @copyright Copyright (C) 2011 ImpressPages LTD.
 * @license GNU/GPL, see ip_license.html
 */

function IpWidget_IpHtml(widgetObject) {
    this.widgetObject = widgetObject;

    this.manageInit = manageInit;
    this.prepareData = prepareData;


    function manageInit() {
        var instanceData = this.widgetObject.data('ipWidget');
    }

    function prepareData() {

        var data = Object();

        data.html = this.widgetObject.find('textarea').val();
        $(this.widgetObject).trigger('preparedWidgetData.ipWidget', [ data ]);
    }

    

};

