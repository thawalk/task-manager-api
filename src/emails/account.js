const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send(
//     {
//         to: "tharunana@gmail.com",
//         from: "tharunana@gmail.com",
//         subject: "this is the first creation",
//         text: 'I hope this one actually gets to you'
//     }
// )

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'tharunana@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`

    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'tharunana@gmail.com',
        subject: 'Sorry to hear that you have cancelled with us!',
        text: `${name}, let us know why you cancelled.`
        
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}