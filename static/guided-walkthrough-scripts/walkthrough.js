async function GetAllCustomerTransactions(workflowCtx, portal) {
  return {
    "Step 1": {
      name: "Introduction Guide",
      stepCallback: async () => {
        return workflowCtx.showContent(`## Introduction
This is a guided walkthrough that will showcase to how to get an **Finicity App Token** and then using that token to **Get All Customer Transactions**. 
## Getting Started
In order to fetch the **Customer Transactions**, you need to obtain a **Finicity App Token**. 
### Steps to obtain an access token
1. You will need \`partnerId\` and \`partnerSecret\` which are displayed in the [Developer Dashboard](https://developer.finicity.com/admin).
2. You will also need \'Finicity-App-Key\' which is displayed in the [Developer Dashboard](https://developer.finicity.com/admin).
2. Once you have the \`partnerId\` and \`partnerSecret\` go to **Step 2**  \`Generate App Token\`.
3. Go to the API Playground in **Step 2**. 
4. Copy the \`partnerId\` and \`partnerSecret\` in the respective fields.
5. Click on the Configure button in the Request Window.
5. Copy the \`Finicity-App-Key\` in the respective field.
5. Now click on Try it Out button in order to get the \`Finicty-App-Token\`.
6. Once the call is sucessful, the \`Finicty-App-Token\` will be used in all the future API calls.`);
      },
    },
    "Step 2": {
      name: "Generate App Token",
      stepCallback: async (stepState) => {
        await portal.setConfig((defaultConfig) => ({
          ...defaultConfig,
          config: {
            ...defaultConfig.config,
            "Finicity-App-Key": "630e029fb4be3836501cbddfc231a7a5",
          },
        }));
        return workflowCtx.showEndpoint({
          description: `## Introduction
This endpoint is used to generate a new \`Finicty-App-Token\` using \`partnerId\`, \`partnerSecret\` and \`Finicity-App-Key\`. 

Details on how to obtain \`Finicty-App-Token\` can be seen in **Step 1**.`,
          endpointPermalink: "$e/Authentication/CreateToken",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid repsonse. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
    "Step 3": {
      name: "Fetch Customer Transactions",
      stepCallback: async (stepState) => {
        const step2State = stepState?.["Step 2"];
        await portal.setConfig((defaultConfig) => {
          return {
            ...defaultConfig,
            config: {
              ...defaultConfig.config,
              "Finicity-App-Token": step2State.data?.token,
            },
          };
        });
        return workflowCtx.showEndpoint({
          description: `## Introduction
This endpoint returns the customer transations against entered \`customerId\` based on the \`fromDate\` and \`toDate\`. This endpoint required a **valid** \`Finicty-App-Token\` and \`Finicity-App-Key\`. `,
          endpointPermalink: "$e/Transactions/GetAllCustomerTransactions",
          verify: (response, setError) => {
            if (response.StatusCode == 404) {
              setError("Please add a valid Cutomer ID and try again.");
              return false;
            } else if (response.StatusCode == 401) {
              setError(
                "Please provide a valid App Token & App ID and try again."
              );
              return false;
            } else if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid repsonse. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
  };
}
