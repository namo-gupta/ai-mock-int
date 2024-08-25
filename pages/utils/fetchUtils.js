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

      if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
      }

      let data;
      try {
          data = await resp.json();
      } catch (jsonError) {
          throw new Error(`Failed to parse JSON: ${jsonError}`);
      }

      return data;

  } catch (e) {
      console.log(
          `Failed to fetch ${endpoint} with: ${JSON.stringify(
              dataObject
          )} [${e.toString()}]`
      );
      throw e;
  }
}


    export const getResponse = async (text) =>{

      let url="https://ai-backend-24bh5niria-et.a.run.app/GenerateMessage";
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