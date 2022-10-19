/*
    Méthodes d'accès aux services Web API ContactsManager
 */

const apiBaseURL= "http://localhost:5000/api/nouvelles";
//const apiBaseURL = "https://api-server-beta.glitch.me/api/contacts";

function webAPI_getContacts(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: nouvelle => {
            successCallBack(nouvelle);
            //console.log(nouvelle);
            console.log("webAPI_getContacts - success");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_getContact - error");
        }
    });
}

function webAPI_getContact(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: nouvelle => { successCallBack(nouvelle); console.log("webAPI_getContact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_getContact - error");
        }
    });
}

function webAPI_addContact(nouvelle, successCallBack, errorCallBack) {
    console.log('add', nouvelle)
    $.ajax(
        {
        
        url: apiBaseURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(nouvelle),
        success: () => {  successCallBack(); console.log("webAPI_addContact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(nouvelle);
            console.log(jqXHR);
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_addContact - error");
        }
    });
}

function webAPI_modifyContact(nouvelle, successCallBack, errorCallBack) {
    console.log('modify', nouvelle)
    $.ajax({
        url: apiBaseURL + "/" + nouvelle.Id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(nouvelle),
        success: () => { successCallBack(); console.log("webAPI_modifyContact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_modifyContact - error");
        }
    });
}

function webAPI_deleteContact(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        contentType: 'text/plain',
        type: 'DELETE',
        success: () => { successCallBack(); console.log("webAPI_deleteContact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_deleteContact - error");
        }
    });
}
