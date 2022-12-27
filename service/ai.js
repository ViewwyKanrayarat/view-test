var axios = require('axios')

let sendAi = async (base64encode) => {
    try {
        let headers = {
            "Content-Type": "application/json",
            "manageai-key": process.env.MANAGEAI_KEY
          };
          let payload = {
            small_case: 2,
            medium_case: 0,
            large_case: 2.5,
            user: "panjapon",
            length_wood: 2,
            img: base64encode,
          };
      
          let response = await axios.post(process.env.API_AI, payload, {headers});
          return response
    } catch (error) {
        console.log(error.message);
        return {status:'fail',message:error.message}
    }
}

module.exports = {
    sendAi,
};