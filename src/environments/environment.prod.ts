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


    ///////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////////////////

    getAllCountries: baseServiceUrl + "getAllCountries",

    ///////////////////////////////////////////DESTINATION//////////////////////////////////////////////////////////////////

    getAllDestinationDetails: baseServiceUrl + "getAllDestinationDetails",


    ///////////////////////////////////////////DESTINATION PACKAGE////////////////////////////////////////////////////////////////////

    saveDestinationPackageDetails: baseServiceUrl + "saveDestinationPackageDetails",

    ///////////////////////////////////////////IMAGE//////////////////////////////////////////////////////////////////


    getImageDetailsByDestinationId: baseServiceUrl + "getImageDetailsByDestinationId",

    uploadImage: baseServiceUrl + "uploadImage",


    ///////////////////////////////////////////SUB-IMAGE//////////////////////////////////////////////////////////////////

    uploadSubImage: baseServiceUrl + "uploadSubImage",

    getAllSubImageDetailsByDestinationId: baseServiceUrl + "getAllSubImageDetailsByDestinationId",

    getAllPackageDetailsByDestinationId: baseServiceUrl + "getAllPackageDetailsByDestinationId",

  },
};
