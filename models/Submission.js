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

    // radio button
    userType: { type: String, 
        required: [true, 'User type is required'],
        enum:
            ['Student', 'Professional', 'Other'],
        required: false,
    },

    // checkbox value

    skills:{
        type: [String],
        enum: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Other', 'Node.js', 'React', 'Angular', 'Vue.js', 'Django', 'Flask', 'Spring', 'Hibernate'],
        required: false,
    },

    // checkbox value

    newsletter: { type: Boolean, required: false, default: false },

    fileData: { type: Buffer, required: false },
    fileMimeType: { type: String, required: false },
    fileName: { type: String, required: false },
    fileSize: { type: Number, required: false },




    createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
