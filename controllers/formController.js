export const showForm = (req, res) => {
    res.sendFile('form.html', { root: './views' });
};

export const handleFormSubmission = (req, res) => {
    const {name, email, zipcode, country} = req.body;
    console.log("New form Submission");
    console.log("Name:", name);
  console.log("Email:", email);
  console.log("Zipcode:", zipcode);
  console.log("Country:", country);


  res.send(`
    <h1>Form Submitted!</h1>
    <p>Thank you, ${name}. Check the server console to see the data received.</p>`);
}

