const baseServiceUrl = "http://localhost:8077/"
// const baseServiceUrl = "http://laxmi-env.eba-gczumsgt.us-east-2.elasticbeanstalk.com/"

//const baseServiceUrl = "http://travel-canvas-env.eba-t2x495mc.us-east-2.elasticbeanstalk.com/"


export const environment = {
  production: true,


  url: {

    ///////////////////////////////////////////DESTINATION//////////////////////////////////////////////////////////////////

    getAllDestinationDetails: baseServiceUrl + "getAllDestinationDetails",



    ///////////////////////////////////////////IMAGE//////////////////////////////////////////////////////////////////


    getImageDetailsByDestinationId: baseServiceUrl + "getImageDetailsByDestinationId",

    uploadImage: baseServiceUrl + "uploadImage",


    ///////////////////////////////////////////SUB-IMAGE//////////////////////////////////////////////////////////////////

    uploadSubImage: baseServiceUrl + "uploadSubImage",

    getAllSubImageDetailsByDestinationId: baseServiceUrl + "getAllSubImageDetailsByDestinationId",

  },
};
