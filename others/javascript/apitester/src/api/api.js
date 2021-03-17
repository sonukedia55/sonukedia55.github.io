const request = require("request");
import { updateApiResponse } from "../main/main";

function apiHand() {
  const apiTypes = ["GET", "POST", "PUT", "PATCH"];
  const activeMethod = {
    method: "GET",
    url: "",
    body: "",
  };
  let headerList = [];
  const historyList = [];

  return {
    getApiType: () => {
      return apiTypes;
    },
    getApiHistory: () => {
      return historyList;
    },
    addApiHistory: (v) => {
      historyList.push(v);
    },
    getApiHeader: () => {
      return headerList;
    },
    addApiHeader: (data) => {
      headerList.push(data);
    },
    updateApiHeader: ({ key, value, index, action }) => {
      if (action && action == "d") {
        headerList = headerList.filter((i, ind) => {
          return ind != index;
        });
      } else {
        headerList[index].key = key ? key : headerList[index].key;
        headerList[index].value = value ? value : headerList[index].value;
      }
    },
    getActiveMethod: () => {
      return activeMethod;
    },
    updateActiveMethod: ({ method, url, body }) => {
      activeMethod.method = method ? method : activeMethod.method;
      activeMethod.url = url ? url : activeMethod.url;
      activeMethod.body = body ? body : activeMethod.body;
    },
  };
}

export const apiHandler = apiHand();

export function apiRequester() {
  const activeMethod = apiHandler.getActiveMethod();
  console.log(apiHandler.getApiHeader());
  let buildHeader = {};
  apiHandler.getApiHeader().forEach((item) => {
    buildHeader[item.key] = item.value;
  });

  let options = {
    method: activeMethod.method,
    url: activeMethod.url,
    headers: buildHeader,
    ...(activeMethod.body.length
      ? { json: JSON.parse(activeMethod.body) }
      : {}),
  };

  console.log(options);
  updateApiResponse("Requesting...");
  request(options, function (error, response, body) {
    if (response) {
      apiHandler.addApiHistory({
        method: options.method,
        url: options.url,
        header: apiHandler.getApiHeader(),
        body: activeMethod.body,
        status: response.statusCode,
      });
    }
    if (error) {
      let errBody = error;
      if (typeof errBody == "string") {
        console.log("hMSgFGena", errBody);
      }
    }
    if (body) {
      console.log("hMSgFGen");
      console.log(body);
      updateApiResponse(body);
    }
  });
}
