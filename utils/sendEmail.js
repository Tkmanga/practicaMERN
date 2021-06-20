require('dotenv').config() 
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (
    to,
    from,
    subject,
    text)=>
    {
    const msg = {
        to,
        from,
        subject,
        text 
    }
    sgMail.send(msg,(err,result)=>{
        if(err){
            console.log('email not send')
        }else{
            console.log('email snet succes')
        }
    })
}

module.exports = sendEmail; 