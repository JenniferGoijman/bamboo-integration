# BambooHR integration

### Important Links

- BambooHR testing web: https://dcslguidesmithstest.bamboohr.com/

- BambooHR API documentation: https://documentation.bamboohr.com/docs

## Create an API Key

1º - Go to `Profile`

2º - Click on `API Keys`

3º - Click on `Add New Key`

![Go to Profile, API Keys & Add New Key image](images/steps-1-2-3.png)

4º - Write your `API Key name`

5º - Click on `Generate Key`

![Write your API Key name & Generate Key image](images/steps-4-5.png)

6º - Copy the `API Key` generated

![Copy the API key image](images/steps-6.png)

## Example to get employees directory

API Documentation: https://documentation.bamboohr.com/reference/get-employees-directory-1

1º - Fill the companyDomain: `https://{companyDomain}.bamboohr.com/`
![Fill Company Domain image](images/company-domain.png)

2º - Select if you want your response with JSON/XML format:
![Fill header image](images/header.png)

3º - Fill the username and password with you API Key:
![Authentication image](images/authentication.png)

4º - Try the endpoint and get the response!
![Try the endpoint image](images/try-endpoint.png)
