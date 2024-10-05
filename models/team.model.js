import mongoose from 'mongoose';

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      unique: true,
    },
    teamLeaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    teamNumber: {
      type: Number,
    },
    leaderName: {
      type: String,
    },
    leaderEmail: {
      type: String,
    },
    isQualified: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
    teamCode: {
      type: String,
      sparse: true,
      unique: true, // Ensure the team code is unique
    },
    codeExpiry: {
      type: Date,  // To store the time when the code expires
    },
    levels: {
      type: Number,
    },
    page: {
      type: Number,
    },
    loanAmount: {
      type: Number, //? To store the loan amount the user has taken, may differ form the wallet in round 2
    },
    interest: {
      type: Number, //? Will not be taken from the frontend, calculated in the backend route.js files
    },
    bondAllocated: {
      type: Number, //? Could be objectId of the bond, if it doesn't effect the speed
      default: null,
    },
    onHold: {
      type: Boolean, //? If false then the user can bid, else the timer starts for 3min
      default: false,
    },
    amountOnHold: {
      type: Number, //? After placing a bid, amount on hold
    },
    creditScore: {
      type: Number, //After taking loan it will update
    },
    bondsBidFor: [
      {
        type: Number, //? Array of bond numbers the user has bid for
      },
    ],
    hold: {
      type: Number,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    wallet: {
      type: String, // New field for storing the Google Form link
    },
  },
  { collection: 'TeamModel' }
);

export const TeamModel =
  mongoose.models.TeamModel || mongoose.model('TeamModel', teamSchema);
