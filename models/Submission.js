import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    name: { type: String, 
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least 2 characters long'],
    },
    email: { type: String, 
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    zipcode: { type: String, 
        required: [true, 'ZipCode is required'],
        match: [/^\d{5}(-\d{4})?$/, 'Please use a valid zipcode format']
},
    country: { type: String, required: [true, 'country is required'] },
    createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
