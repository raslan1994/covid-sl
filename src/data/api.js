const api_endpoint = "https://www.hpb.health.gov.lk/api/get-current-statistical";

async function fetchDataFromApi() {
  var result = {
    error: true,
    payload: {}
  };

  try {
    var apiResponse = await fetch(api_endpoint);
    var jsonData = await apiResponse.json();

    result = {
      error: false,
      payload: jsonData
    }
  } catch (err) {
    //Nothing to do here
  }
  
  return result;
}

export {
  fetchDataFromApi,
}