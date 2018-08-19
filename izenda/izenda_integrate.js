//Token Sample
var currentUser = {"UserName":"IzendaAdmin","TenantUniqueName":null};
//IzendaSynergy.config function
var DoIzendaConfig = function () {
    var configJson = {
        "WebApiUrl": "http://YourIzendaAPI/api/",
        "BaseUrl": "/",
        "RootPath": "/izenda",
        "CssFile": "izenda-ui.css",
        "Routes": {
            "Settings": "settings",
            "New": "new",
            "Dashboard": "dashboard",
            "Report": "report",
            "ReportViewer": "reportviewer",
            "ReportViewerPopup": "reportviewerpopup",
            "Viewer": "viewer"
        },
        "Timeout": 3600,
        "NeedToEncodeUrl": false,
    };
    IzendaSynergy.config(configJson);
};
//Full Izenda UI for the Blank Page
var izendaInit = function () {

        DoIzendaConfig();

        IzendaSynergy.setCurrentUserContext({token: currentUser});
        
        IzendaSynergy.render(document.getElementById('izenda-root'));
    };
//Izenda Settings Page
var izendaInitSetting = function () {
    
        IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });
    
        IzendaSynergy.renderSettingPage(document.getElementById('izenda-root'));
    
    };
//Izenda Report List
var izendaInitReport = function () {

    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderReportPage(document.getElementById('izenda-root'));

};
// Render report viewer to a <div> tag by report id with custom filter values
var izendaInitReportViewer = function (reportId) {
    
    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderReportViewerPage(document.getElementById('izenda-root'), "197A5FC2-343F-4F90-9A40-C059C0CC95BF",
    {
        "overridingFilterValue": {
        "p1value": "",
        "p2value": "Ito"
        }
    });
};
//Izenda Report Designer
var izendaInitReportDesigner = function () {
    
            IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });
    
            IzendaSynergy.renderReportDesignerPage(document.getElementById('izenda-root'));
    
    };
//Izenda Dashboard List
var izendaInitDashboard = function () {

    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderDashboardPage(document.getElementById('izenda-root'));

};
//Izenda Dashboard Designer
var izendaInitNewDashboard = function () {

    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderNewDashboardPage(document.getElementById('izenda-root'));

};
//Render report parts to specific <div> tag by report part id for the home page
//This is a very lazy way to render multipe report parts
//Use For loops and arrays for something that scales
//Example of loop at the bottom
var izendaInitHome = function () {

    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderReportPart(document.getElementById('izenda-part1'), {
    "id": "9ec468db-f320-4457-a2f6-7187a3ca8da3"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part2'), {
        "id": "13443B10-7072-4087-8DB1-9DC039F8FE57"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part3'), {
        "id": "1838D857-91DB-458B-A105-07967D95C7F7"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part4'), {
        "id": "65901C33-A2C6-4A32-BC02-A5060266075A"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part5'), {
        "id": "A7F8A694-DD59-47AF-9D6A-DA3A8AD70465"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part6'), {
        "id": "2F7BFFBE-CA12-4D13-A801-B2D8C61AFCD8"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part7'), {
        "id": "09499560-8C93-4B47-B955-756D0632F51D"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part8'), {
        "id": "8CAAEE2F-2397-4DEB-8B6F-B7C2C3918713"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part9'), {
        "id": "1919ABD1-70E8-4077-B895-2B8E0AEA0ABD"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part10'), {
        "id": "3485E671-B37D-4D04-B871-A8959F67F469"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part11'), {
        "id": "39DA8E5B-E22B-4744-BF63-810DD86262AD"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part12'), {
        "id": "0503A064-D880-4B83-B6B1-4FD974FA6B27"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part13'), {
        "id": "F9438155-CDCA-40FD-AE83-020BCC834C45"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part14'), {
        "id": "F34844CC-1E8E-466D-8839-46753F101013"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part15'), {
        "id": "EF1CC76D-D061-44C7-85AB-9BFE3F3F1BAB"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part16'), {
        "id": "4C156D73-0D1B-41B5-BED7-FD99CB57AFC1"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part17'), {
        "id": "BE12ED9E-B45F-4C4F-9F3A-CF0827ED7F0B"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part18'), {
        "id": "213C8404-7E7E-4124-B300-F03E51F5A3DD"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part19'), {
        "id": "E6B07378-91B1-4542-B177-FE677A71A12E"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part20'), {
        "id": "0F23A3F0-F709-4A9F-A1A5-CBD723AB4CF6"
    });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part21'), {
        "id": "AAA9AA10-C141-43A8-8A93-6BF8EB7E0672"
    });
};
// Render report parts to specific <div> tag by report part id for the orders page
var izendaInitOrders = function () {

    IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });

    IzendaSynergy.renderReportPart(document.getElementById('izenda-part1'), {
            "id": "17AC574D-1F4C-4A87-92E0-DB80590288DC"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part2'), {
            "id": "0FC354BA-52C7-4D38-AF26-0BBC3B727CAE"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part3'), {
            "id": "4BAA83A6-894D-49E4-B5B3-178C6A6D4C0C"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part4'), {
            "id": "64B81077-8F23-4AD2-8FF6-64BD9F7D1A6A"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part5'), {
            "id": "3A69C19C-4E3F-4B45-8C98-EA8EDD25EB24"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part6'), {
            "id": "8ED80211-BE56-4E6E-8B0D-38DB80369332"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part7'), {
            "id": "9BFD8ADE-3698-4F4F-8BB6-CB0192F4CD6B"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part8'), {
            "id": "3FF98EE2-88AE-42D2-817C-64B5A94412A9"
        });
    IzendaSynergy.renderReportPart(document.getElementById('izenda-part9'), {
            "id": "1945D0A4-6BB8-4A95-BDA2-92EA517A442E"
        }); 
};
//Example of a loop for arrays of report parts and custom filter values
var izendaInitReportPart = function () {
    
        IzendaSynergy.setCurrentUserContext({ token: "IMPERSONATED_ADMIN_TOKEN" });
        for (var i = 0; i < reportParts.length; i++) {
            if (reportParts[i].overridingFilterValue) {
                IzendaSynergy.renderReportPart(document.getElementById(reportParts[i].selector), {
                    "id": reportParts[i].id,
                    "overridingFilterValue": reportParts[i].overridingFilterValue,
                });
            }
            else {
                IzendaSynergy.renderReportPart(document.getElementById(reportParts[i].selector), {
                    "id": reportParts[i].id
                });
            }
        }
    };