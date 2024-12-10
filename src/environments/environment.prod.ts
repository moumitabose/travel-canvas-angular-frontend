const baseServiceUrl = "http://localhost:8077/"
// const baseServiceUrl = "http://laxmi-env.eba-gczumsgt.us-east-2.elasticbeanstalk.com/"

//const baseServiceUrl = "http://travel-canvas-env.eba-t2x495mc.us-east-2.elasticbeanstalk.com/"


export const environment = {
  production: true,


  url: {

    ///////////////////////////////////////////LOGIN//////////////////////////////////////////////////////////////////

    login: baseServiceUrl + "login",

    ///////////////////////////////////////////ROLE//////////////////////////////////////////////////////////////////

    saveRoledetails: baseServiceUrl + "saveRoledetails",

    getAllRoles: baseServiceUrl + "getAllRoles",

    getAllRoleDetails: baseServiceUrl + "getAllRoleDetails",

    updateRoledetails: baseServiceUrl + "updateRoledetails",

    ///////////////////////////////////////////USER//////////////////////////////////////////////////////////////////

    getAllUserDetails: baseServiceUrl + "getAllUserDetails",

    saveUserDetails: baseServiceUrl + "saveUserDetails",

    ///////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////////////////


    getAllCountries: baseServiceUrl + "getAllCountries",

    getAllCountriesDetails: baseServiceUrl + "getAllCountriesDetails",

    saveCountryDetails:  baseServiceUrl + "saveCountryDetails",

    updateCountryDetails:  baseServiceUrl + "updateCountryDetails",

    ///////////////////////////////////////////CITY//////////////////////////////////////////////////////////////////


    saveCityDetails:  baseServiceUrl + "saveCityDetails",

    ///////////////////////////////////////////DESTINATION//////////////////////////////////////////////////////////////////

    getAllDestinationDetails: baseServiceUrl + "getAllDestinationDetails",


    ///////////////////////////////////////////DESTINATION PACKAGE////////////////////////////////////////////////////////////////////

    saveDestinationPackageDetails: baseServiceUrl + "saveDestinationPackageDetails",

    getAllPackageDetailsByDestinationId: baseServiceUrl + "getAllPackageDetailsByDestinationId",

    ///////////////////////////////////////////IMAGE//////////////////////////////////////////////////////////////////


    getImageDetailsByDestinationId: baseServiceUrl + "getImageDetailsByDestinationId",

    uploadImage: baseServiceUrl + "uploadImage",


    ///////////////////////////////////////////SUB-IMAGE//////////////////////////////////////////////////////////////////

    uploadSubImage: baseServiceUrl + "uploadSubImage",

    getAllSubImageDetailsByDestinationId: baseServiceUrl + "getAllSubImageDetailsByDestinationId",



    ///////////////////////////////////////////EMAIL-REQUEST//////////////////////////////////////////////////////////////////

    sendEmail: baseServiceUrl + "sendEmail",

    saveEmailDetails: baseServiceUrl + "saveEmailDetails",

    sendotp: baseServiceUrl + "saveEmailDetails",


    ////////////////////////////////////////////////////////OTP-VALIDATE/////////////////////////////////////////////////

    validateOtp:baseServiceUrl + "validateOtp",
  },
};
