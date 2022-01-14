function handleError(error, filePath = "", functionName = "") {
  console.error(`${filePath} -> ${functionName} -> Error:`, error);
}

function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

module.exports = { handleError, handleAuthResponse };
