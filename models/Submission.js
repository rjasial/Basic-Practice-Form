import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
