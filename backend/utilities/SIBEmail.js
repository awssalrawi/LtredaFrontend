const SibApiV3Sdk = require('sib-api-v3-sdk');

//*options={name,email,templateId}
const sendEmailWithSIB = async (option) => {
  let defaultClient = SibApiV3Sdk.ApiClient.instance;
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.SIB_EMAIL_KEY;

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail = {
    to: [
      {
        email: option.email,
        name: option.name,
      },
    ],
    templateId: option.templateId,
    params: {
      date: Date.now(),
      Name: option.name,
      Email: option.email,
      Link: option.link,
    },

    headers: {
      'Content-type': 'application/json',
      'api-key': `${process.env.SIB_EMAIL_KEY}`,
      accept: 'application/json',
    },
  };

  //try {
  //  const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
  // console.log('API called successfully. Returned data: ' + data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  await apiInstance.sendTransacEmail(sendSmtpEmail);
};

//*create contact information
// let apiInstance = new SibApiV3Sdk.ContactsApi();

// let createContact = new SibApiV3Sdk.CreateContact();
// createContact.email = req.body.email;
// createContact.listIds = [2];

// apiInstance.sendTransacEmail(sendSmtpEmail).then(
//   function (data) {
//     console.log('API called successfully. Returned data: ' + data);
//   },
//   function (error) {
//     console.error(error);
//   }
// );
module.exports = sendEmailWithSIB;
