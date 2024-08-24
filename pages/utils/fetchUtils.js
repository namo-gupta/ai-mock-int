export async function postApi(endpoint, dataObject, headers, options = {}) {

    if (!endpoint) return;

    try {
        const resp = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",  
              ...headers
          },
          body: JSON.stringify(dataObject),
            
        });

       
        data = await resp.json();
      } catch (e) {
        console.log(
          `Failed to fetch ${endpoint} with: ${JSON.stringify(
            dataObject
          )} [${e.toString()}]`
        );
      }
      return data;
    }

    export const getResponse = async (text) =>{

      let url="https://ai-backend-24bh5niria-uc.a.run.app/GenerateMessage";
      const body={
        "user_id": "ben123", 
        "session_context": {
            "interview_type": "consultant"
        },
        "message": [
            {
                "role": "user",
                "content": [{ "text": "hi" }]
            },
            {
                "role": "model",
                "content": [{ "text": "we will start an interview. You ready?" }]
            },
            {
                "role": "user",
                "content": [{ "text": "Yes I am ready." }]
            },
            {
                "role": "model",
                "content": [{ "text": ".. Thanks your interview is over. Have a good day." }]
            }
        ]
    }
  
      const data = await postApi(url,body);
      return data;
     }

    export const  dummy = () => {
        return (
          <></>
        )
      }
      export default dummy;